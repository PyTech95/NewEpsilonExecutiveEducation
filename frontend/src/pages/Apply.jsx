import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowLeft, ArrowRight, Check, Loader2, User, Briefcase, GraduationCap, MessageSquare, Sparkles, ShieldCheck
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SOCIAL } from "@/lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const STEPS = [
  { key: "personal", label: "About You", Icon: User },
  { key: "work", label: "Your Work", Icon: Briefcase },
  { key: "background", label: "Background", Icon: GraduationCap },
  { key: "fit", label: "Fit & Goals", Icon: MessageSquare },
];

const COURSES = [
  "Applied AI & Machine Learning for Decision-Makers",
  "AI for Product Managers",
  "Data Storytelling for Executives",
  "Strategic Leadership in the AI Era",
];

const EXPERIENCE = [
  "0 – 2 years",
  "3 – 5 years",
  "5 – 10 years",
  "10 – 15 years",
  "15+ years",
];

const INDUSTRY = [
  "Technology / SaaS", "Banking & Financial Services", "Consulting",
  "E-commerce / Retail", "Healthcare / Pharma", "Manufacturing",
  "Media & Entertainment", "Education", "Government / Public Sector", "Other",
];

const QUALIFICATION = [
  "Bachelor's", "Master's / MBA", "Doctorate (PhD)",
  "Professional certification", "Other",
];

const COHORT = [
  "Next intake — Spring 2026 (March)",
  "Following intake — Summer 2026 (June)",
  "Flexible / Any",
];

const REFERRAL = [
  "LinkedIn", "Instagram", "Friend / Colleague", "Search",
  "Newsletter", "Brochure download", "Other",
];

const INITIAL = {
  first_name: "", last_name: "", email: "", phone: "", city: "",
  country: "India", linkedin: "",
  current_role: "", company: "", experience_years: "", industry: "",
  highest_qualification: "",
  course: COURSES[0], cohort_preference: "",
  motivation: "", goals: "", referral_source: "",
};

