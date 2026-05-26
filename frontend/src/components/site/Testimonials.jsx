import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ChapterDivider from "./ChapterDivider";

const TESTIMONIALS = [
  {
    text: "I started my program wanting to understand machine learning without getting lost in theory for its own sake. I needed the concepts to be immediately practical. Thanks to Prof. Bhupathi I could connect the stats to forecasting and campaign performance at work and make quicker decisions.",
    name: "Priyam C.",
    role: "Senior Marketing & Sales Analyst",
  },
  {
    text: "Before this, I understood AI mostly across a few features. Kent helped me understand what was actually happening underneath the models, what the outputs meant, and where the limits and biases were. That really changed how I now make product decisions.",
    name: "Sanjay J.",
    role: "Product Technical Manager",
  },
  {
    text: "I have used data software for years, but this was great to help me understand the reasoning behind the methods. The applied examples made more sense. I'm now more confident explaining the 'why' of analysis, and how to communicate technical material to my bosses.",
    name: "Jeremy H.",
    role: "Financial Planning & Analysis Manager",
  },
  {
    text: "Epsilon is the only program I have seen that grades you on the quality of your judgement, not the volume of your notes. The capstone forced me to defend a decision in front of real practitioners — and I came out a sharper operator.",
    name: "Anika R.",
    role: "Growth & Strategy Lead",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [paused, next]);

  const item = TESTIMONIALS[idx];

  return (
    <section
      data-testid="testimonials-section"
      className="relative bg-navy-deep text-cream py-14 md:py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 starfield opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full glow-gold pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <ChapterDivider
            chapter="VI"
            eyebrow="In Their Words"
            title="The experience,"
            accent="in their own words."
            inverted
            align="center"
          />
        </div>

        <div className="mt-12 md:mt-14" data-reveal data-reveal-delay="200">
          <div className="max-w-4xl mx-auto">
            <div
              key={idx}
              data-testid={`testimonial-${idx}`}
              className="relative border border-gold/25 bg-navy/50 backdrop-blur-sm p-8 md:p-14 text-center carousel-card"
            >
              <Quote size={28} className="text-gold mx-auto mb-6 float-y" strokeWidth={1.2} />
              <blockquote className="font-editorial italic text-cream/95 text-[1.15rem] md:text-[1.5rem] leading-[1.55] md:leading-[1.5] max-w-3xl mx-auto">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="mt-8 inline-block">
                <div className="mx-auto w-10 h-px bg-gold mb-3" />
                <p className="font-display text-cream text-[1.1rem]">{item.name}</p>
                <p className="font-mono uppercase text-[10px] tracking-[0.24em] text-gold mt-1.5">{item.role}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                data-testid="testimonial-prev"
                aria-label="Previous testimonial"
                className="group h-10 w-10 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={16} className="text-gold group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    data-testid={`testimonial-dot-${i}`}
                    className={`transition-all duration-300 ${i === idx ? "w-8 h-1 bg-gold" : "w-1 h-1 bg-cream/30 hover:bg-cream/60"}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                data-testid="testimonial-next"
                aria-label="Next testimonial"
                className="group h-10 w-10 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={16} className="text-gold group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes carouselIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .carousel-card { animation: carouselIn .55s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .carousel-card { animation: none; } }
      `}</style>
    </section>
  );
}
