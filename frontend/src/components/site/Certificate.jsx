import { Check } from "lucide-react";

export default function Certificate() {
  return (
    <section data-testid="certificate-section" className="bg-navy-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-gold pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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
          <div className="relative group">
            {/* Outer frame */}
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
            <div className="relative bg-gradient-to-br from-gold/60 to-gold/20 p-[2px] shadow-2xl shadow-black/50">
              <div className="relative aspect-square overflow-hidden bg-navy-deep">
                <img
                  src="/assets/certificate-sample.png"
                  alt="Sample Epsilon Executive Education Certificate of Achievement"
                  data-testid="certificate-sample-img"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <p className="mt-4 font-mono uppercase text-[10px] tracking-[0.28em] text-cream/55 text-center">
              Sample certificate · Official issue mailed on completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
