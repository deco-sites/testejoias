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
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
}

export default function Pilar(
  props: Props,
) {
  const {
<<<<<<< HEAD
    title = "",
    description = "",
    benefits = [],
    classeCss
=======
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
>>>>>>> 3545019ba3d39c5497199fdcba1dc86c51c00419
  } = props;

  const listOfBenefits = benefits.map((benefit) => {
    return (
      <div
        class={`gap-4 rounded-2xl border lg:py-3 lg:px-6 badge-accent bg-transparent `}
      >
        <div class="justify-center flex">
          <Icon
            id={benefit.icon}
            class={"text-base-content mob-zoom--5"}
            width={80}
            height={80}
            strokeWidth={0.01}
            fill="currentColor"
          />
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
    <div
      class={`w-full container px-4 py-8 flex flex-col gap-8 lg:gap-2 lg:py-6 lg:px-0 ${
        classeCss ? classeCss : ""
      }`}
    >
      {title !== "" && description !== "" && (
        <Header
          title={title}
        />
      )}
      <div class="w-full flex justify-center">
        <div class="px-4 py-8 flex gap-8 lg:gap-10 lg:py-10 lg:px-0 max-w-full mx-auto">
          {listOfBenefits}
        </div>
      </div>
    </div>
  );
}
