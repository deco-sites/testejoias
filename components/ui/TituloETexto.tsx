export interface Props {
  title: string;
  centralizarTiulo?: boolean;
  tagHtmlDoTitulo:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  /** @format html */
  text?: string;
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
}

export default function TituloETexto(
  { text, title, tagHtmlDoTitulo, centralizarTiulo, classeCss }: Props,
) {
  const TagTitulo = tagHtmlDoTitulo || "h1";
  return (
    <div
      class={`container mx-auto mt-6 mb-6 md:my-12 px-4 md:px-0 
        ${classeCss ? classeCss : ""} 
      `}
    >
      <TagTitulo
        class={`font-playfair text-secondary font-bold separador-secondary text-[32px] leading-9 md:text-[46px] md:leading-[55px]
         ${centralizarTiulo === true ? "text-center" : ""}
        `}
      >
        {title}
      </TagTitulo>
      {text && (
        <div
          class="text-sm md:text-base mt-4"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
}
