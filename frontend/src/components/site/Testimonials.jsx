import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "I started the programme wanting to understand machine learning without getting lost in theory. The concepts needed to be immediately practical — Prof. Bhupathi helped me connect statistics to forecasting and campaign performance at work, and make quicker decisions.",
    name: "Priyam C.",
    role: "Senior Marketing & Sales Analyst",
  },
  {
    text: "Before this, I understood AI mostly through a handful of features. Kent helped me understand what was actually happening underneath the models, what the outputs meant, and where the limits and biases were. That has changed how I make product decisions.",
    name: "Sanjay J.",
    role: "Product & Technical Manager",
  },
  {
    text: "I've used data software for years, but this programme helped me understand the reasoning behind the methods. I'm now far more confident explaining the why of an analysis, and communicating technical material to my leadership.",
    name: "Jeremy H.",
    role: "Financial Planning & Analysis Manager",
  },
  {
    text: "Classes with Professor Bhupathi were something I looked forward to every week. Engaging, rigorous, and full of skills I'll carry into every part of my career. He's also remarkably approachable. Highly recommend.",
    name: "Akriti J.",
    role: "Senior Data Scientist",
  },
];

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">In their own words</p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
          What past participants <em className="text-gold">say.</em>
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-ink-light/70 border hairline p-8 md:p-10 hover:border-gold/40 transition-colors"
            >
              <Quote size={28} className="text-gold mb-6" />
              <blockquote className="text-white/85 font-light leading-relaxed text-base md:text-lg">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t hairline">
                <div className="font-serif text-lg text-white">{t.name}</div>
                <div className="text-xs text-white/55 uppercase tracking-wider mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
