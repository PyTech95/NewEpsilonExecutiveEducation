import {
  Users2, Mic2, GraduationCap, Trophy, Briefcase, BadgeCheck,
} from "lucide-react";

const EXPERIENCE = [
  {
    Icon: Mic2,
    title: "Live Faculty Teaching",
    desc: "Real-time interaction with practitioner instructors. No pre-recorded lectures. Every class is a conversation, not a broadcast.",
  },
  {
    Icon: Users2,
    title: "Cohort-based Learning",
    desc: "Learn alongside 50 carefully selected peers — product leaders, analysts, founders. Your cohort becomes your professional network for life.",
  },
  {
    Icon: GraduationCap,
    title: "Industry Mentorship",
    desc: "Monthly 1:1 mentor calls with senior practitioners. Slack-based daily support. Office hours after every module.",
  },
  {
    Icon: Trophy,
    title: "Capstone Defence",
    desc: "A live, panel-graded final defence. Your work is reviewed by industry leaders and faculty — the same scrutiny applied at real boards.",
  },
  {
    Icon: Briefcase,
    title: "Career Acceleration",
    desc: "Placement assistance, alumni introductions, hiring-partner intros, interview prep — built into the programme, not an add-on.",
  },
  {
    Icon: BadgeCheck,
    title: "Verified Certificate",
    desc: "Digital + mailed physical certificate, backed by a transcript-style scorecard. Awarded only after capstone defence is cleared.",
  },
];

export default function EpsilonExperience() {
  return (
    <section
      id="experience"
      data-testid="epsilon-experience-section"
      className="bg-[#F8F6F1] text-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-4">The Epsilon Experience</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            More than a course. <br /><em className="text-gold-dark">A serious professional standard.</em>
          </h2>
          <p className="text-ink/65 max-w-md text-sm md:text-base">
            Built like an MBA elective. Delivered like a top-tier executive school. Backed by real
            faculty time, real mentorship and a real graded outcome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {EXPERIENCE.map(({ Icon, title, desc }, i) => (
            <article
              key={title}
              data-testid={`experience-card-${i}`}
              className="group bg-[#F8F6F1] hover:bg-white transition-colors p-7 md:p-9 relative"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/10 border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Icon size={22} className="text-gold-dark" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl mb-2.5 leading-snug">{title}</h3>
              <p className="text-ink/65 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
