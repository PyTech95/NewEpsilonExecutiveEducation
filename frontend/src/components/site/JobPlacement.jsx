import { Compass, Briefcase, Network, FileText, MessageCircle, Trophy } from "lucide-react";

const OUTCOME_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvcnNoaXAlMjBjb25mZXJlbmNlfGVufDB8fHx8MTc3OTcwNjA0NHww&ixlib=rb-4.1.0&q=85";

const OUTCOMES = [
  {
    Icon: Briefcase,
    title: "A capstone you can show",
    body: "An executive decision dossier — a portfolio-ready artefact that proves real business judgement, not just course completion.",
  },
  {
    Icon: Network,
    title: "A senior peer network",
    body: "Forty cohort members from product, growth, analytics, finance and operations across India's most ambitious teams.",
  },
  {
    Icon: MessageCircle,
    title: "Direct faculty mentorship",
    body: "Office hours, written feedback and 1:1s with practitioners who have led work at JPMorgan, NYU, LinkedIn, KPMG and Berkeley Law.",
  },
  {
    Icon: FileText,
    title: "Career launchpad support",
    body: "A guided resume refresh, LinkedIn rewrite and interview-prep sprint — built around the capstone you produce in the program.",
  },
  {
    Icon: Trophy,
    title: "A verified credential",
    body: "A signed certificate of completion — issued only to participants who finish the capstone with faculty sign-off.",
  },
  {
    Icon: Compass,
    title: "A clear next step",
    body: "Most participants move into roles that sit closer to decisions — product, strategy, AI ops, analytics leadership. We help you frame the move.",
  },
];

export default function JobPlacement() {
  return (
    <section id="placements" data-testid="placement-section" className="bg-navy-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full glow-gold pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: editorial copy + visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow mb-3">Career Trajectory</p>
            <span className="gold-rule-lg block mb-6" />
            <h2 className="font-editorial text-cream text-[2.1rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.05]">
              What you walk away with <span className="italic text-gold">— and into.</span>
            </h2>
            <p className="mt-5 font-editorial text-cream/75 text-[1.05rem] leading-relaxed">
              We're a new program built for senior professionals — so we don't pretend to publish
              hiring statistics. Instead, we publish the work product, mentorship and credentials
              you will actually leave with. Apply judgement to that — not someone else's percentages.
            </p>

            <div className="mt-8 relative aspect-[4/5] overflow-hidden hidden lg:block">
              <img src={OUTCOME_IMG} alt="Executive mentorship at Epsilon" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono uppercase text-[10px] tracking-[0.18em] text-cream/65 mt-1">Spring 2026 — Now interviewing</p>
              </div>
            </div>
          </div>

          {/* Right: 6 outcome cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
              {OUTCOMES.map(({ Icon, title, body }, i) => (
                <div
                  key={title}
                  data-testid={`outcome-card-${i}`}
                  className="group relative bg-navy-deep hover:bg-navy/80 transition-colors duration-300 p-6 md:p-7"
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 bg-gold/10 border border-gold/40 mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={16} className="text-gold" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-editorial text-cream text-[1.15rem] md:text-[1.25rem] leading-tight mb-2">
                    {title}
                  </h3>
                  <p className="font-editorial text-cream/65 text-[14px] leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gold/15 pt-6">
              <p className="font-editorial italic text-cream/70 text-[15px] max-w-md">
                We measure what we can actually verify — your work, your written reflections and
                the artefacts you leave Epsilon with.
              </p>
              <a
                href="/apply"
                data-testid="career-apply-btn"
                className="btn-gold flex-shrink-0 whitespace-nowrap"
              >
                Apply for spring 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
