import { useState } from "react";
import { Play, X } from "lucide-react";

const THUMB =
  "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function VideoShowcase() {
  const [open, setOpen] = useState(false);
  return (
    <section data-testid="video-showcase-section" className="bg-[#F8F6F1] text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-4">Programme Preview</p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight">
              See what a <em className="text-gold-dark">live session</em> feels like.
            </h2>
            <p className="mt-6 text-ink/70 max-w-md font-light text-lg">
              A 90-second look inside the Epsilon classroom — live teaching, structured critique
              and the rhythm of an executive cohort.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink/75">
              <li>· Live faculty interaction</li>
              <li>· Real graded submissions and feedback</li>
              <li>· Capstone defence walkthrough</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <button
              data-testid="video-play-btn"
              onClick={() => setOpen(true)}
              className="group relative w-full aspect-video overflow-hidden rounded-sm shadow-2xl shadow-ink/30 block"
            >
              <img src={THUMB} alt="Programme preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/30 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative">
                  <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
                  <span className="relative inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gold text-white group-hover:bg-gold-hover transition-colors">
                    <Play size={32} className="ml-1" fill="white" />
                  </span>
                </span>
              </span>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-light mb-1">90 sec</p>
                  <p className="font-serif text-xl md:text-2xl">Inside the Epsilon classroom</p>
                </div>
                <span className="text-xs text-white/70 hidden sm:block">Watch preview</span>
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
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Programme preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
