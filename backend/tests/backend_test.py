"""
Backend tests for Epsilon Executive Education API
Covers: root health, brochure lead CRUD-style endpoints, callback lead endpoints,
validation and MongoDB persistence.
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fall back to frontend .env when REACT_APP_BACKEND_URL is not exported
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.strip().split("=", 1)[1]
                    break

assert BASE_URL, "REACT_APP_BACKEND_URL must be set"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Epsilon" in data["message"]


# ---------- Brochure lead endpoints ----------
class TestBrochureLead:
    def test_create_brochure_lead_full_payload(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Brochure_{unique}",
            "phone": "+919999999999",
            "email": f"test_brochure_{unique}@example.com",
            "job_title": "Senior Manager",
            "experience": "8-12 yrs",
            "city": "Mumbai",
        }
        r = session.post(f"{API}/leads/brochure", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("success") is True
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "message" in data
        # Verify persistence
        list_r = session.get(f"{API}/leads/brochure")
        assert list_r.status_code == 200
        leads = list_r.json()
        assert isinstance(leads, list)
        matched = [l for l in leads if l.get("id") == data["id"]]
        assert len(matched) == 1, "Newly created brochure lead not found in list"
        lead = matched[0]
        assert lead["name"] == payload["name"]
        assert lead["email"] == payload["email"]
        assert lead["phone"] == payload["phone"]
        assert lead["job_title"] == payload["job_title"]
        assert lead["city"] == payload["city"]
        assert lead["source"] == "brochure_hero"
        # _id (Mongo) must NOT leak
        assert "_id" not in lead

    def test_create_brochure_lead_minimum_payload(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Min_{unique}",
            "phone": "9999999999",
            "email": f"min_{unique}@example.com",
        }
        r = session.post(f"{API}/leads/brochure", json=payload)
        assert r.status_code == 200, r.text
        assert r.json().get("success") is True

    def test_create_brochure_lead_invalid_email(self, session):
        payload = {
            "name": "TEST_Invalid",
            "phone": "1234567890",
            "email": "not-an-email",
        }
        r = session.post(f"{API}/leads/brochure", json=payload)
        assert r.status_code == 422

    def test_create_brochure_lead_missing_required(self, session):
        r = session.post(f"{API}/leads/brochure", json={"name": "x"})
        assert r.status_code == 422


# ---------- Callback lead endpoints ----------
class TestCallbackLead:
    def test_create_callback_lead(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Callback_{unique}",
            "email": f"cb_{unique}@example.com",
            "phone": "+919876543210",
            "course": "Applied AI & ML for Decision-Makers",
        }
        r = session.post(f"{API}/leads/callback", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("success") is True
        assert "id" in data
        # Persistence
        list_r = session.get(f"{API}/leads/callback")
        assert list_r.status_code == 200
        leads = list_r.json()
        matched = [l for l in leads if l.get("id") == data["id"]]
        assert len(matched) == 1
        lead = matched[0]
        assert lead["name"] == payload["name"]
        assert lead["email"] == payload["email"]
        assert lead["course"] == payload["course"]
        assert lead["source"] == "popup_15s"
        assert "_id" not in lead

    def test_callback_invalid_email(self, session):
        r = session.post(
            f"{API}/leads/callback",
            json={"name": "x", "email": "bad", "phone": "1", "course": "c"},
        )
        assert r.status_code == 422

    def test_callback_missing_fields(self, session):
        r = session.post(f"{API}/leads/callback", json={"name": "x"})
        assert r.status_code == 422


# ---------- List endpoints sanity ----------
class TestListEndpoints:
    def test_list_brochure(self, session):
        r = session.get(f"{API}/leads/brochure")
        assert r.status_code == 200
        assert isinstance(r.json(), list)

    def test_list_callback(self, session):
        r = session.get(f"{API}/leads/callback")
        assert r.status_code == 200
        assert isinstance(r.json(), list)
