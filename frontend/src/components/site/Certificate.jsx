import { Check } from "lucide-react";

export default function Certificate() {
  return (
    <section data-testid="certificate-section" className="bg-navy-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-gold pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-3">The Certificate</p>
          <span className="gold-rule-lg block mb-6" />
          <h2 className="font-editorial text-cream text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06]">
            A credential built on <span className="italic text-gold">work</span>, not attendance.
          </h2>
          <p className="mt-6 font-editorial text-cream/75 max-w-md text-[1.1rem] leading-relaxed">
            On successful completion, you receive a verified digital certificate plus a physical
            certificate by mail — backed by a transcript-style performance scorecard.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Live, assessed program — not pre-recorded",
              "80% minimum grade across all modules",
              "Capstone defence required to certify",
              "Verifiable digital + mailed physical copy",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 font-editorial text-cream/85 text-[1.02rem]">
                <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative bg-gradient-to-br from-navy to-navy-deep p-1 shadow-2xl shadow-black/40">
            <div className="bg-bone text-navy-deep p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-3 border-2 border-gold/60 pointer-events-none" />
              <div className="absolute inset-5 border border-gold/30 pointer-events-none" />
              <div className="relative text-center">
                <p className="font-mono uppercase text-[10px] tracking-[0.4em] text-gold-dark mb-1">Epsilon Executive Education</p>
                <p className="font-mono uppercase text-[10px] tracking-[0.3em] text-navy-deep/50 mb-8">Certificate of Achievement</p>
                <p className="font-editorial text-xl text-navy-deep/60 mb-3">This certifies that</p>
                <p className="font-editorial text-4xl md:text-5xl italic text-navy-deep mb-3 leading-tight">[ Your Name ]</p>
                <p className="font-editorial text-base text-navy-deep/70 mb-8">has successfully completed</p>
                <p className="font-editorial text-2xl text-navy-deep leading-snug">
                  Applied AI &amp; Machine Learning <br /> for Decision-Makers
                </p>
                <div className="mt-10 flex items-center justify-between font-mono uppercase text-[10px] tracking-[0.25em] text-navy-deep/55">
                  <span>12-Week Program</span>
                  <span>Cohort · 2026</span>
                </div>
                <div className="mt-8 inline-flex h-12 w-12 items-center justify-center bg-gold text-navy-deep">
                  <span className="font-editorial italic text-2xl leading-none">ε</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
