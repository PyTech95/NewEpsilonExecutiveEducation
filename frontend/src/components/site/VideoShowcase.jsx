import { useState } from "react";
import { Play, X } from "lucide-react";

const THUMB = "/assets/founder-video-thumb.jpg";
const VIMEO_EMBED = "https://player.vimeo.com/video/1195967029?autoplay=1&title=0&byline=0&portrait=0";

export default function VideoShowcase() {
  const [open, setOpen] = useState(false);
  return (
    <section data-testid="video-showcase-section" className="bg-bone text-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Program Preview</p>
            <span className="gold-rule-lg block mb-6" />
            <h2 className="font-editorial text-navy-deep text-[2.1rem] sm:text-[3rem] lg:text-[3.4rem] leading-[1.06]">
              Hear from our <span className="italic text-gold">Founder</span>.
            </h2>
            <p className="mt-6 font-editorial text-navy-deep/75 max-w-md text-[1.05rem] leading-relaxed">
              A 60-second video of Kent Bhupathi, that introduces Epsilon&rsquo;s Professional
              Certificate in Applied AI &amp; Machine Learning &mdash; a live online program built
              for professionals seeking practical AI skills, expert guidance and stronger career
              outcomes.
            </p>
          </div>

          <div className="lg:col-span-7 relative corner-brackets">
            <button
              data-testid="video-play-btn"
              onClick={() => setOpen(true)}
              className="group relative w-full aspect-video overflow-hidden shadow-2xl shadow-navy-deep/30 block"
            >
              <img
                src={THUMB}
                alt="Hear from our Founder, Kent Bhupathi"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/80 via-navy-deep/30 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative">
                  <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
                  <span className="relative inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gold text-navy-deep group-hover:bg-cream transition-colors">
                    <Play size={32} className="ml-1" fill="currentColor" />
                  </span>
                </span>
              </span>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                <div>
                  <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-gold mb-2">60 sec</p>
                  <p className="font-editorial italic text-xl md:text-2xl">A note from Kent Bhupathi</p>
                </div>
                <span className="font-mono uppercase text-[10px] tracking-[0.2em] text-cream/70 hidden sm:block">Watch preview</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          data-testid="video-modal"
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            data-testid="video-modal-close"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white"
          >
            <X size={28} />
          </button>
          <div
            className="w-full max-w-[420px] sm:max-w-[480px] aspect-[9/16] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={VIMEO_EMBED}
              title="Hear from our Founder"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
