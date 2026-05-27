// Dedicated Thank-You page (route: /thankyou/)
// Used as the conversion-tracking destination for all lead-capture forms.
// After 5 seconds, auto-redirects to the marketing site at https://epsilonexec.com/
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const REDIRECT_URL = "https://epsilonexec.com/";
const COUNTDOWN_SECS = 5;

export default function ThankYou() {
  const [seconds, setSeconds] = useState(COUNTDOWN_SECS);

  // Fire a custom DOM event the moment the page mounts so analytics scripts
  // (GA4, Meta Pixel, GTM, LinkedIn Insight Tag, etc.) can listen and convert.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("epsilon:conversion", {
      detail: { page: "/thankyou/", redirect: REDIRECT_URL },
    }));
    if (window.dataLayer) {
      window.dataLayer.push({ event: "lead_thankyou", page: "/thankyou/" });
    }
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(t);
          window.location.href = REDIRECT_URL;
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const progress = ((COUNTDOWN_SECS - seconds) / COUNTDOWN_SECS) * 100;

  return (
    <main
      data-testid="thankyou-page"
      className="relative min-h-screen flex items-center justify-center bg-navy-deep text-cream overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full glow-gold opacity-50 pointer-events-none" />

      <div className="relative w-full max-w-2xl mx-auto px-6 py-16 text-center animate-fade-up">
        {/* Brand mark — keeps it premium */}
        <img
          src="/assets/logo.png"
          alt="Epsilon Executive Education"
          className="h-12 md:h-14 w-auto mx-auto mb-10 opacity-90"
        />

        <div className="inline-flex items-center justify-center w-20 h-20 mb-7 border-2 border-gold rounded-full bg-cream/5 backdrop-blur-sm">
          <CheckCircle2 size={38} className="text-gold" strokeWidth={1.8} />
        </div>

        <p className="font-mono uppercase text-[12px] tracking-[0.28em] text-gold font-semibold mb-3">
          — Thank You —
        </p>

        <h1 className="font-editorial text-cream text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] leading-[1.06] font-semibold">
          We've received your enquiry.
        </h1>

        <p className="font-editorial italic text-gold text-[1.6rem] sm:text-[1.9rem] md:text-[2.2rem] leading-tight mt-2">
          Our admissions lead will be in touch shortly.
        </p>

        <p className="font-editorial text-cream/80 text-[1.05rem] sm:text-[1.15rem] md:text-[1.22rem] font-medium leading-relaxed mt-6 max-w-xl mx-auto">
          You'll be redirected to <span className="text-cream font-semibold">epsilonexec.com</span> in a few seconds.
          If the page doesn't redirect automatically,{" "}
          <a
            href={REDIRECT_URL}
            data-testid="thankyou-manual-redirect"
            className="text-gold underline underline-offset-4 hover:no-underline"
          >
            click here
          </a>.
        </p>

        {/* Countdown */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-3">
            <span data-testid="thankyou-countdown" className="font-editorial text-cream text-[1.4rem] font-semibold">
              {seconds}
            </span>
            <span className="font-mono uppercase text-[11px] tracking-[0.24em] text-cream/55 font-semibold">
              second{seconds === 1 ? "" : "s"} remaining
            </span>
          </div>

          <div className="mx-auto mt-4 w-64 max-w-full h-[2px] bg-cream/15 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
