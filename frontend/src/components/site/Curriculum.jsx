import { ArrowUpRight } from "lucide-react";

const MODULES = [
  {
    weeks: "Weeks 1 – 4",
    title: "The Analytical Engine",
    sub: "Data, Prediction & Causality",
    milestone:
      "Model Interpretation Memo on a real dataset, with a business-facing recommendation.",
    items: [
      "Data Science Foundations",
      "Coding for Analysis (Python / R)",
      "Machine Learning Frameworks",
      "Causal Inference & Strategy",
    ],
  },
  {
    weeks: "Weeks 5 – 6",
    title: "The AI Practitioner",
    sub: "Prompting, Context & Economics",
    milestone:
      "AI System Specification covering model choice, context strategy, evaluation and governance.",
    items: [
      "Prompt Engineering + Context Design",
      "Systems Economics + Evaluation Design",
      "Model selection: cost, speed, accuracy",
      "Build evaluation criteria & test sets",
    ],
  },
  {
    weeks: "Weeks 7 – 10",
    title: "Advanced AI Operations",
    sub: "Workflow Design, Supervision & Deployment",
    milestone:
      "Deployed Workflow Prototype with an Operating Note for handoff and monitoring.",
    items: [
      "Systems Thinking & Visual Logic",
      "Custom Agent Development",
      "AI-Augmented Building",
      "Deployment, Handoff & Monitoring",
    ],
  },
  {
    weeks: "Weeks 11 – 12",
    title: "The Strategic Voice",
    sub: "Leadership, Authority & Defence",
    milestone:
      "Executive Decision Dossier, presented in a live capstone review.",
    items: [
      "Technical Storytelling",
      "Executive Communication",
      "Defending assumptions & methods",
      "Executive Proof Pack + Live Defence",
    ],
  },
];

const CAPSTONE_IMG =
  "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzc5NzAzMTc1fDA&ixlib=rb-4.1.0&q=85";

export default function Curriculum() {
  return (
    <section id="curriculum" data-testid="curriculum-section" className="bg-[#F8F6F1] text-ink">
      {/* Programme header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-4">The Programme</p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-4xl">
          12 weeks. Live. Graded. <em className="text-gold-dark">Professionally serious.</em>
        </h2>
        <p className="mt-6 text-ink/70 max-w-2xl font-light text-lg">
          Live online cohort, three classes a week, on an executive-friendly evening schedule.
          Graded submissions, expert feedback and a final capstone defence — designed to produce a
          real body of work, not just course completion.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 border-t border-ink/10 pt-10">
          {[
            ["Duration", "12 weeks · 3 classes / wk"],
            ["Format", "Live online, cohort-based"],
            ["Session", "Executive-friendly evenings"],
            ["Assessment", "Graded, capstone defence"],
            ["Final output", "Executive Decision Dossier"],
            ["Credential", "Certificate + scorecard"],
            ["Programme fee", "₹89,000"],
            ["Experience", "High-touch, feedback-driven"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink/45 mb-1">{k}</div>
              <div className="font-serif text-lg text-ink">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pb-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-4">The Curriculum</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
            Four modules. <em className="text-gold-dark">One trajectory.</em>
          </h2>
          <p className="text-ink/65 max-w-md text-sm md:text-base">
            From data foundations to executive defence — every module ends with a tangible artefact
            you can show to peers, managers and hiring committees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {MODULES.map((m, i) => (
            <article
              key={m.title}
              data-testid={`module-card-${i}`}
              className="bg-[#F8F6F1] p-8 md:p-10 relative"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-serif text-5xl text-gold-dark/40 leading-none">0{i + 1}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-ink/45">{m.weeks}</span>
              </div>
              <h3 className="font-serif text-3xl mb-1">{m.title}</h3>
              <p className="text-ink/55 italic text-sm mb-6">{m.sub}</p>

              <div className="bg-ink/[0.04] border-l-2 border-gold pl-4 py-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold-dark font-semibold">Milestone</span>
                <p className="text-sm text-ink/80 mt-1">{m.milestone}</p>
              </div>

              <ul className="space-y-2.5">
                {m.items.map((it) => (
                  <li key={it} className="text-sm text-ink/75 flex items-start gap-2">
                    <span className="mt-2 inline-block h-1 w-1 bg-gold-dark rounded-full flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Capstone */}
      <div className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Capstone</p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight">
              The Executive <br /><em className="text-gold">Decision Dossier.</em>
            </h2>
            <p className="mt-6 text-white/70 max-w-2xl font-light leading-relaxed">
              The capstone is where the full programme comes together. Participants frame a real
              business problem, evaluate evidence, design a practical AI-enabled solution and defend
              it live to decision-makers.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Data interpretation", "Model & prompt thinking", "Workflow & deployment", "Live defence"].map(
                (t) => (
                  <span key={t} className="text-xs uppercase tracking-wider text-white/70 border border-white/15 rounded-full px-3 py-1.5">
                    {t}
                  </span>
                )
              )}
            </div>

            {/* GOLD CTA */}
            <a
              href="#brochure"
              data-testid="see-detailed-curriculum-btn"
              className="inline-flex items-center gap-2 mt-10 bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-colors shadow-lg shadow-gold/20"
            >
              See detailed curriculum in brochure
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={CAPSTONE_IMG} alt="Capstone work — Executive Decision Dossier" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Week 12</p>
                <p className="font-serif text-2xl">Live capstone defence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
