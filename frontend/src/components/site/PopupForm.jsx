import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { X, Loader2, ArrowRight, Phone } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const STORAGE_KEY = "epsilon_popup_shown_v1";
const DELAY_MS = 15000;

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 220);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/leads/callback`, {
        ...form,
        course: "Applied AI & ML for Decision-Makers",
      });
      toast.success(data.message || "Thanks! We'll be in touch within 24 hrs.");
      close();
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
      className={`fixed inset-0 z-[80] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 ${closing ? "popup-out" : "popup-in"}`}
      onClick={close}
    >
      <div
        data-testid="popup-form-dialog"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[400px] bg-cream text-navy-deep rounded-[2px] overflow-hidden ${closing ? "dialog-out" : "dialog-in"}`}
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.25)" }}
      >
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

        <button
          data-testid="popup-close-btn"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-navy-deep/5 hover:bg-navy-deep hover:text-cream text-navy-deep/60 flex items-center justify-center transition-all duration-200"
        >
          <X size={14} strokeWidth={2.2} />
        </button>

        <div className="px-6 pt-8 pb-6">
          {/* Icon circle */}
          <div className="mb-5 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/10 border border-gold/40 ring-4 ring-gold/5">
            <Phone size={18} className="text-gold-dark" strokeWidth={1.8} />
          </div>

          <h3 className="font-editorial text-navy-deep text-[1.6rem] leading-[1.1] pr-6">
            Talk to an advisor.
          </h3>
          <p className="font-editorial italic text-gold-dark text-[1.1rem] -mt-0.5 mb-3">
            15 minutes. No pressure.
          </p>
          <p className="font-editorial text-navy-deep/65 text-[14px] leading-relaxed mb-5">
            Get curriculum, fees & fit clarity from someone who actually runs the program.
          </p>

          <form onSubmit={submit} className="space-y-3" data-testid="popup-form">
            <CompactField testid="popup-name"  placeholder="Your name"        value={form.name}  onChange={(v) => setForm({ ...form, name: v })} />
            <CompactField testid="popup-email" placeholder="Work email"       value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
            <CompactField testid="popup-phone" placeholder="Phone (with country code)" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />

            <button
              type="submit"
              disabled={loading}
              data-testid="popup-submit-btn"
              className="group relative w-full mt-1 inline-flex items-center justify-center gap-2 bg-navy-deep text-cream py-3.5 font-editorial text-[15px] font-medium transition-all duration-300 disabled:opacity-60 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative inline-flex items-center gap-2 group-hover:text-navy-deep transition-colors duration-300">
                {loading ? <Loader2 size={14} className="animate-spin" /> : null}
                {loading ? "Scheduling…" : "Schedule the call"}
                {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </span>
            </button>
            <p className="font-editorial italic text-[11.5px] text-navy-deep/45 text-center pt-1">
              We respect your time · No spam, ever.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes popupIn  { from { opacity: 0 }                                 to { opacity: 1 } }
        @keyframes popupOut { from { opacity: 1 }                                 to { opacity: 0 } }
        @keyframes dialogIn { from { opacity: 0; transform: translateY(14px) scale(0.96) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes dialogOut{ from { opacity: 1; transform: translateY(0) scale(1) }       to { opacity: 0; transform: translateY(8px)  scale(0.97) } }
        .popup-in  { animation: popupIn  .25s ease-out both; }
        .popup-out { animation: popupOut .22s ease-in  both; }
        .dialog-in { animation: dialogIn .35s cubic-bezier(.2,.9,.25,1.15) both; }
        .dialog-out{ animation: dialogOut .22s ease-in both; }
      `}</style>
    </div>
  );
}

function CompactField({ testid, placeholder, value, onChange, type = "text" }) {
  return (
    <input
      data-testid={testid}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-white border border-navy-deep/12 hover:border-navy-deep/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 font-editorial text-[14.5px] text-navy-deep placeholder:text-navy-deep/35 transition-all duration-200"
    />
  );
}
