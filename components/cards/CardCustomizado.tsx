import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type cardsCustom = {
  imagem: ImageWidget;
  /** @title Título */
  label: string;
  /** @format html */
  texto?: string;
  botao?: {
    label?: string;
    href?: string;
  };
};

export interface Props {
  cards?: cardsCustom[];
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
}

export default function CardsCustomizados({ cards, classeCss }: Props) {
  return (
    <div class={`container my-6 ${classeCss ? classeCss : ""}`}>
      <div class="flex flex-wrap">
        {cards &&
          cards.map((card, index) => (
            <div key={index} class="mb-8 mt-2 px-4 w-full md:w-1/3">
              {card.imagem && (
                <figure class="w-full md:w-4/5 mx-auto">
                  <Image
                    src={card.imagem}
                    alt={card.label}
                    width={400}
                    height={450}
                    loading="lazy"
                  />
                </figure>
              )}
              <h2 class="my-4 md:my-6 font-playfair text-secondary font-bold separador-primary-left text-4xl text-center">
                {card.label}
              </h2>
              {card.texto && (
                <div
                  class="descricao text-center"
                  dangerouslySetInnerHTML={{ __html: card.texto }}
                />
              )}
              {card.botao && (
                <div class="mt-4 card-actions">
                  <a
                    class="btn mx-auto w-full md:w-auto rounded-[60px] w-full-mobile py-2 px-8 text-xs min-height-unset h-auto text-white uppercase"
                    href={card.botao.href}
                  >
                    {card.botao.label}
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
