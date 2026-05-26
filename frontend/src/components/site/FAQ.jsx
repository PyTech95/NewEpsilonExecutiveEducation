import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Who is this program for?",
    a: "Designed for professionals 5 to 15 years into their careers who are responsible for leading, assessing, or backing AI work and need stronger judgment before the stakes rise.",
  },
  {
    q: "How much time per week should I budget?",
    a: "Expect 15 to 20 hours each week, including three live evening sessions, assigned reading, exercises, and capstone work.",
  },
  {
    q: "Do I need to code?",
    a: "No, you do not need to already know coding. Coding is definitely part of this program, but the program is built for participants with different levels of experience and starts from the fundamentals. Prior coding experience can help, but it is not required. All coding-based modules make use of free / open source languages.",
  },
  {
    q: "What does the capstone look like?",
    a: "The program culminates in a portfolio Proof Pack, inclusive of a live-reviewed project that turns evidence, AI oversight, and business judgment into a clear plan of action.",
  },
  {
    q: "Are there payment plans?",
    a: "Payment plans are available based on need. To discuss installment options, include the request in your application and speak with an admissions counselor.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. Participants who successfully complete the coursework and defend their capstone receive a faculty-signed Professional Certificate in Applied AI and Machine Learning.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" data-testid="faq-section" className="bg-bone text-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <p className="eyebrow mb-3">Questions</p>
        <span className="gold-rule-lg block mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
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
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                >
                  <span className="font-editorial text-[1.25rem] md:text-[1.55rem] pr-6 group-hover:text-gold-dark transition-colors">
                    {f.q}
                  </span>
                  <span className={`flex-shrink-0 h-9 w-9 border flex items-center justify-center transition-colors ${isOpen ? "bg-gold border-gold text-navy-deep" : "border-navy-deep/15 text-navy-deep/50"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}
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
