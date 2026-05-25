import { Check } from "lucide-react";

export default function Certificate() {
  return (
    <section data-testid="certificate-section" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">The Certificate</p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight">
            A credential built on <em className="text-gold">work</em>, not attendance.
          </h2>
          <p className="mt-6 text-white/70 max-w-md font-light text-lg">
            On successful completion, you receive a verified digital certificate plus a physical
            certificate by mail — backed by a transcript-style performance scorecard.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Live, assessed programme — not pre-recorded",
              "80% minimum grade across all modules",
              "Capstone defence required to certify",
              "Verifiable digital + mailed physical copy",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative bg-gradient-to-br from-[#1a2238] to-ink p-1 rounded-sm shadow-2xl shadow-gold/10">
            <div className="bg-[#F5EFE0] text-ink-light p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-3 border-2 border-gold/60 pointer-events-none" />
              <div className="absolute inset-5 border border-gold/30 pointer-events-none" />
              <div className="relative text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold-dark mb-1">Epsilon Executive Education</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-8">Certificate of Achievement</p>
                <p className="font-serif text-xl text-ink/60 mb-3">This certifies that</p>
                <p className="font-serif text-4xl md:text-5xl italic text-ink mb-3 leading-tight">[ Your Name ]</p>
                <p className="font-serif text-base text-ink/70 mb-8">has successfully completed</p>
                <p className="font-serif text-2xl text-ink leading-snug">
                  Applied AI & Machine Learning <br /> for Decision-Makers
                </p>
                <div className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-ink/55">
                  <span>12-Week Programme</span>
                  <span>Cohort · 2026</span>
                </div>
                <div className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white">
                  <span className="font-serif text-lg">ε</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
