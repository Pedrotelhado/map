import { Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container max-w-2xl text-center">
        <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-primary">
          MONTE DO LAGO
        </span>

        {/* LinkedIn Link */}
        <div className="mt-5 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Website / About Us Link */}
        <div className="mt-3 flex items-center justify-center">
          <a
            href="https://olisipoway.com/"
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
