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
    <section data-testid="audience-section" className="bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Who is the programme for?</p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-4xl">
          Built for professionals with <em className="text-gold">5 – 15 years</em> of experience.
        </h2>
        <p className="mt-6 text-white/65 max-w-2xl font-light text-lg leading-relaxed">
          The strongest fit is professionals eager for promotion, working across functions, engaging
          with data or technical teams, or expected to influence decisions beyond their formal title.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border hairline">
          {AUDIENCE.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              data-testid={`audience-card-${i}`}
              className="group relative bg-ink hover:bg-ink-light transition-colors p-8 md:p-10"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gold/10 border border-gold/30 mb-7 group-hover:bg-gold/20 transition-colors">
                <Icon size={26} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-3 leading-snug">{title}</h3>
              <p className="text-white/65 text-sm leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-l-2 border-gold pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-2">Outcome</p>
          <p className="font-serif text-2xl md:text-3xl text-white max-w-3xl leading-snug">
            Move into the next role with proof of work.
          </p>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            Graduates step into Product Manager, Growth Manager, RevOps, FP&A, Director of Analytics
            and AI Support roles — carrying a body of work that shows they can think, build and decide
            in an AI-enabled workplace.
          </p>
          <a
            href="#apply"
            data-testid="audience-apply-btn"
            className="inline-flex items-center gap-2 mt-6 text-gold hover:text-gold-light transition-colors"
          >
            Apply for the programme <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
