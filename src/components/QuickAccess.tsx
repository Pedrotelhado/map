import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation, Map } from "lucide-react";

const QuickAccess = () => {
  const { t } = useLanguage();

  return (
    <section
      id="quick-access"
      className="py-16 md:py-24 px-4 bg-secondary/40"
    >
      <div className="container max-w-4xl text-center">
        {/* Section header */}
        <h2 className="font-display text-2xl md:text-4xl text-foreground mb-3">
          {t("Acesso rápido", "Quick access")}
        </h2>

        <p className="text-muted-foreground mb-12 text-sm md:text-base">
          {t(
            "Escolhe a tua aplicação de navegação",
            "Choose your navigation app"
          )}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Waze */}
          <a
            href="https://waze.com/ul/heycbj7j2f"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-white/40 backdrop-blur p-10 transition-all duration-300 hover:bg-white/60 hover:shadow-md text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background/60">
              <Navigation className="h-6 w-6 text-foreground/80" />
            </div>

            <span className="text-lg font-medium text-foreground">
              Waze
            </span>
          </a>

          {/* Google Maps */}
          <a
            href="https://maps.app.goo.gl/JFKtUMrdnMGFnNf4A"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-white/40 backdrop-blur p-10 transition-all duration-300 hover:bg-white/60 hover:shadow-md text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background/60">
              <Map className="h-6 w-6 text-foreground/80" />
            </div>

            <span className="text-lg font-medium text-foreground">
              Google Maps
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
