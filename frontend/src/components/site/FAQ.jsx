import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Who is this program designed for?",
    a: "Working professionals with 5–15 years of experience who want to combine analytical and AI fluency with sharper business judgement — particularly product, marketing, growth, ops, analytics and research roles.",
  },
  {
    q: "How is the program delivered?",
    a: "Live online, cohort-based. Three sessions per week on executive-friendly evenings, supplemented with graded assignments, faculty feedback and a final capstone defence.",
  },
  {
    q: "What is the time commitment?",
    a: "Plan for 15–20 hours per week across live sessions, assignments and capstone work over the 12-week duration.",
  },
  {
    q: "Do I need a technical background?",
    a: "No — but comfort with numbers and a willingness to learn light coding (Python / R) helps. We meet learners where they are and ramp them up methodically.",
  },
  {
    q: "What is the fee, and are payment plans available?",
    a: "Program fee is ₹89,000. Flexible payment plans (2 or 3 instalments) and select scholarships are available. Speak with an advisor for details.",
  },
  {
    q: "What do I receive on completion?",
    a: "A verified digital certificate, a mailed physical certificate, and a transcript-style performance scorecard — issued only after the capstone defence is cleared at 80%+ across all modules.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" data-testid="faq-section" className="bg-bone text-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="eyebrow mb-3">Questions</p>
        <span className="gold-rule-lg block mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-editorial text-navy-deep text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06]">
            Things candidates often <span className="italic text-gold">ask.</span>
          </h2>
          <a
            href="#advisor"
            className="link-gold"
            data-testid="faq-talk-advisor"
          >
            Have something else? Talk to an advisor →
          </a>
        </div>

        <div className="border-t border-navy-deep/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-navy-deep/10">
                <button
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
                >
                  <span className="font-editorial text-[1.25rem] md:text-[1.55rem] pr-6 group-hover:text-gold-dark transition-colors">
                    {f.q}
                  </span>
                  <span className={`flex-shrink-0 h-9 w-9 border flex items-center justify-center transition-colors ${isOpen ? "bg-gold border-gold text-navy-deep" : "border-navy-deep/15 text-navy-deep/50"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="font-editorial text-navy-deep/75 text-[1.05rem] leading-[1.75] max-w-3xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
