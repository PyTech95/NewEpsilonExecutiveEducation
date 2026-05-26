import { useEffect, useState } from "react";
import { ArrowRight, X, Linkedin } from "lucide-react";
import ChapterDivider from "./ChapterDivider";

const KENT_IMG = "/assets/kent.png";

const GUESTS = [
  {
    name: "Jayprakash Mistry",
    title: "Founder, Remarkables Capital & UnnichedHQ",
    domain: "Capital & AI",
    img: "/assets/jayprakash-mistry.jpeg",
    logos: ["Remarkables Capital", "UnnichedHQ"],
    bio: "A decade across venture capital, private equity and credit between the US, UK and India. Focused on AI, deeptech, life sciences, fintech and defence-adjacent sectors. Brings live deal-evaluation rigour into the cohort.",
  },
  {
    name: "Philip Wiseman, J.D.",
    title: "VP Legal Affairs, JPMorgan Chase",
    domain: "Legal & Compliance",
    img: "/assets/philip-wiseman.jpeg",
    logos: ["JPMorgan Chase", "UC Berkeley"],
    bio: "Business attorney with experience across banking, private equity, fund formation and cross-border transactions. Earlier at Winston & Strawn and Simpson Thacher. Brings AI-governance and compliance frameworks to the cohort.",
  },
  {
    name: "Alena Savera",
    title: "VP of Development, The NRP Group",
    domain: "Development Strategy",
    img: "/assets/alena-savera.jpeg",
    logos: ["The NRP Group", "UT Austin"],
    bio: "Real estate development leader based in Dallas–Fort Worth. Originated multi-family projects totalling 2,350+ units. B.Arch from UT Austin. Brings strategic-decision craft and stakeholder-defence rigour into the program.",
  },
  {
    name: "Mardoqueo Arteaga, Ph.D.",
    title: "Marketing Science Strategist, LinkedIn",
    domain: "Marketing Science",
    img: "/assets/mardoqueo-arteaga.jpeg",
    logos: ["LinkedIn", "KPMG", "Fordham"],
    bio: "Economist working at the intersection of marketing science, technology and applied research. Earlier at KPMG and Banco Central de Chile. Leads sessions on causal inference, A/B testing and applied ML for growth.",
  },
];

export default function Faculty() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section
      id="faculty"
      data-testid="faculty-section"
      className="relative bg-navy-deep text-cream pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
    >
      {/* Starfield + glow */}
      <div className="absolute inset-0 starfield opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full glow-gold pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterDivider
          chapter="III"
          eyebrow="Faculty"
          title="Faculty built for applied learning,"
          accent="not passive content."
          inverted
        />

        {/* Lead instructor — Kent */}
        <div data-testid="faculty-lead-card" className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_1fr] gap-10 lg:gap-16 items-center">
          <div className="relative mx-auto lg:mx-0 w-full max-w-[440px] corner-brackets">
            <div className="aspect-[4/5] overflow-hidden bg-navy">
              <img src={KENT_IMG} alt="Kent Oliver Bhupathi" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute right-[-10px] bottom-[-10px] md:right-[-14px] md:bottom-[-14px] bg-gold text-navy-deep px-6 py-4 md:px-8 md:py-5 max-w-[80%]">
              <p className="font-mono uppercase text-[10px] tracking-[0.22em] text-navy-deep/80 mb-1">Lead Instructor</p>
              <p className="font-editorial text-navy-deep text-[1.15rem] md:text-[1.35rem] leading-tight">Kent Oliver Bhupathi</p>
            </div>
          </div>

          <div>
            <p className="font-editorial italic text-gold text-[1.5rem] md:text-[1.9rem] leading-tight mb-5">Academic Excellence</p>
            <p className="text-cream/85 text-[1rem] md:text-[1.08rem] leading-[1.8] max-w-2xl">
              Learn live from Kent Oliver Bhupathi, former NYU professor and lead instructor at Epsilon Executive Education. Professor Kent brings academic rigour and applied AI judgment into a live cohort format designed for professionals who need to understand, evaluate and lead AI work.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-8 max-w-xl border-t border-b border-gold/25 py-6">
              <div>
                <p className="font-editorial italic text-gold text-[1.2rem] md:text-[1.4rem] leading-tight">New York University</p>
                <p className="font-mono uppercase text-[10px] tracking-[0.22em] text-cream/65 mt-2">Former Masters Faculty</p>
              </div>
              <div>
                <p className="font-editorial italic text-gold text-[1.2rem] md:text-[1.4rem] leading-tight">Columbia University</p>
                <p className="font-mono uppercase text-[10px] tracking-[0.22em] text-cream/65 mt-2">Former Faculty</p>
              </div>
            </div>

            <a data-testid="lead-faculty-linkedin" href="#" className="btn-outline-gold mt-8 !text-cream hover:!text-gold inline-flex">
              <Linkedin size={14} /> View Profile <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Guest faculty - circular avatars */}
        <div className="mt-16 md:mt-20">
          <p className="font-mono uppercase text-[11px] tracking-[0.28em] text-cream/65 text-center">Visiting Faculty &amp; Industry Experts</p>
          <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {GUESTS.map((g, i) => (
              <button
                key={g.name}
                type="button"
                data-testid={`guest-faculty-card-${g.name.toLowerCase().split(",")[0].replace(/[. ]+/g, "-")}`}
                onClick={() => setActive(i)}
                className="flex flex-col items-center text-center group focus:outline-none cursor-pointer"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-gold/20 group-hover:border-gold/60 group-focus:border-gold/80 transition-colors">
                  <img
                    src={g.img}
                    alt={g.name}
                    className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-editorial italic text-cream text-[1.05rem] md:text-[1.2rem] mt-5 leading-tight group-hover:text-gold transition-colors">
                  {g.name}
                </p>
                <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-cream/60 mt-2.5">{g.domain}</p>
                <span className="font-mono uppercase text-[9px] tracking-[0.22em] text-gold/0 group-hover:text-gold/80 transition-colors mt-2.5">View Bio →</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bio modal */}
      {active !== null && (
        <div
          data-testid="guest-bio-modal-overlay"
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 fade-up"
          onClick={() => setActive(null)}
        >
          <div
            data-testid="guest-bio-modal"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-cream text-navy-deep max-h-[90vh] overflow-y-auto corner-brackets"
            style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.7)" }}
          >
            <button
              data-testid="guest-bio-close-btn"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 h-10 w-10 bg-navy-deep text-cream hover:bg-gold hover:text-navy-deep flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-0">
              <div className="aspect-square md:aspect-auto overflow-hidden bg-navy">
                <img src={GUESTS[active].img} alt={GUESTS[active].name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-7 md:p-10">
                <p className="eyebrow !text-gold-dark mb-3">{GUESTS[active].domain}</p>
                <h3 className="font-editorial text-navy-deep text-[2rem] md:text-[2.6rem] leading-[1.05]">{GUESTS[active].name}</h3>
                <p className="font-editorial italic text-navy-deep/65 mt-2 text-[1.05rem]">{GUESTS[active].title}</p>
                <div className="w-12 h-px bg-gold/60 my-5" />
                <p className="font-editorial text-navy-deep/85 text-[1.05rem] leading-[1.75]">{GUESTS[active].bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {GUESTS[active].logos.map((l) => (
                    <span key={l} className="font-mono uppercase text-[10px] tracking-[0.18em] border border-navy-deep/15 px-2.5 py-1 text-navy-deep/65">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
