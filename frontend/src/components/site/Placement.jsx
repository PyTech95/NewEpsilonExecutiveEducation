// Job Placement Services — luxury editorial layout, brochure-sourced content
import { Briefcase, TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";

const PATHWAYS = [
  { current: "Data / BI Analyst",     future: "Data Scientist / Engineer", uplift: "135%" },
  { current: "Product Analyst",       future: "Product Manager",           uplift: "95%"  },
  { current: "Marketing Analyst",     future: "Growth Manager",            uplift: "75%"  },
  { current: "Financial Analyst",     future: "FP&A Manager",              uplift: "179%" },
  { current: "Project Coordinator",   future: "Implementation Manager",    uplift: "155%" },
];

const SKILLS = [
  "Generative AI",
  "Machine Learning",
  "Data Science",
  "Large Language Models (LLMs)",
  "Prompt Engineering",
  "R & Python for Analytics",
  "Model Evaluation",
  "AI Agents",
  "Intelligent Automation",
  "AI System Design",
  "Data Visualisation",
  "Executive Business Communication",
];

const FUTURE_ROLES = [
  "Product Manager",
  "Sales, Growth or Marketing Manager",
  "Revenue Operations Manager",
  "Finance or FP&A Manager",
  "Director of Analytics or Data Science",
  "AI Support Technician",
];

export default function Placement() {
  return (
    <section
      id="placements"
      data-testid="placement-section"
      className="bg-cream text-navy-deep py-16 md:py-24 relative overflow-hidden"
    >
      {/* subtle gold flourish */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-gold/[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — split: copy left, editorial image right */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div data-reveal="up">
            <p className="eyebrow">— Career Outcomes —</p>
            <span className="block w-12 h-px bg-gold mt-3 mb-5" />
            <h2 className="font-editorial text-navy-deep text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] leading-[1.05] font-semibold">
              Job placement services,
              <span className="block italic text-gold-dark font-normal">structured for serious professionals.</span>
            </h2>
            <p className="font-editorial text-navy-deep/85 text-[1.1rem] md:text-[1.22rem] leading-[1.65] font-medium mt-5">
              Epsilon provides structured career and placement support to help participants translate
              their new capabilities into stronger professional opportunities. Our team — experienced
              corporate outreach and HR professionals — positions applied AI, machine learning and
              business decision-making skills in front of the right employers.
            </p>
          </div>

          {/* Editorial image with gold uplift badge */}
          <div className="relative" data-reveal="left" data-reveal-delay="120">
            <div className="absolute -inset-[10px] border border-gold/30 pointer-events-none -z-0 hidden md:block" />
            <div className="relative overflow-hidden bg-navy-deep/5">
              <img
                src="/assets/placement.jpg"
                alt="Senior professionals collaborating in a strategy session"
                className="w-full h-[340px] md:h-[420px] lg:h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />

              {/* Floating uplift badge */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-auto bg-cream/95 backdrop-blur-sm border-l-2 border-gold px-5 py-4 max-w-[300px]">
                <p className="font-mono uppercase text-[10.5px] tracking-[0.22em] text-gold-dark font-semibold">
                  Avg. Salary Uplift
                </p>
                <p className="font-editorial text-[2.1rem] md:text-[2.4rem] leading-none font-semibold text-navy-deep mt-1.5">
                  108<span className="text-gold-dark">%</span>
                </p>
                <p className="font-editorial italic text-[12.5px] text-navy-deep/65 mt-1.5">
                  across reported career transitions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Pathways — Current → Future */}
        <div className="mt-12 md:mt-16" data-reveal="up">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center mb-6">
            <p className="font-mono uppercase text-[11px] tracking-[0.22em] text-navy-deep/55 font-semibold">Current Role</p>
            <p className="font-mono uppercase text-[11px] tracking-[0.22em] text-gold-dark font-semibold text-center hidden md:block">Avg. salary uplift</p>
            <p className="font-mono uppercase text-[11px] tracking-[0.22em] text-navy-deep/55 font-semibold md:text-right">Future Role</p>
          </div>

          <ul className="space-y-3">
            {PATHWAYS.map((p) => (
              <li
                key={p.current}
                data-testid={`pathway-${p.current.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="group grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-center bg-white border border-navy-deep/10 hover:border-gold/50 transition-all duration-300 px-5 md:px-7 py-5 md:py-6 hover:-translate-y-[2px]"
                style={{ boxShadow: "0 1px 3px rgba(4,9,20,0.04)" }}
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={18} className="text-navy-deep/40 flex-shrink-0" strokeWidth={1.8} />
                  <span className="font-editorial text-[1.18rem] md:text-[1.3rem] text-navy-deep/85 font-medium">
                    {p.current}
                  </span>
                </div>

                {/* Uplift badge */}
                <div className="flex md:flex-col items-center gap-2 md:gap-0 py-3 md:py-0 md:px-6 border-t md:border-t-0 md:border-x border-navy-deep/8">
                  <span className="font-editorial text-[1.8rem] md:text-[2.4rem] leading-none font-semibold text-gold-dark group-hover:scale-105 transition-transform duration-300">
                    {p.uplift}
                  </span>
                  <span className="font-mono uppercase text-[10px] tracking-[0.18em] text-navy-deep/55 mt-1">
                    avg. uplift
                  </span>
                </div>

                <div className="flex items-center md:justify-end gap-3">
                  <span className="font-editorial italic text-[1.18rem] md:text-[1.3rem] text-navy-deep font-medium">
                    {p.future}
                  </span>
                  <ArrowUpRight size={20} className="text-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0" strokeWidth={2} />
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile column header for uplift */}
          <p className="font-mono uppercase text-[10px] tracking-[0.22em] text-gold-dark font-semibold text-center mt-3 md:hidden">
            % values show average salary uplift
          </p>
        </div>

        {/* Two-column lower section */}
        <div className="mt-16 md:mt-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          {/* Marketable skills */}
          <div data-reveal="up">
            <p className="eyebrow !text-gold-dark">— Marketable Skills —</p>
            <span className="block w-10 h-px bg-gold mt-3 mb-4" />
            <h3 className="font-editorial text-navy-deep text-[1.8rem] md:text-[2.2rem] leading-tight font-semibold">
              Skills you'll master.
            </h3>
            <p className="font-editorial text-navy-deep/75 text-[1.05rem] md:text-[1.12rem] leading-relaxed mt-3 max-w-md">
              The toolkit recruiters and hiring managers are actively scanning CVs for in 2026.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SKILLS.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 bg-white border border-navy-deep/10 hover:border-gold/45 transition-colors duration-300 px-4 py-3"
                >
                  <CheckCircle2 size={16} className="text-gold-dark flex-shrink-0" strokeWidth={2} />
                  <span className="font-editorial text-[1rem] md:text-[1.05rem] text-navy-deep font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future roles + support */}
          <div data-reveal="up" data-reveal-delay="100">
            <p className="eyebrow !text-gold-dark">— Future Job Roles —</p>
            <span className="block w-10 h-px bg-gold mt-3 mb-4" />
            <h3 className="font-editorial text-navy-deep text-[1.8rem] md:text-[2.2rem] leading-tight font-semibold">
              Roles alumni move into.
            </h3>

            <ul className="mt-7 space-y-3.5">
              {FUTURE_ROLES.map((r, i) => (
                <li key={r} className="flex items-baseline gap-4 border-b border-navy-deep/10 pb-3.5">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-gold-dark font-semibold flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-editorial text-[1.12rem] md:text-[1.22rem] text-navy-deep font-medium leading-snug">
                    {r}
                  </span>
                </li>
              ))}
            </ul>

            {/* Support pillars */}
            <div className="mt-9 bg-navy-deep text-cream p-6 md:p-7 relative overflow-hidden">
              <div className="absolute inset-0 starfield opacity-25 pointer-events-none" />
              <div className="relative">
                <TrendingUp size={20} className="text-gold mb-3" strokeWidth={1.8} />
                <p className="font-editorial text-cream text-[1.08rem] md:text-[1.15rem] leading-relaxed font-medium">
                  Career positioning · CV refinement · LinkedIn presentation · employer-outreach support — built into the program.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-14 md:mt-20 max-w-4xl border-t border-navy-deep/10 pt-6 space-y-2.5">
          <p className="font-editorial italic text-[13.5px] md:text-[14.5px] text-navy-deep/60 leading-relaxed">
            * The career pathways and marketability signals reflect Epsilon's market research
            (pan-India, multi-industry data), employer-facing conversations and direct experience
            teaching, mentoring and hiring professionals from product, analytics, marketing, finance,
            operations and strategy backgrounds.
          </p>
          <p className="font-editorial italic text-[13.5px] md:text-[14.5px] text-navy-deep/60 leading-relaxed">
            * Placement support is not a job guarantee. It is a focused career-support service
            built to help serious professionals compete with stronger evidence, sharper positioning
            and greater confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
