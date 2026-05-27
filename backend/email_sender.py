"""SMTP email helper for Epsilon admissions notifications.

Reads config from env vars. If SMTP_HOST is unset, sending is silently skipped
(no exception) so the API continues to work while credentials are being configured.

Required env vars (all optional — feature activates only when all required are set):
  SMTP_HOST          e.g. smtp.gmail.com
  SMTP_PORT          e.g. 587 (TLS) or 465 (SSL)
  SMTP_USER          full email used to authenticate, e.g. Admissions@epsilonexec.in
  SMTP_PASS          mailbox password / Gmail App Password
  SMTP_FROM          (optional) override From address; defaults to SMTP_USER
  ADMISSIONS_EMAIL   (optional) destination; defaults to SMTP_USER
"""
from __future__ import annotations

import logging
import os
import smtplib
import ssl
from email.message import EmailMessage
from typing import Mapping

logger = logging.getLogger(__name__)


def _config() -> dict | None:
    host = os.environ.get("SMTP_HOST")
    if not host:
        return None
    port = int(os.environ.get("SMTP_PORT", "587"))
    user = os.environ.get("SMTP_USER")
    password = os.environ.get("SMTP_PASS")
    if not (user and password):
        logger.warning("SMTP_USER / SMTP_PASS not set — skipping email send.")
        return None
    return {
        "host": host,
        "port": port,
        "user": user,
        "password": password,
        "from_": os.environ.get("SMTP_FROM") or user,
        "to": os.environ.get("ADMISSIONS_EMAIL") or user,
    }


def _row(label: str, value: str | None) -> str:
    if value is None or value == "":
        return ""
    safe = (
        str(value)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )
    return (
        f"<tr>"
        f"<td style='padding:8px 14px;border-bottom:1px solid #eee;color:#666;"
        f"font-family:Arial,sans-serif;font-size:13px;width:180px;'>{label}</td>"
        f"<td style='padding:8px 14px;border-bottom:1px solid #eee;color:#111;"
        f"font-family:Arial,sans-serif;font-size:14px;'>{safe}</td></tr>"
    )


def _html(title: str, rows: Mapping[str, str | None]) -> str:
    body_rows = "".join(_row(k, v) for k, v in rows.items())
    return f"""<!doctype html>
<html><body style='margin:0;background:#f6f5f0;padding:24px;'>
  <table style='max-width:640px;margin:0 auto;background:#fff;border:1px solid #e5e2d8;'>
    <tr><td style='padding:24px 28px;border-bottom:2px solid #D4AF37;background:#040914;'>
      <div style='font-family:Georgia,serif;color:#F9F6F0;font-size:22px;'>Epsilon Admissions</div>
      <div style='font-family:Arial,sans-serif;color:#D4AF37;font-size:11px;
        text-transform:uppercase;letter-spacing:2px;margin-top:4px;'>New {title}</div>
    </td></tr>
    <tr><td style='padding:18px 0;'><table style='width:100%;border-collapse:collapse;'>
      {body_rows}
    </table></td></tr>
    <tr><td style='padding:14px 28px;background:#fafafa;font-family:Arial,sans-serif;
      font-size:12px;color:#777;'>Sent automatically from epsilonexec.com lead capture.</td></tr>
  </table>
</body></html>"""


def send_notification(subject: str, title: str, rows: Mapping[str, str | None]) -> bool:
    """Send a transactional notification. Returns True if sent, False otherwise.
    Never raises — failures are logged so the API request itself stays successful."""
    cfg = _config()
    if not cfg:
        return False

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = cfg["from_"]
    msg["To"] = cfg["to"]
    # Allow direct reply to the lead's email if present
    reply_to = rows.get("Email") if isinstance(rows, dict) else None
    if reply_to:
        msg["Reply-To"] = reply_to

    text_lines = [f"{k}: {v}" for k, v in rows.items() if v]
    msg.set_content("\n".join(text_lines) or "(no details)")
    msg.add_alternative(_html(title, rows), subtype="html")

    try:
        if cfg["port"] == 465:
            ctx = ssl.create_default_context()
            with smtplib.SMTP_SSL(cfg["host"], cfg["port"], context=ctx, timeout=20) as s:
                s.login(cfg["user"], cfg["password"])
                s.send_message(msg)
        else:
            with smtplib.SMTP(cfg["host"], cfg["port"], timeout=20) as s:
                s.ehlo()
                s.starttls(context=ssl.create_default_context())
                s.ehlo()
                s.login(cfg["user"], cfg["password"])
                s.send_message(msg)
        logger.info("Notification email sent to %s — %s", cfg["to"], subject)
        return True
    except Exception as e:  # noqa: BLE001
        logger.exception("Failed to send notification email: %s", e)
        return False
