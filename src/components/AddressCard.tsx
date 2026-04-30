import { useLanguage } from "@/contexts/LanguageContext";
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MAPS_URL = "https://maps.app.goo.gl/qtpRwv3NVgzDw8fu5";
const ADDRESS = "Monte do Lago, N390, 7540-011 São Domingos";

const AddressCard = () => {
  const { t } = useLanguage();

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS).then(() => {
      toast.success(t("Morada Copiada", "Address Copied"));
    });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-lg">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm text-center">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-5">
            {t("Morada", "Address")}
          </h2>
          <address className="not-italic text-sm md:text-base text-foreground/80 leading-relaxed mb-8">
            Monte do Lago, N390, 7540-011 São Domingos
            <br />
            Abela - Santiago do Cacém
            <br />
            Setúbal, Portugal
          </address>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs"
              onClick={copyAddress}
            >
              <Copy className="mr-2 h-3.5 w-3.5" />
              {t("Copiar Morada", "Copy Address")}
            </Button>
            <Button asChild size="sm" className="rounded-full text-xs">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                {t("Abrir No Google Maps", "Open In Google Maps")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressCard;
