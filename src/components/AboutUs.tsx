import { Linkedin, Globe } from "lucide-react"; // Added Globe here
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container max-w-2xl text-center">
        <span className="text-sm md:text-base font-semibold tracking-[0.4em] text-primary">
          OLISIPO WAY
        </span>

        {/* LinkedIn Link */}
        <div className="mt-6 flex items-center justify-center">
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

        {/* Website / About Us Link */}
        <div className="mt-4 flex items-center justify-center">
          <a
            href="https://olisipoway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            <Globe className="h-4 w-4" />
            <span>{t("Sobre nós", "About us")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
