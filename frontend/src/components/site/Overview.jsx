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
    <section id="overview" data-testid="overview-section" className="bg-[#F8F6F1] text-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-4">Overview</p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              The professionals who win in the AI era are <em className="text-gold-dark">decision-fluent</em>, not just tool-fluent.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 text-ink/75 leading-relaxed">
            <p>
              Artificial intelligence is changing how work gets done, how value is created, and how
              professionals are judged. Indian employers are moving toward skills-first hiring —
              putting greater weight on practical capability than formal credentials.
            </p>
            <p>
              <span className="font-serif text-xl text-ink italic">Epsilon Executive Education</span> —
              named for the difference between what is expected and what is actually achieved — is a
              live executive school for decision-makers in the AI era.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mt-16">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img src={OVERVIEW_IMG} alt="Working professional learning applied AI" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-ink/10" />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <ul className="space-y-5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 border border-gold/40">
                    <Check size={14} className="text-gold-dark" />
                  </span>
                  <span className="text-lg font-light text-ink/85">{b}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-2 border-gold pl-6 italic font-serif text-2xl text-ink/80 leading-snug">
              "Real professional value comes from judgement, adaptability, discipline and the
              ability to turn complex tools into credible business outcomes."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
