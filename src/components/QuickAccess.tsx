import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation, Car, MapPin } from "lucide-react";

const WAZE_OFFICE = "https://waze.com/ul/heycs8b9zm";
const WAZE_PARKING = "https://waze.com/ul/heycs8b8hs";
const MAPS_OFFICE = "https://goo.gl/maps/9VAkZQRBgWK3EZHg6";

const QuickAccess = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Navigation,
      title: t("Waze — Escritório", "Waze — Office"),
      subtitle: t("Abrir no Waze", "Open in Waze"),
      url: WAZE_OFFICE,
    },
    {
      icon: Car,
      title: t("Waze — Estacionamento", "Waze — Parking"),
      subtitle: t("Estacionamento mais próximo", "Nearest parking"),
      url: WAZE_PARKING,
    },
    {
      icon: MapPin,
      title: t("Google Maps — Escritório", "Google Maps — Office"),
      subtitle: t("Abrir no Google Maps", "Open In Google Maps"),
      url: MAPS_OFFICE,
    },
  ];

  return (
    <section id="quick-access" className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
            {t("Acesso rápido", "Quick access")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {t(
              "Links de acesso ao escritório e estacionamento",
              "Directions to the office and parking"
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <a
              key={card.url}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
                <card.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                {card.title}
              </span>
              <span className="text-xs text-muted-foreground">{card.subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
