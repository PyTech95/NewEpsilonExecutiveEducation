import { Check } from "lucide-react";

const OVERVIEW_IMG = "/assets/landing1.jpg";

export default function Overview() {
  const bullets = [
    "Analyse data more critically",
    "Question AI outputs with confidence",
    "Make better evidence-based decisions",
    "Translate technical work into clear executive action",
  ];

  return (
    <section id="overview" data-testid="overview-section" className="bg-bone text-navy-deep relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Header band — centered, balanced */}
        <div className="max-w-4xl" data-reveal>
          <p className="eyebrow mb-3">Overview</p>
          <span className="gold-rule-lg block mb-6" />
          <h2 className="font-editorial text-navy-deep text-[2.1rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.05]">
            The professionals who win in the AI era are <span className="italic text-gold">decision-fluent</span>, not just tool-fluent.
          </h2>
        </div>

        {/* Body — image left, text right (balanced 5/7) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mt-12 items-start">
          <div className="lg:col-span-5 order-1" data-reveal="left">
            <div className="relative aspect-[4/5] overflow-hidden img-hover-tint">
              <img src={OVERVIEW_IMG} alt="Executives reviewing analytics — decision-making in the AI era" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
            </div>
            <figcaption className="mt-3 font-editorial italic text-sm text-navy-deep/55">
              Built for working professionals who don't need more content — they need stronger judgement.
            </figcaption>
          </div>

          <div className="lg:col-span-7 order-2 space-y-5 font-editorial text-navy-deep/90 text-[1.18rem] leading-[1.8] font-medium" data-reveal="right" data-reveal-delay="100">
            <p>
              Artificial intelligence is changing how work gets done, how value is created and how
              professionals are judged. In India, employers are moving toward skills-first hiring
              and placing greater weight on practical capability — not formal credentials. They want
              critical thinking, communication, adaptability and the ability to work effectively
              with AI in real business settings.
            </p>
            <p>
              <span className="italic text-navy-deep font-semibold">Epsilon Executive Education</span> was built precisely
              for that shift. Named for the difference between what is expected and what is actually
              achieved — Epsilon is a live executive school for decision-makers in the AI era.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 group">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center bg-gold/10 border border-gold/50 transition-colors duration-300 group-hover:bg-gold/30">
                    <Check size={12} className="text-gold-dark" />
                  </span>
                  <span className="font-editorial text-[16.5px] text-navy-deep font-medium leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-6 border-l-2 border-gold pl-5 italic font-editorial text-[1.32rem] text-navy-deep leading-snug font-medium">
              "Real professional value comes from judgement, adaptability, discipline and the
              ability to turn complex tools into credible business outcomes."
            </blockquote>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-12 h-px bg-navy-deep/30" />
              <span className="font-mono uppercase text-[10.5px] tracking-[0.2em] text-navy-deep/55">
                The Epsilon Philosophy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
