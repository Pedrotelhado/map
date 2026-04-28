import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAPS_URL = "https://goo.gl/maps/9VAkZQRBgWK3EZHg6";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-28 px-4">
      <div className="container max-w-3xl text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-primary mb-4">
          Abela, Santiago do Cacém
        </p>
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
          {t("Monte do Lago", "Monte do Lago")}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          {t(
            "Vamos ajudar-te a chegar com facilidade",
            "We’ll help you get here with ease"
          )}
        </p>
        <address className="not-italic text-sm md:text-base text-foreground/80 leading-relaxed mb-10">
          N390, 7540-011 São Domingos
          <br />
          Santiago do Cacém
          <br />
          Setúbal, Portugal
        </address>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-8 text-sm font-medium">
            <a href="#quick-access">
              <MapPin className="mr-2 h-4 w-4" />
              {t("Obter direções", "Get directions")}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-sm font-medium"
          >
            <a href="https://montedolago.com//" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" />
              {t("Sobre nós", "About us")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
