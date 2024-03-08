import BotaoTopoPadrao from "$store/components/topoPadraoPaginas/BotaoTopoPadrao.tsx";

export type BotaoTopoPadrao = {
  label: string;
  href: string;
  corDoBotao?:
    | "Success"
    | "Transparent Success";
};

export interface Props {
  title: string;
  tagHtmlDoTitulo:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  /** @format html */
  text?: string;
  botoes?: BotaoTopoPadrao[];
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
}

export default function TopoPadraoPaginas(
  { text, title, tagHtmlDoTitulo, botoes, classeCss }: Props,
) {
  const TagTitulo = tagHtmlDoTitulo || "h1";
  return (
    <div
      class={`w-[1020px] max-w-full mx-auto mt-6 mb-6 lg:mt-20 px-4 lg:px-0 ${
        classeCss ? classeCss : ""
      }`}
    >
      <TagTitulo class="font-playfair text-secondary text-center font-bold separador-secondary text-[32px] leading-9 md:text-[46px] md:leading-[55px] relative pb-4">
        {title}
        <small class="absolute bg-secondary h-0.5 w-20 bottom-0 right-0 left-0 mx-auto">
        </small>
      </TagTitulo>
      {text && (
        <div
          class="text-sm md:text-base text-center mt-4"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      <BotaoTopoPadrao content={botoes} />
    </div>
  );
}
