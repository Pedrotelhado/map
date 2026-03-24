import { useLanguage } from "@/contexts/LanguageContext";
import { Map, CornerDownRight, ParkingSquare, ArrowLeft, DoorOpen, Building2 } from "lucide-react";
import step1 from "@/assets/step-1.png";
import step2 from "@/assets/step-2.png";
import step3 from "@/assets/step-3.png";
import step4 from "@/assets/step-4.png";
import step5 from "@/assets/step-5.png";
import step6 from "@/assets/step-6.png";

const Directions = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Map,
      image: step1,
      pt: "Visão geral - Av. Infante Dom Henrique 333H",
      en: "Overview — Av. Infante Dom Henrique 333H",
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
      pt: "Estacionamento - Av. de Pádua (EMEL) - virar à esquerda ao sair",
      en: "Parking - Av. de Pádua (EMEL) and turn left when existing",
    },
    {
      icon: ArrowLeft,
      image: step4,
      pt: "Virar à esquerda na entrada da garam e contornar o quarteirão",
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
      pt: "Subir ao 1º andar, escritório 17",
      en: "Go to the 1st floor, office 17",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
            {t("Como chegar", "How to get here")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {t(
              "Seguir os passos seguintes para encontrar o edifício",
              "Follow the next steps to find the building"
            )}
          </p>
        </div>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <div className="aspect-[16/10] md:aspect-[16/8] overflow-hidden">
                <img
                  src={step.image}
                  alt={t(step.pt, step.en)}
                  className="w-full h-full object-cover"
                  loading={i > 1 ? "lazy" : undefined}
                />
              </div>
              <div className="flex items-start gap-4 p-5 md:p-6">
                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {i + 1}
                </div>
                <div className="flex items-center gap-3 pt-1.5">
                  <step.icon className="h-4 w-4 text-muted-foreground shrink-0 hidden md:block" />
                  <p className="text-sm md:text-base text-foreground font-medium leading-snug">
                    {t(step.pt, step.en)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
