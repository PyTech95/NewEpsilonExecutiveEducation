# Epsilon Executive Education — PRD

## Original Problem Statement
Build a fully functional, premium-aesthetic landing page and multi-step Apply page for "Epsilon Executive Education" — a 12-week live online Applied AI & Machine Learning cohort for senior professionals in India. Programme led by former NYU professor Kent Oliver Bhupathi + 4 guest faculty (JPMorgan, LinkedIn, The NRP Group, Remarkables Capital). Tuition ₹89,000. Next cohort Spring/Sept 2026.

Requirements:
- Dark theme hero with light lead-capture form
- 15-second centered pop-up
- Sticky top scrolling marquee
- Real faculty + tools logos
- Sticky mobile CTA for WhatsApp/Call
- Apply page with 4-step wizard saving to DB

## Architecture
- Frontend: React + Tailwind + lucide-react + shadcn/ui, served at `/`
- Backend: FastAPI at `/app/backend/server.py`, all routes under `/api`
- DB: MongoDB (`brochure_leads`, `callback_leads`, `applications`)

## Key Endpoints
- `POST /api/leads/brochure`
- `POST /api/leads/callback`
- `POST /api/applications`

## What's Implemented
- **MVP (prior sessions)**: Full landing page, Apply page wizard, popup, sticky CTA, marquees, faculty section, all sections (Stats, Overview, Audience, Curriculum, JobPlacement, Certificate, FAQ, VideoShowcase, Footer)
- **2026-02-25 — Guest faculty real photos**: Scraped & wired real headshots from epsilonexec.com (Jayprakash Mistry, Philip Wiseman, Alena Savera, Mardoqueo Arteaga) at `/app/frontend/public/assets/`
- **2026-02-25 — Premium editorial redesign**:
  - New design system: Cormorant Garamond (editorial serif) + Manrope (display sans) + DM Mono (eyebrows); navy-deep `#040914` + cream `#F9F6F0` + gold `#D4AF37` palette
  - Global utilities: `eyebrow`, `gold-rule`, `starfield`, `glow-gold`, `corner-brackets`, `btn-gold`, `btn-outline-gold`, `fld-input`, `fade-up`, `link-gold`
  - New shared component: `ChapterDivider.jsx` for editorial chapter labelling
  - Refactored: `Hero.jsx` (cinematic editorial hero with starfield + glow + cream brochure card on right), `Faculty.jsx` (Kent showcase with gold caption tab + round-avatar guest grid with grayscale→color hover + click-to-open bio modal), `Testimonials.jsx`, `EpsilonExperience.jsx`, `ApplyCTA.jsx`, `PopupForm.jsx` (centered modal, sharp corners, navy header band with starfield), `Navbar.jsx`, `MarqueeBanner.jsx` (LIVE pulsing dot prefix), `Footer.jsx`, `StickyMobileCTA.jsx` (mobile bottom bar + desktop WhatsApp float with pulse), `ToolsMarquee.jsx`, `FacultyLogos.jsx`, `Stats.jsx`, `Overview.jsx`, `Audience.jsx`, `Curriculum.jsx` (modules + capstone), `FAQ.jsx`, `JobPlacement.jsx`, `Certificate.jsx`, `VideoShowcase.jsx`

## Pending / Backlog
- **P0** Provide real video URL for `VideoShowcase.jsx` (currently placeholder)
- **P0** Real contact info (phone, WhatsApp, email, social URLs) in `/app/frontend/src/lib/constants.js`
- **P1** End-to-end mobile responsiveness QA at 360/390/430 breakpoints
- **P1** Apply page premium polish pass (currently inherits global tokens but step UI could match new editorial chapter style)
- **P2** Add admin dashboard for viewing leads & applications
- **P2** Add bio modal "View LinkedIn" deep-link per guest
- **P2** Replace placeholder Clearbit logos when real brand assets are obtained

## File Map
```
/app/
├── backend/server.py
└── frontend/src/
    ├── index.css                 (premium editorial design system)
    ├── lib/constants.js          (BRAND, SOCIAL, COURSE — needs real values)
    ├── pages/
    │   ├── Landing.jsx
    │   └── Apply.jsx
    └── components/site/
        ├── ChapterDivider.jsx    (NEW — reusable)
        ├── Hero.jsx              (REDESIGNED)
        ├── Faculty.jsx           (REDESIGNED — round avatars + bio modal)
        ├── Testimonials.jsx      (REDESIGNED)
        ├── EpsilonExperience.jsx (REDESIGNED)
        ├── ApplyCTA.jsx          (REDESIGNED)
        ├── PopupForm.jsx         (REDESIGNED)
        ├── Navbar.jsx            (REDESIGNED)
        ├── MarqueeBanner.jsx     (REDESIGNED)
        ├── Footer.jsx            (REDESIGNED)
        ├── StickyMobileCTA.jsx   (REDESIGNED — bottom bar + desktop float)
        ├── ToolsMarquee.jsx      (REDESIGNED)
        ├── FacultyLogos.jsx      (REDESIGNED)
        ├── Stats.jsx, Overview.jsx, Audience.jsx, Curriculum.jsx,
        ├── FAQ.jsx, JobPlacement.jsx, Certificate.jsx, VideoShowcase.jsx
        └── ApplyCTA.jsx
```
