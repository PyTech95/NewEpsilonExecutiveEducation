import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const ITEMS = [
  "Applications closing soon — Spring 2026 cohort",
  "Limited seats · 50 per cohort",
  "Live online · 12-week programme",
  "Fee · ₹89,000 · EMI available",
  "Faculty with experience at NYU · Columbia · JPMorgan · LinkedIn",
  "94% placement assistance success rate",
  "Cohort starts March 2026",
];

export default function MarqueeBanner() {
  const [closed, setClosed] = useState(false);
  // Persist close state for the session only
  useEffect(() => {
    if (sessionStorage.getItem("epsilon_marquee_closed") === "1") setClosed(true);
  }, []);

  if (closed) return null;

  return (
    <div
      data-testid="marquee-banner"
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-ink overflow-hidden"
      style={{ height: 36 }}
    >
      <div className="relative flex items-center h-full">
        {/* Sparkle prefix */}
        <div className="flex-shrink-0 pl-3 pr-2 sm:pl-5 sm:pr-4 flex items-center gap-1.5 border-r border-ink/15 h-full bg-ink text-gold">
          <Sparkles size={12} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold hidden sm:inline">Live</span>
        </div>

        {/* Marquee track */}
        <div className="flex-1 overflow-hidden">
          <div className="marquee-track flex items-center whitespace-nowrap will-change-transform">
            {[...ITEMS, ...ITEMS].map((t, i) => (
              <span key={i} className="flex items-center text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-ink/85 px-4 sm:px-7">
                {t}
                <span className="inline-block h-1 w-1 rounded-full bg-ink/40 ml-7 sm:ml-9" />
              </span>
            ))}
          </div>
        </div>

        {/* Close */}
        <button
          data-testid="marquee-close-btn"
          onClick={() => {
            setClosed(true);
            sessionStorage.setItem("epsilon_marquee_closed", "1");
          }}
          aria-label="Dismiss"
          className="flex-shrink-0 px-2 sm:px-3 h-full hover:bg-ink/10 transition-colors text-ink/70 hover:text-ink"
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
          animation: epsilonMarquee 35s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
