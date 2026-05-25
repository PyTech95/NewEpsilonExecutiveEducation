import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
    <section id="apply" data-testid="apply-section" className="bg-ink text-white relative isolate overflow-hidden border-t hairline">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.18),transparent_55%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Limited Seats</p>
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          Ready to <em className="text-gold">think, build and decide</em><br /> in the AI era?
        </h2>
        <p className="mt-7 text-white/70 max-w-2xl mx-auto text-lg font-light">
          Apply now to secure your place in the next intake. Speak with an advisor if you'd like to
          walk through fit, curriculum or payment plans.
        </p>

        <form
          id="advisor"
          onSubmit={submit}
          data-testid="apply-form"
          className="mt-12 mx-auto max-w-2xl bg-white text-ink p-7 md:p-9 rounded-sm shadow-2xl shadow-black/40 text-left"
        >
          <h3 className="font-serif text-2xl mb-1">Schedule a call with an advisor</h3>
          <p className="text-sm text-ink/55 mb-6">An advisor will reach out within 24 working hours.</p>
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
            className="mt-6 w-full bg-gold hover:bg-gold-hover text-white py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            {loading ? "Sending..." : "Schedule Call Back"}
          </button>
        </form>
      </div>
    </section>
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
