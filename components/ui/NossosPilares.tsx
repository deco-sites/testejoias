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
    title = "",
    description = "",
    benefits = [],
    classeCss
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
