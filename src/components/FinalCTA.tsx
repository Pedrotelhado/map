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
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
        {t("Sobre nós", "About us")}
      </h2>

      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {t(
          "Monte típico alentejano presente na família há 40 anos. Aqui valorizamos a tranquilidade e exclusividade.",
          "A typical Alentejo house within our family for 40 years. Here, we value peace and exclusivity."
        )}
      </p>
    </div>
  </section>
  );
};

export default FinalCTA;
