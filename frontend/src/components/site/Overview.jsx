import { Check } from "lucide-react";

const OVERVIEW_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzc5NzAzMTc1fDA&ixlib=rb-4.1.0&q=85";

export default function Overview() {
  const bullets = [
    "Analyse data more critically",
    "Question AI outputs with confidence",
    "Make better evidence-based decisions",
    "Translate technical work into clear executive action",
  ];

  return (
    <section id="overview" data-testid="overview-section" className="bg-bone text-navy-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="eyebrow mb-3">Overview</p>
        <span className="gold-rule-lg block mb-6" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-navy-deep text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.05]">
              The professionals who win in the AI era are <span className="italic text-gold">decision-fluent</span>, not just tool-fluent.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-5 font-editorial text-navy-deep/75 text-[1.05rem] leading-[1.8]">
            <p>
              Artificial intelligence is changing how work gets done, how value is created and how
              professionals are judged. In India, employers are moving toward skills-first hiring
              and placing greater weight on practical capability — not simply formal credentials.
              They increasingly want critical thinking, communication, adaptability and the ability
              to work effectively with AI in real business settings.
            </p>
            <p>
              <span className="italic text-navy-deep">Epsilon Executive Education</span> was built
              precisely for that shift. Named for the difference between what is expected and what
              is actually achieved — Epsilon is a live executive school for decision-makers in the
              AI era. It is designed for working professionals who do not need more content, but
              rather stronger judgement, sharper evidence discipline and greater confidence
              translating technical possibility into credible business action.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mt-16">
          <div className="lg:col-span-6 order-2 lg:order-1 relative corner-brackets">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={OVERVIEW_IMG} alt="Working professional learning applied AI" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <ul className="space-y-5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center bg-gold/10 border border-gold/50">
                    <Check size={14} className="text-gold-dark" />
                  </span>
                  <span className="font-editorial text-[1.1rem] text-navy-deep/85">{b}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-2 border-gold pl-6 italic font-editorial text-[1.4rem] text-navy-deep/80 leading-snug">
              "Real professional value comes from judgement, adaptability, discipline and the
              ability to turn complex tools into credible business outcomes."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
