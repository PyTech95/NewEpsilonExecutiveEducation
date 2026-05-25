import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ApplyCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "Applied AI & ML for Decision-Makers" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please complete all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/leads/callback`, form);
      toast.success(data.message || "Application received.");
      setForm({ name: "", email: "", phone: "", course: form.course });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="apply"
      data-testid="apply-section"
      className="relative bg-navy-deep text-cream py-20 md:py-28 overflow-hidden border-t border-gold/10"
    >
      <div className="absolute inset-0 starfield opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full glow-gold" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img alt="Epsilon Executive Education" data-testid="cta-square-logo" src="/assets/logo.png" className="mx-auto mb-8 h-[120px] md:h-[150px] w-auto object-contain" />
        <p className="eyebrow">Take the next step</p>
        <h2 className="font-display uppercase text-cream text-[2rem] md:text-[3.2rem] leading-[1.05] max-w-4xl mx-auto mt-4">
          Build the judgement <span className="italic font-editorial text-gold">your next decade demands.</span>
        </h2>
        <p className="font-editorial text-cream/80 text-[1.1rem] md:text-[1.25rem] leading-relaxed mt-5 md:mt-7 max-w-xl mx-auto">
          Apply, talk to admissions, or schedule a 15-minute conversation with our team.
        </p>

        <form
          id="advisor"
          onSubmit={submit}
          data-testid="apply-form"
          className="mt-10 md:mt-14 mx-auto max-w-2xl bg-cream text-navy-deep p-7 md:p-10 text-left corner-brackets relative"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
        >
          <p className="eyebrow !text-gold-dark mb-2">Talk to Admissions</p>
          <h3 className="font-editorial text-navy-deep text-[1.7rem] md:text-[2rem] leading-tight">Start a conversation.</h3>
          <p className="font-editorial text-navy-deep/65 text-sm md:text-base mt-1 mb-6">An advisor will reach out within 24 working hours.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field testid="apply-name" label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field testid="apply-phone" label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
            <Field testid="apply-email" label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
            <Field testid="apply-course" label="Course" value={form.course} onChange={(v) => setForm({ ...form, course: v })} />
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="apply-submit-btn"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-navy-deep text-cream hover:bg-gold hover:text-navy-deep py-4 font-mono text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors duration-200 disabled:opacity-60"
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : null}
            {loading ? "Sending..." : "Schedule Call Back"} {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <a href="/apply" className="btn-gold flex-1 justify-center" data-testid="cta-apply-btn">
            Apply Now <ArrowRight size={14} />
          </a>
          <a href="#faculty" className="btn-outline-gold flex-1 justify-center" data-testid="cta-faculty-btn">
            Meet the Faculty
          </a>
        </div>
      </div>
    </section>
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
