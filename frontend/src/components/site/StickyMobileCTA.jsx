import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function StickyMobileCTA() {
  return (
    <div
      data-testid="sticky-mobile-cta"
      className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:hidden"
    >
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Epsilon%2C%20I%27d%20like%20to%20know%20more%20about%20the%20programme.`}
        target="_blank"
        rel="noreferrer"
        data-testid="sticky-whatsapp-btn"
        aria-label="WhatsApp us"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/30 active:scale-95 transition-transform"
      >
        <MessageCircle size={24} strokeWidth={1.8} />
      </a>
      <a
        href={`tel:+${BRAND.phoneDigits}`}
        data-testid="sticky-call-btn"
        aria-label="Call now"
        className="h-14 w-14 rounded-full bg-gold text-white flex items-center justify-center shadow-lg shadow-black/30 active:scale-95 transition-transform animate-pulse-gold"
      >
        <Phone size={22} strokeWidth={1.8} />
      </a>
    </div>
  );
}
