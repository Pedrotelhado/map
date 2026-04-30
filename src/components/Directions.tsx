import { useLanguage } from "@/contexts/LanguageContext";
import {
  Map,
  CornerDownRight,
  ParkingSquare,
  ArrowLeft,
  DoorOpen,
  Building2,
} from "lucide-react";
import step1 from "@/assets/step-1.png";
import step2 from "@/assets/step-2.jpeg";
import step3 from "@/assets/step-3.png";
import step4 from "@/assets/step-4.png";
import step5 from "@/assets/step-5.png";
import step6 from "@/assets/step-6.jpg";

const Directions = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Map,
      image: step1,
      pt: "Este é o caminho que queres encontrar - Segue os passos abaixo",
      en: "This is the path you want to find – Follow the steps below",
    },
    {
      icon: CornerDownRight,
      image: step2,
      pt: "Contornar o quarteirão",
      en: "Go around the block",
    },
    {
      icon: ParkingSquare,
      image: step3,
      pt: "Estacionamento (EMEL) - virar à esquerda ao sair",
      en: "Parking (EMEL) - turn left when exiting",
    },
    {
      icon: ArrowLeft,
      image: step4,
      pt: "Virar à esquerda na entrada da garagem e contornar o quarteirão",
      en: "Turn left at the garage entrance and go around the block",
    },
    {
      icon: DoorOpen,
      image: step5,
      pt: "Entrada do edifício",
      en: "Building entrance",
    },
    {
      icon: Building2,
      image: step6,
      pt: "Subir ao 1º andar, escritório 17A",
      en: "Go to the 1st floor, office 17A",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
            {t("Ao entrar na Abela", "Upon entering Abela")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {t(
              "Segue passo a passo para que não te enganes no caminho",
              "Here’s a step-by-step guide so you don’t take a wrong turn"
            )}
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isFirstStep = i === 0;

            return (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
              >
                <div
                  className={
                    isFirstStep
                      ? "overflow-hidden"
                      : "aspect-[16/10] md:aspect-[16/8] overflow-hidden"
                  }
                >
                  <img
                    src={step.image}
                    alt={t(step.pt, step.en)}
                    className={
                      isFirstStep
                        ? "w-full h-auto"
                        : "w-full h-full object-cover"
                    }
                    loading={i > 1 ? "lazy" : undefined}
                  />
                </div>

                <div className="flex items-start gap-4 p-5 md:p-6">
                  <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-3 pt-1.5">
                    <Icon className="h-4 w-4 text-muted-foreground shrink-0 hidden md:block" />
                    <p className="text-sm md:text-base text-foreground font-medium leading-snug">
                      {t(step.pt, step.en)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Directions;
