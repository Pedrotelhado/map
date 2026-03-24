import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
          {t("Sobre nós", "About us")}
        </h2>

        <div className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
