import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { X, Loader2, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const STORAGE_KEY = "epsilon_popup_shown_v1";
const DELAY_MS = 15000;

const COURSES = [
  "Applied AI & ML for Decision-Makers",
  "AI for Product Managers",
  "Data Storytelling for Executives",
];

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: COURSES[0] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.course) {
      toast.error("Please complete all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/leads/callback`, form);
      toast.success(data.message || "Thanks! We'll be in touch.");
      setOpen(false);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      data-testid="popup-form-overlay"
      className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 fade-up overflow-y-auto"
      onClick={() => setOpen(false)}
    >
      <div
        data-testid="popup-form-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md my-auto bg-cream text-navy-deep corner-brackets overflow-hidden max-h-[92vh] flex flex-col"
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
      >
        <button
          data-testid="popup-close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 h-9 w-9 bg-navy-deep text-cream hover:bg-gold hover:text-navy-deep flex items-center justify-center transition-colors"
        >
          <X size={16} strokeWidth={2.2} />
        </button>

        {/* Header band */}
        <div className="bg-navy-deep text-cream p-6 sm:p-7 flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 starfield opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glow-gold" />
          <div className="relative">
            <h3 className="font-editorial text-cream text-[1.85rem] sm:text-[2.1rem] leading-[1.1] pr-10">
              Want a <span className="italic text-gold">15-min</span> call with an advisor?
            </h3>
            <p className="font-editorial text-cream/75 text-[0.98rem] mt-3 leading-relaxed">
              Get curriculum, fees and fit clarity in a quick personal conversation.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="p-6 sm:p-7 space-y-4 overflow-y-auto" data-testid="popup-form">
          <Field testid="popup-name" label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field testid="popup-email" label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
          <Field testid="popup-phone" label="Phone number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
          <div>
            <label className="fld-label">Course</label>
            <select
              data-testid="popup-course"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
              className="fld-input"
            >
              {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="popup-submit-btn"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-navy-deep text-cream hover:bg-gold hover:text-navy-deep py-3.5 font-editorial text-[15px] tracking-normal font-medium transition-colors duration-200 disabled:opacity-60"
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : null}
            {loading ? "Scheduling..." : "Schedule call back"} {!loading && <ArrowRight size={14} />}
          </button>
          <p className="font-editorial italic text-[12px] text-navy-deep/45 text-center">No spam · Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="fld-label">{label}</label>
      <input data-testid={testid} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="fld-input" />
    </div>
  );
}
