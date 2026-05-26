import {
  Compass, Megaphone, ClipboardList, FlaskConical, Database, Users2, ArrowRight,
} from "lucide-react";

const AUDIENCE = [
  {
    Icon: Compass,
    title: "Associate Product Managers",
    desc: "Junior product professionals ready to grow into roles with more ownership and decision authority.",
  },
  {
    Icon: Megaphone,
    title: "Marketing, Sales & Growth",
    desc: "Operators using AI, automation and analytics to drive measurable revenue and pipeline outcomes.",
  },
  {
    Icon: ClipboardList,
    title: "Business Analysts & Ops",
    desc: "Professionals moving into higher-value operational, process and strategy roles.",
  },
  {
    Icon: FlaskConical,
    title: "Research & Financial Analysts",
    desc: "Build sharper evidence-based reasoning and a stronger seat in strategic business conversations.",
  },
  {
    Icon: Database,
    title: "Data & BI Analysts",
    desc: "Move beyond reporting into roles with stronger business judgement and applied AI use.",
  },
  {
    Icon: Users2,
    title: "Team Leads & Senior ICs",
    desc: "Senior individuals stepping into broader managerial and cross-functional responsibility.",
  },
];

export default function Audience() {
  return (
    <section data-testid="audience-section" className="bg-navy-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full glow-gold pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <p className="eyebrow mb-3">Who is the program for?</p>
        <span className="gold-rule-lg block mb-6" />
        <h2 className="font-editorial text-cream text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06] max-w-4xl">
          Built for professionals with <span className="italic text-gold">5 – 15 years</span> of experience.
        </h2>
        <p className="mt-6 font-editorial text-cream/75 max-w-2xl text-[1.1rem] leading-relaxed">
          The strongest fit is professionals eager for promotion, working across functions, engaging
          with data or technical teams, or expected to influence decisions beyond their formal title.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
          {AUDIENCE.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              data-testid={`audience-card-${i}`}
              className="group relative bg-navy-deep hover:bg-navy transition-colors p-7 md:p-9"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-center h-14 w-14 bg-gold/10 border border-gold/40 mb-6 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                <Icon size={24} className="text-gold group-hover:text-navy-deep transition-colors" strokeWidth={1.4} />
              </div>
              <h3 className="font-editorial text-[1.55rem] text-cream mb-3 leading-snug">{title}</h3>
              <p className="font-editorial text-cream/70 text-[0.98rem] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-gold pl-6">
          <p className="eyebrow mb-2">Outcome</p>
          <p className="font-editorial text-[1.7rem] md:text-[2.1rem] text-cream max-w-3xl leading-snug">
            Move into the next role with <span className="italic text-gold">proof of work.</span>
          </p>
          <p className="mt-3 font-editorial text-cream/75 max-w-3xl text-[1.05rem] leading-relaxed">
            Graduates step into Product Manager, Growth Manager, RevOps, FP&amp;A, Director of Analytics
            and AI Support roles — carrying a body of work that shows they can think, build and decide
            in an AI-enabled workplace.
          </p>
          <a
            href="/apply"
            data-testid="audience-apply-btn"
            className="btn-outline-gold mt-7"
          >
            Apply for the program <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
