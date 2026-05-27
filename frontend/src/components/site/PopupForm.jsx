import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { X, Loader2, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { showThankYou } from "@/components/site/ThankYouOverlay";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const STORAGE_KEY = "epsilon_popup_shown_v1";
const DELAY_MS = 15000;

const COURSE_OPTIONS = [
  "Professional Certificate in Applied AI & Machine Learning",
  "Advanced Program in Strategic Leadership",
  "Finance for Non-Finance Executives",
  "Program in Digital Transformation",
  "Not sure yet",
];

const BULLETS = [
  "No bots. A real admissions lead.",
  "Curriculum & fee walk-through.",
  "Cohort timing that fits your work.",
];

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: COURSE_OPTIONS[0],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 240);
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads/callback`, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        course: form.course,
      });
      close();
      showThankYou();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      data-testid="popup-enquiry-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a callback"
      className={`fixed inset-0 z-[100001] overflow-y-auto overscroll-contain ${closing ? "popup-fade-out" : "popup-fade-in"}`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-deep/75 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal container */}
      <div className="relative min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6 py-16 sm:py-10">
        <div
          className={`relative w-full max-w-[920px] bg-cream grid grid-cols-1 md:grid-cols-[1.05fr_1.2fr] overflow-hidden ${closing ? "dialog-out" : "dialog-in"}`}
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            data-testid="popup-close-btn"
            aria-label="Close"
            onClick={close}
            className="absolute top-2.5 right-2.5 z-30 w-10 h-10 inline-flex items-center justify-center bg-cream text-navy-deep border-2 border-gold hover:bg-gold hover:text-navy-deep transition-colors duration-200 rounded-full"
            style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}
          >
            <X size={18} strokeWidth={2.4} />
          </button>

          {/* LEFT — navy editorial panel */}
          <div className="relative bg-navy-deep text-cream p-7 md:p-10 overflow-hidden">
            <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full glow-gold pointer-events-none" />

            <div className="relative">
              <p className="font-editorial italic text-cream/45 text-[0.9rem] tracking-widest mb-3">
                — Limited Seats —
              </p>
              <p className="eyebrow text-gold mb-2">Talk to Admissions</p>
              <span className="block w-12 h-px bg-gold mt-1 mb-5" />

              <h3 className="font-editorial text-cream text-[1.5rem] sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.4rem] leading-[1.06]">
                Get a personal call back within one working day.
              </h3>

              <p className="font-editorial text-cream/80 text-[1rem] sm:text-[1.05rem] leading-relaxed mt-5">
                Share your details and our admissions lead will reach out to discuss fit, schedule, and the right cohort for you.
              </p>

              <ul className="mt-6 sm:mt-7 space-y-3">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-editorial text-cream/90 text-[0.95rem] sm:text-[1rem]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — cream form panel */}
          <div className="p-6 sm:p-7 md:p-10 bg-cream relative">
            <form onSubmit={submit} className="space-y-4" data-testid="popup-form">
              <div>
                <p className="font-mono uppercase text-[0.65rem] text-gold tracking-[0.22em] mb-1.5">
                  Schedule Call Back
                </p>
                <h4 className="font-editorial text-navy-deep text-[1.4rem] md:text-[1.6rem] leading-tight">
                  Tell us where to reach you.
                </h4>
              </div>

              <Field
                label="Full Name"
                testid="popup-input-name"
                value={form.name}
                onChange={set("name")}
                autoComplete="name"
                required
              />
              <Field
                label="Email"
                testid="popup-input-email"
                type="email"
                value={form.email}
                onChange={set("email")}
                autoComplete="email"
                required
              />
              <Field
                label="Phone Number"
                testid="popup-input-phone"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                autoComplete="tel"
                required
              />

              <div>
                <label className="block font-mono uppercase text-[10.5px] tracking-[0.18em] text-navy-deep/55 mb-1.5">
                  Course of Interest
                </label>
                <div className="relative">
                  <select
                    data-testid="popup-input-course"
                    value={form.course}
                    onChange={set("course")}
                    className="w-full appearance-none px-4 py-3 pr-10 bg-white border border-navy-deep/15 hover:border-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 font-editorial text-[14.5px] text-navy-deep transition-all duration-200"
                  >
                    {COURSE_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy-deep/50" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="popup-submit-btn"
                className="group relative w-full mt-2 inline-flex items-center justify-center gap-2 bg-gold text-navy-deep py-3.5 font-mono uppercase tracking-[0.18em] text-[12.5px] font-semibold transition-all duration-300 disabled:opacity-60 overflow-hidden hover:bg-gold-dark"
              >
                <span className="relative inline-flex items-center gap-2">
                  {loading ? <Loader2 size={14} className="animate-spin" /> : null}
                  {loading ? "Sending…" : "Schedule Call Back"}
                  {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
                </span>
              </button>

              <p className="font-editorial italic text-[12px] text-navy-deep/55 text-center pt-1">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeOut { from { opacity: 1 } to { opacity: 0 } }
        @keyframes popIn   { from { opacity: 0; transform: translateY(20px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes popOut  { from { opacity: 1; transform: translateY(0) scale(1) }      to { opacity: 0; transform: translateY(10px) scale(0.97) } }
        .popup-fade-in   { animation: fadeIn  .35s ease-out both; }
        .popup-fade-out  { animation: fadeOut .24s ease-in  both; }
        .dialog-in       { animation: popIn   .45s cubic-bezier(0.16,1,0.3,1) both; }
        .dialog-out      { animation: popOut  .24s ease-in both; }
      `}</style>
    </div>
  );
}

function Field({ label, testid, value, onChange, type = "text", autoComplete, required }) {
  return (
    <div>
      <label className="block font-mono uppercase text-[10.5px] tracking-[0.18em] text-navy-deep/55 mb-1.5">
        {label}
      </label>
      <input
        data-testid={testid}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className="w-full px-4 py-3 bg-white border border-navy-deep/15 hover:border-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 font-editorial text-[14.5px] text-navy-deep placeholder:text-navy-deep/35 transition-all duration-200"
      />
    </div>
  );
}
