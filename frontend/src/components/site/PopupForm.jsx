import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { X, Loader2 } from "lucide-react";

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
      className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        data-testid="popup-form-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-md bg-white text-ink rounded-t-2xl sm:rounded-sm shadow-2xl overflow-hidden animate-fade-up"
      >
        <button
          data-testid="popup-close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink/60"
        >
          <X size={16} />
        </button>

        {/* Header band */}
        <div className="bg-ink text-white p-6 sm:p-7">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Limited Seats</p>
          <h3 className="font-serif text-2xl sm:text-3xl leading-tight">
            Want a <em className="text-gold">15-min</em> call with an advisor?
          </h3>
          <p className="text-white/65 text-sm mt-2">
            Get curriculum, fees and fit clarity in a quick personal conversation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="p-6 sm:p-7 space-y-3.5" data-testid="popup-form">
          <Field testid="popup-name" label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field testid="popup-email" label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
          <Field testid="popup-phone" label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-semibold">Course</span>
            <select
              data-testid="popup-course"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
              className="mt-1.5 w-full bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm"
            >
              {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
          <button
            type="submit"
            disabled={loading}
            data-testid="popup-submit-btn"
            className="mt-2 w-full bg-gold hover:bg-gold-hover text-white py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            {loading ? "Scheduling..." : "Schedule Call Back"}
          </button>
          <p className="text-[11px] text-ink/45 text-center">No spam · You can unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange, type = "text" }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-semibold">{label}</span>
      <input
        data-testid={testid}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm"
      />
    </label>
  );
}