export default function Apply() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const setRaw = (k, v) => setForm({ ...form, [k]: v });

  const validateStep = () => {
    if (step === 0) {
      const ok = form.first_name && form.last_name && form.email && form.phone && form.city;
      if (!ok) toast.error("Please complete all required fields.");
      return ok;
    }
    if (step === 1) {
      const ok = form.current_role && form.company && form.experience_years && form.industry;
      if (!ok) toast.error("Please complete all required fields.");
      return ok;
    }
    if (step === 2) {
      const ok = form.highest_qualification && form.course;
      if (!ok) toast.error("Please complete all required fields.");
      return ok;
    }
    if (step === 3) {
      const ok = form.motivation && form.motivation.length >= 40;
      if (!ok) toast.error("Tell us a bit more about your motivation (at least 40 characters).");
      return ok;
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prev = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/applications`, form);
      setDone(data);
      toast.success("Application received.");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) return <ThankYou applicationId={done.id} />;

  return (
    <main data-testid="apply-page" className="min-h-screen bg-ink text-white">
      <ApplyNav />

      <div className="relative isolate pt-28 md:pt-36 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.12),transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-3xl mb-12 animate-fade-up">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Applications · Spring 2026</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Apply to <em className="text-gold">Epsilon.</em>
            </h1>
            <p className="mt-5 text-white/65 text-lg font-light max-w-2xl">
              A personal conversation. Not a funnel. Every applicant speaks with an admissions lead
              before a seat is offered — and we read every line you write.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left: stepper / context */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Stepper step={step} setStep={setStep} />
                <div className="hidden lg:block mt-10 border-l-2 border-gold/40 pl-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-2">What happens next</p>
                  <ol className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <li><span className="text-gold-light font-semibold">01.</span> We review your application within 48 hours</li>
                    <li><span className="text-gold-light font-semibold">02.</span> Our admissions lead schedules a 20-min call</li>
                    <li><span className="text-gold-light font-semibold">03.</span> A seat is offered based on fit — not first-come</li>
                    <li><span className="text-gold-light font-semibold">04.</span> Onboarding & pre-work begin two weeks before kickoff</li>
                  </ol>
                </div>
              </div>
            </aside>

            {/* Right: form */}
            <section className="lg:col-span-8">
              <form
                onSubmit={(e) => (step === STEPS.length - 1 ? submit(e) : (e.preventDefault(), next()))}
                data-testid="apply-form"
                className="bg-white text-ink rounded-md shadow-2xl shadow-black/40 ring-1 ring-black/5 overflow-hidden"
              >
                <div className="bg-ink/[0.04] border-b border-ink/10 px-7 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-dark font-semibold">
                      Step {step + 1} of {STEPS.length}
                    </p>
                    <h2 className="font-serif text-2xl mt-1">{STEPS[step].label}</h2>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-ink/45">
                    All fields private
                  </div>
                </div>

                {/* Progress */}
                <div className="h-1 bg-ink/5">
                  <div
                    className="h-full bg-gradient-to-r from-gold-dark to-gold transition-all duration-500"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>

                <div className="p-7 md:p-9 min-h-[520px]">
                  {step === 0 && <StepPersonal form={form} set={set} />}
                  {step === 1 && <StepWork form={form} set={set} setRaw={setRaw} />}
                  {step === 2 && <StepBackground form={form} set={set} setRaw={setRaw} />}
                  {step === 3 && <StepFit form={form} set={set} setRaw={setRaw} />}
                </div>

                {/* Actions */}
                <div className="px-7 md:px-9 py-6 bg-ink/[0.03] border-t border-ink/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    disabled={step === 0}
                    data-testid="apply-prev-btn"
                    className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>

                  {step < STEPS.length - 1 ? (
                    <button
                      type="submit"
                      data-testid="apply-next-btn"
                      className="inline-flex items-center gap-2 bg-ink hover:bg-gold text-white px-7 py-3.5 rounded-sm text-sm font-semibold tracking-wider uppercase transition-colors"
                    >
                      Continue <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      data-testid="apply-submit-btn"
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wider uppercase transition-colors disabled:opacity-60"
                    >
                      {loading ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  )}
                </div>
              </form>

              {/* Trust band */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/45">
                <span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-gold" /> Your data is never sold or shared</span>
                <span className="hidden sm:inline">•</span>
                <span>Need help? <a href="mailto:admissions@epsiloned.com" className="text-gold hover:text-gold-light">admissions@epsiloned.com</a></span>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ApplyFooter />
    </main>
  );
}

// ============ Sub-components ============

function Stepper({ step, setStep }) {
  return (
    <ol data-testid="apply-stepper" className="space-y-3">
      {STEPS.map((s, i) => {
        const active = step === i;
        const done = step > i;
        return (
          <li key={s.key}>
            <button
              type="button"
              onClick={() => step > i && setStep(i)}
              disabled={!done}
              data-testid={`stepper-${s.key}`}
              className={`w-full text-left flex items-center gap-4 p-4 rounded-sm border transition-all ${
                active
                  ? "border-gold bg-gold/10 text-white"
                  : done
                  ? "border-white/15 bg-white/[0.03] text-white/80 hover:border-gold/40 cursor-pointer"
                  : "border-white/10 text-white/40 cursor-not-allowed"
              }`}
            >
              <span
                className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold ${
                  active ? "bg-gold text-white" : done ? "bg-gold/30 text-gold-light" : "bg-white/5"
                }`}
              >
                {done ? <Check size={16} /> : i + 1}
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] opacity-70">Step {i + 1}</div>
                <div className="font-serif text-lg">{s.label}</div>
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function StepPersonal({ form, set }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 animate-fade-up">
      <FieldInput testid="apply-first-name" label="First Name *" value={form.first_name} onChange={set("first_name")} />
      <FieldInput testid="apply-last-name" label="Last Name *" value={form.last_name} onChange={set("last_name")} />
      <FieldInput testid="apply-email" label="Email *" type="email" value={form.email} onChange={set("email")} />
      <FieldInput testid="apply-phone" label="Phone *" type="tel" value={form.phone} onChange={set("phone")} />
      <FieldInput testid="apply-city" label="City *" value={form.city} onChange={set("city")} />
      <FieldInput testid="apply-country" label="Country" value={form.country} onChange={set("country")} />
      <div className="sm:col-span-2">
        <FieldInput testid="apply-linkedin" label="LinkedIn URL (optional)" value={form.linkedin} onChange={set("linkedin")} placeholder="https://linkedin.com/in/..." />
      </div>
    </div>
  );
}

function StepWork({ form, set, setRaw }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 animate-fade-up">
      <FieldInput testid="apply-role" label="Current Role *" value={form.current_role} onChange={set("current_role")} />
      <FieldInput testid="apply-company" label="Company *" value={form.company} onChange={set("company")} />
      <FieldSelect testid="apply-experience" label="Work Experience *" value={form.experience_years} onChange={(v) => setRaw("experience_years", v)} options={EXPERIENCE} placeholder="Select range" />
      <FieldSelect testid="apply-industry" label="Industry *" value={form.industry} onChange={(v) => setRaw("industry", v)} options={INDUSTRY} placeholder="Select industry" />
    </div>
  );
}

