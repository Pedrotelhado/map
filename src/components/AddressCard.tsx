import { useLanguage } from "@/contexts/LanguageContext";
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MAPS_URL = "https://goo.gl/maps/9VAkZQRBgWK3EZHg6";
const ADDRESS = "Av. Infante Dom Henrique 333H\n1º andar, escritório 17\n1800-282 Lisboa, Portugal";

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
            Av. Infante Dom Henrique 333H
            <br />
            1º andar, escritório 17
            <br />
            1800-282 Lisboa, Portugal
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
