import { ArrowUpRight, Calendar, Radio, Moon, ClipboardCheck, FileText, Award, IndianRupee, MessageSquare } from "lucide-react";

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
      "Executive Proof Pack, presented in a live capstone review.",
    items: [
      "Technical Storytelling",
      "Executive Communication",
      "Defending assumptions & methods",
      "Executive Proof Pack + Live Defence",
    ],
  },
];

const CAPSTONE_IMG = "/assets/landing2.jpg";

export default function Curriculum() {
  return (
    <section id="curriculum" data-testid="curriculum-section" className="bg-bone text-navy-deep">
      {/* Program header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-8">
        <p className="eyebrow mb-3">The Program</p>
        <span className="gold-rule-lg block mb-6" />
        <h2 className="font-editorial text-navy-deep text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06] max-w-4xl">
          12 weeks. Live. Graded. <span className="italic text-gold">Professionally serious.</span>
        </h2>
        <p className="mt-6 font-editorial text-navy-deep/85 max-w-2xl text-[1.2rem] md:text-[1.3rem] font-medium leading-[1.65]">
          Live online cohort, three classes a week, on an executive-friendly evening schedule.
          Graded submissions, expert feedback and a final capstone defence — designed to produce a
          real body of work, not just course completion.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 border-t border-navy-deep/10 pt-8">
          {[
            { Icon: Calendar,       k: "Duration",     v: "12 weeks · 3 classes / wk" },
            { Icon: Radio,          k: "Format",       v: "Live online, cohort-based" },
            { Icon: Moon,           k: "Session",      v: "Executive-friendly evenings" },
            { Icon: ClipboardCheck, k: "Assessment",   v: "Graded, capstone defence" },
            { Icon: FileText,       k: "Final output", v: "Executive Proof Pack" },
            { Icon: Award,          k: "Credential",   v: "Certificate + scorecard" },
            { Icon: IndianRupee,    k: "Program fee",  v: "₹89,000" },
            { Icon: MessageSquare,  k: "Experience",   v: "High-touch, feedback-driven" },
          ].map(({ Icon, k, v }) => (
            <div
              key={k}
              className="group bg-white/60 hover:bg-white border border-navy-deep/10 hover:border-gold/50 transition-all duration-300 p-4 hover:-translate-y-0.5"
            >
              <Icon size={18} className="text-gold-dark mb-2.5" strokeWidth={1.8} />
              <div className="font-mono uppercase text-[11px] tracking-[0.22em] text-navy-deep/55 mb-1 font-semibold">{k}</div>
              <div className="font-editorial text-[1.1rem] md:text-[1.18rem] font-medium text-navy-deep leading-snug">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pb-16">
        <p className="eyebrow mb-3">The Curriculum</p>
        <span className="gold-rule-lg block mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="font-editorial text-navy-deep text-[2rem] sm:text-[3rem] leading-[1.08]">
            Four modules. <span className="italic text-gold">One trajectory.</span>
          </h2>
          <p className="font-editorial text-navy-deep/80 max-w-md text-[1.05rem] md:text-[1.12rem] font-medium leading-snug">
            From data foundations to executive defence — every module ends with a tangible artefact
            you can show to peers, managers and hiring committees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-navy-deep/10 border border-navy-deep/10">
          {MODULES.map((m, i) => (
            <article
              key={m.title}
              data-testid={`module-card-${i}`}
              data-reveal
              data-reveal-delay={`${(i % 2) * 150}`}
              className="bg-bone p-6 md:p-9 relative hover:bg-cream transition-colors group"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-editorial italic text-[3.4rem] text-gold/40 leading-none">0{i + 1}</span>
                <span className="font-mono uppercase text-[10px] tracking-[0.22em] text-navy-deep/45">{m.weeks}</span>
              </div>
              <h3 className="font-editorial text-[2rem] md:text-[2.15rem] mb-1 text-navy-deep font-semibold">{m.title}</h3>
              <p className="font-editorial text-navy-deep/65 italic text-[1rem] md:text-[1.05rem] mb-6">{m.sub}</p>

              <div className="bg-navy-deep/[0.04] border-l-2 border-gold pl-4 py-3 mb-6">
                <span className="font-mono uppercase text-[11px] tracking-[0.18em] text-gold-dark font-semibold">Milestone</span>
                <p className="font-editorial text-[1.08rem] md:text-[1.12rem] text-navy-deep font-medium mt-1.5 leading-snug">{m.milestone}</p>
              </div>

              <ul className="space-y-2.5">
                {m.items.map((it) => (
                  <li key={it} className="font-editorial text-[1.08rem] md:text-[1.12rem] text-navy-deep font-medium flex items-start gap-2.5">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 bg-gold-dark flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Capstone */}
      <div className="bg-navy-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full glow-gold pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Capstone</p>
            <span className="gold-rule-lg block mb-6" />
            <h2 className="font-editorial text-cream text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06]">
              The Executive <br /><span className="italic text-gold">Proof Pack.</span>
            </h2>
            <p className="mt-6 font-editorial text-cream/90 max-w-2xl text-[1.18rem] md:text-[1.28rem] font-medium leading-[1.6]">
              The capstone is where participants bring the full program together. It is designed to
              show they can do more than understand AI tools — they must use data, machine learning
              and applied AI to frame a real business problem, evaluate evidence, design a practical
              solution and explain it clearly to decision-makers.
            </p>
            <p className="mt-4 font-editorial text-cream/75 max-w-2xl text-[1.08rem] md:text-[1.14rem] leading-relaxed italic">
              The final project becomes part of your Executive Proof Pack — a credible output that
              shows how you think, build and decide in an AI-enabled workplace.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Data interpretation", "Model & prompt thinking", "Workflow & deployment", "Live defence"].map(
                (t) => (
                  <span key={t} className="font-mono uppercase text-[11.5px] tracking-[0.2em] text-cream/85 border border-gold/35 px-3 py-1.5 font-semibold">
                    {t}
                  </span>
                )
              )}
            </div>

            <a
              href="#brochure"
              data-testid="see-detailed-curriculum-btn"
              className="btn-gold mt-10"
            >
              See detailed curriculum in brochure
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="lg:col-span-5 relative corner-brackets">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={CAPSTONE_IMG} alt="Capstone work — Executive Proof Pack" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-gold mb-2">Week 12</p>
                <p className="font-editorial text-[1.5rem] italic">Live capstone defence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
