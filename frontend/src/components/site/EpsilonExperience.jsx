import { Users2, Mic2, GraduationCap, Trophy, Briefcase, BadgeCheck } from "lucide-react";

const EXPERIENCE = [
  { Icon: Mic2, title: "Live Faculty Teaching", desc: "Real-time interaction with practitioner instructors. No pre-recorded lectures. Every class is a conversation, not a broadcast." },
  { Icon: Users2, title: "Cohort-based Learning", desc: "Learn alongside 50 carefully selected peers — product leaders, analysts, founders. Your cohort becomes your professional network for life." },
  { Icon: GraduationCap, title: "Industry Mentorship", desc: "Monthly 1:1 mentor calls with senior practitioners. Slack-based daily support. Office hours after every module." },
  { Icon: Trophy, title: "Capstone Defence", desc: "A live, panel-graded final defence. Your work is reviewed by industry leaders and faculty — the same scrutiny applied at real boards." },
  { Icon: Briefcase, title: "Career Acceleration", desc: "Placement assistance, alumni introductions, hiring-partner intros, interview prep — built into the programme, not an add-on." },
  { Icon: BadgeCheck, title: "Verified Certificate", desc: "Digital + mailed physical certificate, backed by a transcript-style scorecard. Awarded only after capstone defence is cleared." },
];

export default function EpsilonExperience() {
  return (
    <section id="experience" data-testid="epsilon-experience-section" className="bg-bone py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gold/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow mb-3">Why Epsilon</p>
            <span className="gold-rule-lg" />
            <h2 className="font-editorial text-navy text-[1.9rem] md:text-[2.6rem] leading-[1.1] mt-4 max-w-2xl">
              A small school. <span className="italic text-gold">Serious credentials.</span>
            </h2>
          </div>
          <p className="font-editorial italic text-navy/65 text-base md:text-lg max-w-md">
            Six commitments that make the difference between watching a course and becoming a practitioner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPERIENCE.map(({ Icon, title, desc }, i) => (
            <article
              key={title}
              data-testid={`experience-card-${i}`}
              className="group relative bg-white border border-navy-deep/10 p-6 md:p-7 hover:border-gold/60 transition-all duration-300 overflow-hidden lift-card"
            >
              <span className="absolute top-0 left-0 h-px w-10 bg-gold transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 border border-gold/40 text-gold group-hover:bg-gold group-hover:text-navy-deep transition-all duration-300">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-editorial text-navy text-[1.35rem] md:text-[1.5rem] leading-snug">{title}</h3>
                  <p className="font-editorial text-navy/70 text-[0.95rem] mt-2 leading-relaxed">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
