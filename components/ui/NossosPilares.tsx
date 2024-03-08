import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface Props {
  /**
   * @default Benefits
   */
  title?: string;
  /**
   * @default Check out the benefits
   */
  description?: string;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color secondary";
    headerAlignment?: "center" | "left";
  };
}

export default function Pilar(
  props: Props,
) {
  const {
    title = "Pilares",
    description = "Pilares",
    benefits = [{
      icon: "Missao",
      label: "Missão",
      description:
        "Nossa missão é inspirar e encantar, oferecendo joias e relógios de excepcional qualidade, simbolizando momentos inesquecíveis na vida de nossos clientes. Buscamos proporcionar experiências únicas, pautadas na confiança, inovação e excelência no atendimento.",
    }, {
      icon: "Visao",
      label: "Visão",
      description:
        "Vislumbramos ser a marca de referência mundial em joias e relógios, reconhecida não apenas pela beleza de nossas peças, mas também pela autenticidade e compromisso com a satisfação de nossos clientes.",
    }, {
      icon: "Valores",
      label: "Valores",
      description:
        "O Joias VIP é orientado por valores fundamentais, que incluem Integridade, Confiança, Inovação, Excelência, Paixão pelo Cliente e Compromisso com o Crescimento Sustentável. Esses princípios guiam todas as nossas ações, desde a construção da confiança até a busca pela excelência.",
    }],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const showDivider = index < benefits.length - 1;
    const reverse = layout?.variation === "Color secondary";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <div
        class={`gap-4`}
      >
        <div class="justify-center flex">
          {benefit.icon === "BeneficiosParcelamento" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={80}
              height={80}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon === "BeneficiosTroca" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={80}
              height={80}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon === "BeneficiosFrete" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={80}
              height={80}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon === "BeneficiosPrimeiraCompra" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={80}
              height={80}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon !== "BeneficiosParcelamento" &&
            benefit.icon !== "BeneficiosTroca" &&
            benefit.icon !== "BeneficiosFrete" &&
            benefit.icon !== "BeneficiosPrimeiraCompra" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={80}
              height={80}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
        </div>
        <div class="flex-auto flex flex-col gap-1">
          <div class="font-playfair text-secondary font-bold text-[32px] text-center">
            {benefit.label}
          </div>
          <p
            class={`text-xs lg:text-sm text-neutral text-center color-[#707070]`}
          >
            {benefit.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
            {title !== "" && description !== "" && (
              <Header
                title={title}
                alignment={layout?.headerAlignment || "center"}
              />
            )}
            <div class="w-full flex justify-center">
              <div class="px-4 py-8 flex gap-8 lg:gap-10 lg:py-10 lg:px-0 w-[1020px] max-w-full mx-auto">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "With border" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          {title !== "" && description !== "" && (
            <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            />
          )}
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full py-6 px-4 border border-base-300 lg:gap-8 lg:grid-flow-col lg:auto-cols-fr lg:p-10">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
      {layout?.variation === "Color secondary" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          {title !== " " && description !== " " && (
            <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            />
          )}
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full lg:gap-20 lg:grid-flow-col lg:auto-cols-fr">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
