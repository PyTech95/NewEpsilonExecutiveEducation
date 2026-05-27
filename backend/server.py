from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from email_sender import send_notification


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Epsilon Executive Education API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class BrochureLead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: EmailStr
    job_title: Optional[str] = None
    experience: Optional[str] = None
    city: Optional[str] = None
    source: str = "brochure_hero"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class BrochureLeadCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    job_title: Optional[str] = None
    experience: Optional[str] = None
    city: Optional[str] = None


class CallbackLead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    course: str
    source: str = "popup_15s"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class CallbackLeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    course: str


class Application(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    # Personal
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    city: str
    country: str = "India"
    linkedin: Optional[str] = None
    # Professional
    current_role: str
    company: str
    experience_years: str
    industry: str
    # Education
    highest_qualification: str
    # Programme
    course: str
    cohort_preference: Optional[str] = None
    # Fit
    motivation: str
    goals: Optional[str] = None
    referral_source: Optional[str] = None
    # Meta
    status: str = "submitted"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ApplicationCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    city: str
    country: Optional[str] = "India"
    linkedin: Optional[str] = None
    current_role: str
    company: str
    experience_years: str
    industry: str
    highest_qualification: str
    course: str
    cohort_preference: Optional[str] = None
    motivation: str
    goals: Optional[str] = None
    referral_source: Optional[str] = None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Epsilon Executive Education API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/leads/brochure")
async def create_brochure_lead(payload: BrochureLeadCreate):
    lead = BrochureLead(**payload.model_dump())
    await db.brochure_leads.insert_one(lead.model_dump())
    send_notification(
        subject=f"[Epsilon] Brochure request — {lead.name}",
        title="Brochure Request",
        rows={
            "Name": lead.name,
            "Email": lead.email,
            "Phone": lead.phone,
            "Job Title": lead.job_title,
            "Experience": lead.experience,
            "City": lead.city,
            "Submitted": lead.created_at,
            "Source": "Hero — Download Brochure",
        },
    )
    return {"success": True, "id": lead.id, "message": "Brochure request received. Check your email."}


@api_router.get("/leads/brochure")
async def list_brochure_leads():
    leads = await db.brochure_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return leads


@api_router.post("/leads/callback")
async def create_callback_lead(payload: CallbackLeadCreate):
    lead = CallbackLead(**payload.model_dump())
    await db.callback_leads.insert_one(lead.model_dump())
    send_notification(
        subject=f"[Epsilon] Callback request — {lead.name}",
        title="Callback Request",
        rows={
            "Name": lead.name,
            "Email": lead.email,
            "Phone": lead.phone,
            "Course Interest": lead.course,
            "Submitted": lead.created_at,
            "Source": "15-second pop-up",
        },
    )
    return {"success": True, "id": lead.id, "message": "Callback request received. Our advisor will reach out within 24 hours."}


@api_router.get("/leads/callback")
async def list_callback_leads():
    leads = await db.callback_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return leads


@api_router.post("/applications")
async def create_application(payload: ApplicationCreate):
    app_doc = Application(**payload.model_dump())
    await db.applications.insert_one(app_doc.model_dump())
    send_notification(
        subject=f"[Epsilon] Application — {app_doc.first_name} {app_doc.last_name}",
        title="Programme Application",
        rows={
            "Name": f"{app_doc.first_name} {app_doc.last_name}",
            "Email": app_doc.email,
            "Phone": app_doc.phone,
            "City": app_doc.city,
            "Country": app_doc.country,
            "LinkedIn": app_doc.linkedin,
            "Current Role": app_doc.current_role,
            "Company": app_doc.company,
            "Experience (years)": app_doc.experience_years,
            "Industry": app_doc.industry,
            "Highest Qualification": app_doc.highest_qualification,
            "Course": app_doc.course,
            "Cohort Preference": app_doc.cohort_preference,
            "Motivation": app_doc.motivation,
            "Goals": app_doc.goals,
            "Referral Source": app_doc.referral_source,
            "Application ID": app_doc.id,
            "Submitted": app_doc.created_at,
        },
    )
    return {
        "success": True,
        "id": app_doc.id,
        "message": "Application received. Our admissions team will reach out within 48 working hours."
    }


@api_router.get("/applications")
async def list_applications():
    apps = await db.applications.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return apps


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