function StepBackground({ form, set, setRaw }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 animate-fade-up">
      <FieldSelect testid="apply-qualification" label="Highest Qualification *" value={form.highest_qualification} onChange={(v) => setRaw("highest_qualification", v)} options={QUALIFICATION} placeholder="Select" />
      <FieldSelect testid="apply-course" label="Course of Interest *" value={form.course} onChange={(v) => setRaw("course", v)} options={COURSES} />
      <div className="sm:col-span-2">
        <FieldSelect testid="apply-cohort" label="Cohort Preference" value={form.cohort_preference} onChange={(v) => setRaw("cohort_preference", v)} options={COHORT} placeholder="Select" />
      </div>
    </div>
  );
}

function StepFit({ form, set, setRaw }) {
  return (
    <div className="grid gap-5 animate-fade-up">
      <FieldTextarea
        testid="apply-motivation"
        label="Why this program? *"
        hint="A few honest lines. We read every one."
        value={form.motivation}
        onChange={set("motivation")}
        rows={5}
        placeholder="What are you hoping to walk away with?"
      />
      <FieldTextarea
        testid="apply-goals"
        label="What does success look like in the next 12 months?"
        value={form.goals}
        onChange={set("goals")}
        rows={3}
        placeholder="The role, project, or decision you want to win."
      />
      <FieldSelect testid="apply-referral" label="How did you hear about Epsilon?" value={form.referral_source} onChange={(v) => setRaw("referral_source", v)} options={REFERRAL} placeholder="Select" />
    </div>
  );
}

// ===== Field primitives =====

function FieldInput({ label, testid, value, onChange, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60 font-semibold">{label}</span>
      <input
        data-testid={testid}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1.5 w-full bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm transition-colors"
      />
    </label>
  );
}

function FieldSelect({ label, testid, value, onChange, options, placeholder }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60 font-semibold">{label}</span>
      <select
        data-testid={testid}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%230A0F1C' opacity='0.5' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          paddingRight: 36,
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function FieldTextarea({ label, testid, value, onChange, rows = 4, placeholder, hint }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60 font-semibold">{label}</span>
        {hint && <span className="text-[11px] text-ink/40 italic">{hint}</span>}
      </div>
      <textarea
        data-testid={testid}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="mt-1.5 w-full bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm transition-colors resize-y"
      />
    </label>
  );
}

// ===== Nav + Footer (lightweight, page-specific) =====

function ApplyNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-ink/85 backdrop-blur-md border-b hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
        <Link to="/" data-testid="apply-nav-home" className="flex items-center">
          <img src="/assets/logo.png" alt="Epsilon Executive Education" className="h-16 md:h-20 w-auto object-contain" />
        </Link>
        <Link to="/" data-testid="apply-nav-back" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
          <ArrowLeft size={16} /> Back to site
        </Link>
      </div>
    </nav>
  );
}

function ApplyFooter() {
  return (
    <footer className="bg-black border-t hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Epsilon Executive Education</p>
        <div className="flex items-center gap-3">
          {[
            { Icon: FaInstagram, href: SOCIAL.instagram },
            { Icon: FaFacebookF, href: SOCIAL.facebook },
            { Icon: FaLinkedinIn, href: SOCIAL.linkedin },
            { Icon: FaYoutube, href: SOCIAL.youtube },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-ink hover:bg-gold hover:border-gold transition-all">
              <Icon size={12} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ===== Thank You =====

function ThankYou({ applicationId }) {
  return (
    <main data-testid="apply-thankyou" className="min-h-screen bg-ink text-white">
      <ApplyNav />
      <div className="relative isolate pt-36 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.18),transparent_55%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 border border-gold mb-8">
            <Sparkles size={32} className="text-gold" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Application Received</p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Thank you. We've got <em className="text-gold">your application.</em>
          </h1>
          <p className="mt-7 text-white/70 max-w-xl mx-auto text-lg font-light">
            An admissions lead will personally review your application and reach out within
            <span className="text-white"> 48 working hours</span> to schedule a conversation.
          </p>

          <div className="mt-10 inline-block border border-white/15 rounded-sm px-6 py-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-1">Application Reference</p>
            <p className="font-mono text-sm text-gold-light">{applicationId}</p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" data-testid="thankyou-home-btn" className="inline-flex justify-center items-center bg-gold hover:bg-gold-hover text-white px-7 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-colors">
              Back to home
            </Link>
            <a href="mailto:admissions@epsiloned.com" className="inline-flex justify-center items-center border border-white/20 hover:border-gold hover:text-gold text-white/90 px-7 py-4 rounded-sm text-sm font-medium tracking-wide transition-colors">
              Email admissions
            </a>
          </div>
        </div>
      </div>
      <ApplyFooter />
    </main>
  );
}
