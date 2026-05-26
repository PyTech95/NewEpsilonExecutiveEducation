import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ChevronDown, Loader2, ArrowRight, Sparkles } from "lucide-react";
import { COURSE } from "@/lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const HERO_BG =
  "https://images.unsplash.com/photo-1668513912223-8046cce96bdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB1bml2ZXJzaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbmlnaHR8ZW58MHx8fHwxNzc5NzA2MDQ0fDA&ixlib=rb-4.1.0&q=85";

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
      className="relative isolate overflow-hidden bg-navy-deep text-cream pt-28 pb-12 md:pt-36 md:pb-20"
    >
      {/* Background image with deep navy overlay */}
      <div className="absolute inset-0 -z-10">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(4,9,20,0.55), rgba(10,17,40,0.88), rgb(4,9,20))" }}
        />
      </div>

      {/* Starfield + glow */}
      <div className="absolute inset-0 starfield opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full glow-gold pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 fade-up inline-flex items-center gap-2">
              <Sparkles size={12} className="text-gold" /> The AI Era of Executive Education
            </p>

            <h1 className="font-editorial text-cream text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.05] tracking-[-0.01em] max-w-5xl fade-up">
              Turning technical fluency
            </h1>
            <h2 className="font-editorial italic text-gold text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4.2rem] leading-[1.05] mt-1 fade-up-delay-1">
              into strategic value.
            </h2>

            <p className="font-editorial text-[1.02rem] md:text-[1.2rem] leading-relaxed text-cream/85 mt-4 md:mt-6 max-w-2xl fade-up-delay-2">
              The Professional Certificate in Applied AI &amp; Machine Learning — a live, 12-week executive program for professionals who want stronger judgement, sharper evidence discipline and the confidence to translate technical possibility into credible business action.
            </p>

            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 fade-up-delay-3">
              <a href="/apply" data-testid="hero-apply-btn" className="btn-gold">
                Apply Now <ArrowRight size={14} />
              </a>
              <a href="#advisor" data-testid="hero-advisor-btn" className="btn-outline-gold">
                Speak with an advisor
              </a>
            </div>

            {/* Stat blocks */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 fade-up-delay-3">
              {[
                ["12 weeks", "Cohort duration"],
                ["Live online", "Executive-friendly"],
                ["3 live classes", "Per week"],
                ["Capstone", "Portfolio outcome"],
              ].map(([primary, secondary]) => (
                <div key={primary} className="border-l border-gold/40 pl-4">
                  <p className="font-editorial text-cream text-xl md:text-2xl leading-tight">{primary}</p>
                  <p className="font-editorial text-[12.5px] text-cream/60 mt-1.5 italic">{secondary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Brochure form card */}
          <div className="lg:col-span-5 fade-up-delay-2">
            <div
              data-testid="hero-brochure-form-card"
              className="relative bg-cream text-navy-deep p-6 sm:p-7 md:p-9 corner-brackets"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.55)" }}
            >
              <p className="eyebrow !text-gold-dark mb-2">Download the Brochure</p>
              <h3 className="font-editorial text-navy-deep text-[1.9rem] md:text-[2.3rem] leading-[1.1] mb-1">
                The whole program, <span className="italic text-gold">on a single PDF.</span>
              </h3>
              <p className="font-editorial text-navy-deep/65 text-sm md:text-base mb-5">
                Curriculum, fees, faculty, capstone &amp; admissions.
              </p>

              <form onSubmit={submit} className="space-y-4" data-testid="brochure-form">
                <Input testid="brochure-name" label="Full Name *" value={form.name} onChange={set("name")} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input testid="brochure-phone" label="Phone *" value={form.phone} onChange={set("phone")} type="tel" />
                  <Input testid="brochure-email" label="Email *" value={form.email} onChange={set("email")} type="email" />
                </div>
                <Input testid="brochure-job" label="Job Title" value={form.job_title} onChange={set("job_title")} />
                <Select
                  testid="brochure-experience"
                  label="Work Experience"
                  value={form.experience}
                  onChange={set("experience")}
                  options={["Select range", "0 – 2 years", "3 – 5 years", "5 – 10 years", "10 – 15 years", "15+ years"]}
                />
                <Input testid="brochure-city" label="City" value={form.city} onChange={set("city")} />

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="brochure-submit-btn"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-navy-deep text-cream hover:bg-gold hover:text-navy-deep py-4 font-editorial text-[16px] font-medium transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : null}
                  {loading ? "Sending..." : "Download brochure"}
                </button>
                <p className="font-editorial italic text-[13px] text-navy-deep/55 text-center pt-1">
                  No spam · We respect your time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, testid, ...rest }) {
  return (
    <div>
      <label className="fld-label">{label}</label>
      <input data-testid={testid} className="fld-input" {...rest} />
    </div>
  );
}

function Select({ label, testid, value, onChange, options }) {
  return (
    <div>
      <label className="fld-label">{label}</label>
      <div className="relative">
        <select data-testid={testid} value={value} onChange={onChange} className="fld-input appearance-none pr-10">
          {options.map((o, i) => (
            <option key={i} value={i === 0 ? "" : o}>{o}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy-deep/50" />
      </div>
    </div>
  );
}
