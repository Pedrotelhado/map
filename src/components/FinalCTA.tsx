import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/pedro-olisipoway/let-s-talk";
const MAPS_URL = "https://goo.gl/maps/9VAkZQRBgWK3EZHg6";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
          {t("Vamos conversar", "Let's talk")}
        </a>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-8 text-sm font-medium">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              {t("Marcar Reunião", "Book A Meeting")}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-sm font-medium"
          >
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-4 w-4" />
              {t("Obter Direções", "Get Directions")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
