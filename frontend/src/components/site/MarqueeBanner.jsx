import { useState, useEffect } from "react";
import { X } from "lucide-react";

const ITEMS = [
  "Admissions closing soon — Fall 2026 cohort",
  "Limited seats · Live cohort",
  "Live online · 12-week program",
  "Program fee · ₹89,000 · EMI available",
  "Faculty with experience at NYU · Columbia · JPMorgan · LinkedIn",
  "Professional Certificate in Applied AI & Machine Learning",
];

export default function MarqueeBanner() {
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("epsilon_marquee_closed") === "1") setClosed(true);
  }, []);

  if (closed) return null;

  return (
    <div
      data-testid="marquee-banner"
      className="fixed top-0 left-0 right-0 z-50 bg-navy-deep text-gold border-b border-gold/30 overflow-hidden"
      style={{ height: 34 }}
    >
      <div className="relative flex items-center h-full">
        {/* LIVE dot prefix */}
        <div className="flex-shrink-0 pl-3 pr-3 sm:pl-5 sm:pr-5 flex items-center gap-2 h-full border-r border-gold/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-60 wa-pulse" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold font-medium hidden sm:inline">Live</span>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="marquee-track flex items-center whitespace-nowrap will-change-transform">
            {[...ITEMS, ...ITEMS].map((t, i) => (
              <span key={i} className="flex items-center font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] text-cream/85 px-5 sm:px-8">
                {t}
                <span className="inline-block h-1 w-1 rounded-full bg-gold/50 ml-7 sm:ml-9" />
              </span>
            ))}
          </div>
        </div>

        <button
          data-testid="marquee-close-btn"
          onClick={() => {
            setClosed(true);
            sessionStorage.setItem("epsilon_marquee_closed", "1");
          }}
          aria-label="Dismiss"
          className="flex-shrink-0 px-2 sm:px-3 h-full hover:bg-cream/10 transition-colors text-cream/70 hover:text-gold"
        >
          <X size={14} />
        </button>
      </div>

      <style>{`
        @keyframes epsilonMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: epsilonMarquee 38s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
