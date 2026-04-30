import { Instagram, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container max-w-2xl text-center">
        <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-primary">
          MONTE DO LAGO
        </span>

        {/* Instagram Link */}
        <div className="mt-5 flex items-center justify-center">
          <a
            href="https://www.instagram.com/_montedolago_/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Website / About Us Link */}
        <div className="mt-3 flex items-center justify-center">
          <a
            href="https://maps.app.goo.gl/qtpRwv3NVgzDw8fu5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{t("Sobre nós", "About us")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
