import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ChevronDown, Loader2 } from "lucide-react";
import { COURSE } from "@/lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const HERO_BG =
  "https://images.unsplash.com/photo-1497366412874-3415097a27e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwcmVtaXVtJTIwb2ZmaWNlJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3OTcwMzE3NXww&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", job_title: "", experience: "", city: "",
  });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill name, phone and email.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/leads/brochure`, form);
      toast.success(data.message || "Brochure sent. Check your inbox.");
      setForm({ name: "", phone: "", email: "", job_title: "", experience: "", city: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative isolate overflow-hidden bg-ink text-white pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Dark image overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.18),transparent_55%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold/90">
              <span className="h-px w-8 bg-gold/70" />
              Professional Certificate · Live
            </div>

            <h1 className="mt-6 font-serif font-medium text-[2.5rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Applied AI & <br className="hidden sm:block" />
              Machine Learning,
              <span className="block italic font-light text-gold">for decision-makers.</span>
            </h1>

            <p className="mt-8 text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-light">
              A 12-week live executive programme that turns technical fluency into{" "}
              <span className="text-white italic">strategic value</span>. Stronger judgement.
              Sharper evidence discipline. Confident, credible business action.
            </p>

            {/* Pills */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {[
                ["Duration", COURSE.duration],
                ["Format", COURSE.format],
                ["Effort", COURSE.effort],
                ["Fee", COURSE.fee],
              ].map(([k, v]) => (
                <div key={k} className="border-l-2 border-gold/60 pl-3 py-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{k}</div>
                  <div className="font-serif text-lg text-white mt-1">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#apply"
                data-testid="hero-apply-btn"
                className="inline-flex justify-center items-center bg-gold hover:bg-gold-hover text-white px-7 py-4 rounded-sm text-sm font-semibold tracking-wide transition-colors"
              >
                Apply for the programme
              </a>
              <a
                href="#advisor"
                data-testid="hero-advisor-btn"
                className="inline-flex justify-center items-center border border-white/20 hover:border-gold hover:text-gold text-white/90 px-7 py-4 rounded-sm text-sm font-medium tracking-wide transition-colors"
              >
                Schedule a call with an advisor
              </a>
            </div>
          </div>

          {/* Right - Light form (BIGGER) */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div
              data-testid="hero-brochure-form-card"
              className="bg-white text-ink rounded-md shadow-2xl shadow-black/60 ring-1 ring-black/5 p-7 md:p-9"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold">
                  Limited Seats
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40">
                  17-page PDF
                </div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mt-3 mb-1">
                Get the brochure.
              </h2>
              <p className="text-sm text-ink/60 mb-6">
                Curriculum, faculty, fees, schedule, placement outcomes.
              </p>

              <form onSubmit={submit} className="space-y-3.5" data-testid="brochure-form">
                <Input testid="brochure-name" label="Name *" value={form.name} onChange={set("name")} />
                <Input testid="brochure-phone" label="Phone *" value={form.phone} onChange={set("phone")} type="tel" />
                <Input testid="brochure-email" label="Email *" value={form.email} onChange={set("email")} type="email" />
                <Input testid="brochure-job" label="Job title" value={form.job_title} onChange={set("job_title")} />
                <Select
                  testid="brochure-experience"
                  label="Work experience"
                  value={form.experience}
                  onChange={set("experience")}
                  options={["Select range", "0 – 2 years", "3 – 5 years", "5 – 10 years", "10 – 15 years", "15+ years"]}
                />
                <Input testid="brochure-city" label="City" value={form.city} onChange={set("city")} />

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="brochure-submit-btn"
                  className="w-full mt-2 bg-ink hover:bg-gold text-white py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                  {loading ? "Sending..." : "Download Brochure"}
                </button>
                <p className="text-[11px] text-ink/50 text-center pt-1">
                  No spam · We respect your time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="mt-20 border-y hairline bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-white/60">
          <span>Applications closing soon</span>
          <span className="hidden sm:inline">•</span>
          <span>Live online · Executive evenings</span>
          <span className="hidden sm:inline">•</span>
          <span>Fee · {COURSE.fee}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-gold">12-week live programme</span>
        </div>
      </div>
    </section>
  );
}

function Input({ label, testid, ...rest }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60 font-semibold">{label}</span>
      <input
        data-testid={testid}
        className="mt-1.5 w-full bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm transition-colors"
        {...rest}
      />
    </label>
  );
}

function Select({ label, testid, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60 font-semibold">{label}</span>
      <div className="relative">
        <select
          data-testid={testid}
          value={value}
          onChange={onChange}
          className="mt-1.5 w-full appearance-none bg-white border border-ink/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none rounded-sm px-3.5 py-3 text-ink text-sm pr-10"
        >
          {options.map((o, i) => (
            <option key={i} value={i === 0 ? "" : o}>{o}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none text-ink/50" />
      </div>
    </label>
  );
}
