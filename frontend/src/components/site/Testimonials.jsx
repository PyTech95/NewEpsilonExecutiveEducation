import { Quote } from "lucide-react";
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
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative bg-navy-deep text-cream py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full glow-gold pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterDivider
          chapter="VI"
          eyebrow="In Their Words"
          title="The experience,"
          accent="in their own words."
          inverted
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-16">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="border border-gold/20 p-7 md:p-9 bg-navy/40 lift-card hover:border-gold/60"
            >
              <Quote size={22} className="text-gold mb-4" />
              <blockquote className="font-editorial italic text-cream/90 text-[1.1rem] md:text-[1.2rem] leading-[1.7]">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-cream text-[1.05rem]">{t.name}</p>
                <p className="font-mono uppercase text-[10px] tracking-[0.22em] text-gold mt-1.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
