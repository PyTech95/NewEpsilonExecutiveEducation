# PRD — Epsilon Executive Education · Landing Page

## Original Problem Statement
Redesign the existing landing page (https://landing-41z6.onrender.com/) for Epsilon Executive Education's 12-week live Applied AI & ML programme. The client (Shreya Jain) sent specific change-request feedback:

1. Match font from website, fix spacing (was hard to read)
2. Hero/top banner: **dark background**, **light** colored form, **bigger** form
3. Remove all mentions of "Cohort 01"
4. "Faculty with experience at" section: **static**, not moving banner, with **logos** for every entry
5. "See detailed curriculum…" CTA needs a **gold button** background
6. "Who is the programme for" section: use **icons** instead of numbers (01, 02…)
7. Add **job placement infographic** section (from brochure pages 16–17)
8. Mobile: **sticky Call Now + WhatsApp** circular buttons at bottom-right
9. **Social media profiles** in desktop nav + footer (Instagram, Facebook, LinkedIn, YouTube)
10. **Video showcase** section
11. **Pop-up form** after 15 seconds — Name / Email / Phone / Course → "Schedule Call Back"
12. Overall an "amazing layout and attractive design"

## Architecture
- **Frontend**: React 19 + Tailwind 3 + Cormorant Garamond (serif) + Manrope (sans) + lucide-react + react-icons
- **Backend**: FastAPI + Motor (async MongoDB)
- **DB Collections**: `brochure_leads`, `callback_leads`, `status_checks`
- **Auth**: None (public marketing site)

## API Surface
- `GET /api/` — health
- `POST /api/leads/brochure` — hero brochure form (Name, Phone, Email, Job title, Experience, City)
- `GET /api/leads/brochure` — list (internal, no auth — production should gate this)
- `POST /api/leads/callback` — apply CTA + 15s pop-up form (Name, Email, Phone, Course)
- `GET /api/leads/callback` — list

## User Personas
1. **Working professional (5–15 yrs experience)** evaluating an executive AI programme — primary audience
2. **Programme advisor / admin** consuming captured leads (internal)

## What's Been Implemented (2026-01-25)
- ✅ Full single-page landing with 14 sections in `/app/frontend/src/pages/Landing.jsx`
- ✅ Dark hero with prominent light brochure form (Cormorant Garamond serif H1, animated entrance)
- ✅ Static logo strip — Faculty experience institutions (NYU, Columbia, JPMorgan, LinkedIn, UC Berkeley, Market Theory AI, Interpublic) — no marquee
- ✅ Audience grid with Lucide icons (Compass, Megaphone, ClipboardList, FlaskConical, Database, Users2) — no numbers
- ✅ 4-module curriculum with milestones + **gold-background** "See detailed curriculum in brochure" CTA
- ✅ Static faculty grid: Kent (lead) + 4 guest lecturers (Jayprakash, Philip, Alena, Mardoqueo)
- ✅ Video showcase section with modal player
- ✅ Job placement infographic: 4 headline stats (94%, 62%, ₹28L, 240+), role-distribution bar chart, hiring-partners grid
- ✅ Testimonials, Certificate visual, FAQ accordion, Apply CTA form
- ✅ Footer with social icons (IG, FB, LI, YT)
- ✅ Navbar with social icons (desktop), responsive mobile menu (≤lg)
- ✅ Sticky mobile WhatsApp + Call floating buttons (md:hidden)
- ✅ 15-second delayed pop-up form (Name/Email/Phone/Course → Schedule Call Back), sessionStorage gated
- ✅ All "Cohort 01" mentions removed
- ✅ Backend lead endpoints + MongoDB persistence
- ✅ 100% testing-agent pass (backend 10/10, frontend 18/18)

## Prioritized Backlog
### P0 (none) — MVP shipped
### P1
- Gate `GET /api/leads/*` endpoints behind admin auth (PII protection)
- Add SendGrid/Resend integration for auto-confirmation emails on form submit
- Replace placeholder programme-preview YouTube iframe with real video when client provides
### P2
- Lead-export CSV admin panel
- Pagination on lead-list endpoints
- A/B test gold CTA vs ink CTA on hero
- Add UTM tracking on form submissions
- Schema.org markup for richer SEO
- Add a brochure-download PDF asset (currently form-only)

## Future Enhancements
- Conversion analytics dashboard (lead → call → enrolment funnel)
- WhatsApp Business API auto-reply on submit
- Razorpay / Stripe checkout for application fee
- Multi-cohort landing pages (cohort 02, 03…) using same template

## Known Notes
- The 15s pop-up uses `sessionStorage` key `epsilon_popup_shown_v1` — only fires once per browser session
- `GET /api/leads/*` is currently unauthenticated; do not expose in production without a guard
- Sticky mobile CTA uses `+91 90000 12345` and WhatsApp `919000012345` placeholders — replace with real numbers in `/app/frontend/src/lib/constants.js`
- Social media URLs are placeholders in `constants.js`
