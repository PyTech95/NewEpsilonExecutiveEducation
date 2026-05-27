// Global Thank-You overlay — listens for `epsilon:show-thank-you` window event
// then displays a premium 5-second countdown screen and redirects to the main site.
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const REDIRECT_URL = "https://epsilonexec.com/";
const COUNTDOWN_SECS = 5;

export default function ThankYouOverlay() {
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(COUNTDOWN_SECS);

  useEffect(() => {
    const onShow = () => {
      setSeconds(COUNTDOWN_SECS);
      setVisible(true);
    };
    window.addEventListener("epsilon:show-thank-you", onShow);
    return () => window.removeEventListener("epsilon:show-thank-you", onShow);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Lock scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Countdown
    const t = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(t);
          window.location.href = REDIRECT_URL;
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      clearInterval(t);
      document.body.style.overflow = prev;
    };
  }, [visible]);

  if (!visible) return null;

  const progress = ((COUNTDOWN_SECS - seconds) / COUNTDOWN_SECS) * 100;

  return (
    <div
      data-testid="thank-you-overlay"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100002] flex items-center justify-center bg-navy-deep popup-fade-in"
    >
      <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full glow-gold opacity-50 pointer-events-none" />

      <div className="relative w-full max-w-2xl mx-auto px-6 text-center dialog-in">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-7 border-2 border-gold rounded-full bg-cream/5 backdrop-blur-sm">
          <CheckCircle2 size={38} className="text-gold" strokeWidth={1.8} />
        </div>

        <p className="font-mono uppercase text-[12px] tracking-[0.28em] text-gold font-semibold mb-3">
          — Thank You —
        </p>

        <h1 className="font-editorial text-cream text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] leading-[1.06] font-semibold">
          We've received your enquiry.
        </h1>

        <p className="font-editorial italic text-gold text-[1.6rem] sm:text-[1.9rem] md:text-[2.2rem] leading-tight mt-2">
          Our admissions lead will be in touch shortly.
        </p>

        <p className="font-editorial text-cream/80 text-[1.05rem] sm:text-[1.15rem] md:text-[1.22rem] font-medium leading-relaxed mt-6 max-w-xl mx-auto">
          You'll be redirected to <span className="text-cream font-semibold">epsilonexec.com</span> in a few seconds.
          If the page doesn't redirect automatically,{" "}
          <a href={REDIRECT_URL} className="text-gold underline underline-offset-4 hover:no-underline">
            click here
          </a>.
        </p>

        {/* Countdown */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-3">
            <span className="font-editorial text-cream text-[1.4rem] font-semibold">{seconds}</span>
            <span className="font-mono uppercase text-[11px] tracking-[0.24em] text-cream/55 font-semibold">
              second{seconds === 1 ? "" : "s"} remaining
            </span>
          </div>

          {/* Progress bar */}
          <div className="mx-auto mt-4 w-64 max-w-full h-[2px] bg-cream/15 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn   { from { opacity: 0; transform: translateY(14px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        .popup-fade-in { animation: fadeIn .35s ease-out both; }
        .dialog-in    { animation: popIn  .5s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>
    </div>
  );
}

// Helper to trigger the overlay from anywhere
export const showThankYou = () => {
  window.dispatchEvent(new CustomEvent("epsilon:show-thank-you"));
};
