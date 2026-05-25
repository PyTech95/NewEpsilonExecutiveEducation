import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

const WA_TEXT = "Hi%20Epsilon%20team%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs.";

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.945 2.722.945.817 0 2.15-.515 2.478-1.318.144-.36.144-.673.044-.974-.13-.27-2.32-1.78-2.578-1.78zM16.42 26.99c-1.748 0-3.469-.46-4.974-1.346l-3.58.94.96-3.475a9.785 9.785 0 0 1-1.346-4.96c0-5.435 4.42-9.855 9.855-9.855 5.435 0 9.855 4.42 9.855 9.855 0 5.435-4.42 9.84-9.77 9.84zm0-21.708c-6.547 0-11.853 5.305-11.853 11.853 0 2.092.546 4.13 1.59 5.92L4 30l7.057-2.292a11.872 11.872 0 0 0 5.605 1.42h.005c6.55 0 11.886-5.328 11.886-11.875 0-3.176-1.232-6.157-3.474-8.4-2.244-2.252-5.225-3.572-8.4-3.572z"
      />
    </svg>
  );
}

export default function StickyMobileCTA() {
  const waUrl = `https://wa.me/${BRAND.whatsapp}?text=${WA_TEXT}`;
  const telUrl = `tel:+${BRAND.phoneDigits}`;

  return (
    <>
      {/* Desktop WhatsApp float */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-testid="whatsapp-float-btn"
        className="hidden lg:flex fixed bottom-5 left-5 z-[60] group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 wa-pulse pointer-events-none" />
        <span className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:bg-[#1ebd5b] transition-colors">
          <WhatsAppIcon size={30} />
        </span>
      </a>

      {/* Mobile bottom bar */}
      <div className="lg:hidden h-[72px]" aria-hidden="true" />
      <div
        data-testid="mobile-bottom-bar"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-[60]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <div className="bg-navy-deep/95 backdrop-blur-md border-t border-gold/25 px-3 py-2.5 shadow-[0_-8px_28px_rgba(0,0,0,0.35)]">
          <div className="flex items-stretch gap-2.5">
            <a
              href={telUrl}
              data-testid="mobile-bar-call-btn"
              aria-label="Call Now"
              className="group flex-1 inline-flex items-center justify-center gap-2 h-12 bg-gold text-navy-deep border border-gold hover:bg-cream hover:border-cream transition-colors duration-200 font-mono text-[10.5px] tracking-[0.22em] uppercase font-semibold active:scale-[0.98]"
            >
              <Phone size={15} className="group-hover:rotate-[-6deg] transition-transform" />
              Call Now
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="mobile-bar-whatsapp-btn"
              aria-label="WhatsApp"
              className="group flex-1 inline-flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white border border-[#25D366] hover:bg-[#1ebd5b] hover:border-[#1ebd5b] transition-colors duration-200 font-mono text-[10.5px] tracking-[0.22em] uppercase font-semibold active:scale-[0.98]"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
