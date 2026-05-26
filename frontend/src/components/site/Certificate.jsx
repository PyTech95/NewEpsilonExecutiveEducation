import { Check } from "lucide-react";

export default function Certificate() {
  return (
    <section data-testid="certificate-section" className="relative overflow-hidden bg-bone text-navy-deep">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.6) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(4,9,20,0.4) 0%, transparent 45%)" }} />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full bg-navy-deep/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-3">The Certificate</p>
          <span className="gold-rule-lg block mb-6" />
          <h2 className="font-editorial text-navy-deep text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06]">
            A credential built on <span className="italic text-gold-dark">work</span>, not attendance.
          </h2>
          <p className="mt-6 font-editorial text-navy-deep/75 max-w-md text-[1.1rem] leading-relaxed">
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
              <li key={b} className="flex items-start gap-3 font-editorial text-navy-deep/85 text-[1.02rem]">
                <Check size={16} className="text-gold-dark mt-1 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative group">
            <img
              src="/assets/certificate-sample.png"
              alt="Sample Epsilon Executive Education Certificate of Achievement"
              data-testid="certificate-sample-img"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <p className="mt-4 font-mono uppercase text-[10px] tracking-[0.28em] text-navy-deep/55 text-center">
              Sample certificate · Official issue mailed on completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
