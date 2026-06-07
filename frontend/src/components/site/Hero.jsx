import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ChevronDown, Loader2, ArrowRight, Sparkles, Calendar, Radio, Video, Award, CheckCircle } from "lucide-react";
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
      await axios.post(`${API}/leads/brochure`, form);
      // Trigger brochure PDF download before navigating to thank-you page
      const link = document.createElement("a");
      link.href = "/assets/epsilon-brochure-2026.pdf";
      link.download = "Epsilon-Executive-Brochure-2026.pdf";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setForm({ name: "", phone: "", email: "", job_title: "", experience: "", city: "" });
      // Small delay so the browser commits the download before navigation
      setTimeout(() => {
        window.location.href = "/thankyou/";
      }, 600);
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
            <p className="eyebrow mb-4 fade-up inline-flex items-center gap-2 text-[12px]">
              <Sparkles size={13} className="text-gold" /> For Working Professionals
            </p>

            <h1 className="font-editorial text-cream text-[2.5rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5.2rem] leading-[1.04] tracking-[-0.01em] max-w-5xl fade-up font-semibold">
              Applied AI &amp; ML Program
            </h1>
            <h2 className="font-editorial italic text-gold text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] leading-[1.1] mt-2 fade-up-delay-1">
              for working professionals.
            </h2>

            <p className="font-editorial text-[1.18rem] md:text-[1.42rem] leading-[1.55] text-cream font-medium mt-5 md:mt-7 max-w-2xl fade-up-delay-2">
              Advance your career with <span className="text-gold">live online classes</span> in Applied AI &amp; Machine Learning — a 12-week certificate built for executives, managers and senior individual contributors.
            </p>

            {/* Program benefits — quick scan */}
            <ul className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-x-7 gap-y-3 max-w-2xl fade-up-delay-2">
              {[
                "Live online · executive-friendly schedule",
                "Faculty from NYU, Columbia & JPMorgan",
                "Capstone judged by working practitioners",
                "Industry-recognised professional certificate",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-gold mt-[3px] flex-shrink-0" strokeWidth={2.2} />
                  <span className="font-editorial text-[16.5px] md:text-[17.5px] text-cream font-medium leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            {/* Program fee chip */}
            <div data-testid="hero-fee-chip" className="mt-3 md:mt-4 inline-flex items-center gap-3 border border-gold/30 bg-cream/[0.04] px-4 py-1.5 fade-up-delay-2">
              <span className="font-mono uppercase text-[10px] tracking-[0.24em] text-gold">Programme Fee</span>
              <span className="h-3 w-px bg-gold/40" />
              <span className="font-editorial text-cream text-[1.1rem] md:text-[1.2rem] font-semibold">&#8377;89,000</span>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 fade-up-delay-3">
              <a href="/apply" data-testid="hero-apply-btn" className="btn-gold">
                Apply Now <ArrowRight size={14} strokeWidth={2.6} />
              </a>
              <a href="#advisor" data-testid="hero-advisor-btn" className="btn-outline-gold">
                Talk to an Advisor
              </a>
            </div>



            {/* Stat blocks */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 fade-up-delay-3">
              {[
                { Icon: Calendar, primary: "12 weeks",      secondary: "Cohort duration" },
                { Icon: Radio,    primary: "Live online",   secondary: "Executive-friendly" },
                { Icon: Video,    primary: "3 live classes", secondary: "Per week" },
                { Icon: Award,    primary: "Capstone",      secondary: "Portfolio outcome" },
              ].map(({ Icon, primary, secondary }) => (
                <div key={primary} className="group relative bg-cream/[0.04] hover:bg-cream/[0.09] border border-gold/20 hover:border-gold/50 transition-all duration-300 p-4 hover:-translate-y-0.5">
                  <Icon size={20} className="text-gold mb-2.5" strokeWidth={1.7} />
                  <p className="font-editorial text-cream text-[1.25rem] md:text-[1.45rem] font-medium leading-tight">{primary}</p>
                  <p className="font-editorial text-[13.5px] text-cream/75 mt-1 italic">{secondary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Brochure form card (compact) */}
          <div className="lg:col-span-5 fade-up-delay-2">
            <div
              data-testid="hero-brochure-form-card"
              className="relative bg-cream text-navy-deep p-5 sm:p-6 md:p-7"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.25)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

              <p className="eyebrow !text-gold-dark mb-2">Download the brochure</p>
              <h3 className="font-editorial text-navy-deep text-[1.55rem] md:text-[1.75rem] leading-[1.1]">
                The whole program <span className="italic text-gold">on one PDF.</span>
              </h3>
              <p className="font-editorial text-navy-deep/60 text-[13.5px] md:text-sm mt-1 mb-4">
                Curriculum · Fees · Faculty · Capstone · Admissions
              </p>

              <form onSubmit={submit} className="space-y-3" data-testid="brochure-form">
                <CompactInput testid="brochure-name"  placeholder="Full name *"     value={form.name}  onChange={set("name")} />
                <div className="grid grid-cols-2 gap-3">
                  <CompactInput testid="brochure-phone" placeholder="Phone *"        value={form.phone} onChange={set("phone")} type="tel" />
                  <CompactInput testid="brochure-email" placeholder="Email *"        value={form.email} onChange={set("email")} type="email" />
                </div>
                <CompactSelect
                  testid="brochure-experience"
                  value={form.experience}
                  onChange={set("experience")}
                  options={["Work experience", "0 – 2 years", "3 – 5 years", "5 – 10 years", "10 – 15 years", "15+ years"]}
                />

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="brochure-submit-btn"
                  className="group relative w-full mt-1 inline-flex items-center justify-center gap-2 bg-navy-deep text-cream py-3.5 font-editorial text-[16px] font-bold tracking-[0.01em] transition-all duration-300 disabled:opacity-60 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative inline-flex items-center gap-2 group-hover:text-navy-deep transition-colors duration-300">
                    {loading ? <Loader2 size={14} className="animate-spin" /> : null}
                    {loading ? "Sending…" : "Download Brochure"}
                    {!loading && <ArrowRight size={14} strokeWidth={2.6} className="group-hover:translate-x-1 transition-transform duration-300" />}
                  </span>
                </button>
                <p className="font-editorial italic text-[12px] text-navy-deep/50 text-center pt-0.5">
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

function CompactInput({ testid, placeholder, ...rest }) {
  return (
    <input
      data-testid={testid}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white border border-navy-deep/12 hover:border-navy-deep/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 font-editorial text-[14px] text-navy-deep placeholder:text-navy-deep/40 transition-all duration-200"
      {...rest}
    />
  );
}

function CompactSelect({ testid, value, onChange, options }) {
  return (
    <div className="relative">
      <select
        data-testid={testid}
        value={value}
        onChange={onChange}
        className="w-full appearance-none px-4 py-3 pr-10 bg-white border border-navy-deep/12 hover:border-navy-deep/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 font-editorial text-[14px] text-navy-deep transition-all duration-200"
      >
        {options.map((o, i) => (
          <option key={i} value={i === 0 ? "" : o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy-deep/50" />
    </div>
  );
}
