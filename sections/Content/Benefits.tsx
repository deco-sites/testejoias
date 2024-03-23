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
    url: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color secondary";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "Benefits",
    description = "Check out the benefits",
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
      url: "/"
    }, {
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
      url: "/"
    }, {
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
      url: "/"
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
        class={`${reverse
            ? "bg-secondary text-secondary-content rounded-md px-4 pb-6 pt-8"
            : ""
          } flex gap-4 ${benefitLayout == "piledup" ? "flex-col items-center text-center" : ""
          } ${showDivider && benefitLayout !== "piledup"
            ? "border-b border-neutral-300"
            : ""
          } ${showDivider ? "pb-4 lg:pr-8 lg:border-r lg:border-b-0" : ""} ${showDivider && !reverse ? "lg:pb-0" : ""
          }`}
      >
        <div class="flex-none">
          {benefit.icon === "BeneficiosParcelamento" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={92}
              height={62}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon === "BeneficiosTroca" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={72}
              height={78}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon === "BeneficiosFrete" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={145}
              height={75}
              strokeWidth={0.01}
              fill="currentColor"
            />
          )}
          {benefit.icon === "BeneficiosPrimeiraCompra" && (
            <Icon
              id={benefit.icon}
              class={"text-base-content mob-zoom--5"}
              width={78}
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
                width={36}
                height={36}
                strokeWidth={0.01}
                fill="currentColor"
              />
            )}
        </div>
        <div class="flex-auto flex flex-col gap-1">
          <div class="text-[#B994FE] text-sm md:text-[22px] font-bold">
            {benefit.label}
          </div>
          <p
            class={`text-xs lg:text-sm ${reverse ? "text-base-100" : "text-neutral"
              }`}
          >
            {benefit.description}
          </p>
          <a href={benefit.url} class="underline">Saiba mais</a>
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
                description={description}
                alignment={layout?.headerAlignment || "center"}
              />
            )}
            <div class="w-full flex justify-center">
              <div class="flex flex-col gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "With border" && (
        <div class="fundo-branco-margem-linear">
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
        </div>

      )}
      {layout?.variation === "Color secondary" && (
        <div class="fundo-branco-margem-linear">
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
        </div>

      )}
    </>
  );
}
