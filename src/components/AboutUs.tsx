import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
          {t("Sobre nós", "About us")}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Instagram
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
