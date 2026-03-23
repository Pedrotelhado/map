import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/pedro-olisipoway/let-s-talk";
const MAPS_URL = "https://goo.gl/maps/9VAkZQRBgWK3EZHg6";

const StickyMobileCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3 safe-bottom">
      <div className="flex gap-2">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-xs font-medium py-3"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t("Obter Direções", "Get Directions")}
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border bg-card text-foreground text-xs font-medium py-3"
        >
          <Calendar className="h-3.5 w-3.5" />
          {t("Marcar Reunião", "Book A Meeting")}
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
