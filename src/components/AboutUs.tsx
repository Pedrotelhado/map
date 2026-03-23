import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
          {t("Sobre Nós", "About Us")}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {t(
            "Somos um investidor focado em early-stage, com 4 fundos sob gestão, um 5º fundo em fase final de angariação e um portfólio de mais de 80 startups, maioritariamente sediadas em Portugal.",
            "We are an early-stage investor managing 4 funds, with a portfolio of 80+ startups, primarily based in Portugal."
          )}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
