import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export type BotoesImgTxt = {
  label: string;
  href: string;
  /** @title Abrir link em nova aba? */
  abrirEmNovaAba?: boolean;
  corDoBotao?:
    | "Success"
    | "Transparent Success";
};

export interface Props {
  image: {
    mobile: ImageWidget;
    desktop: ImageWidget;
    altText?: string;
  }; 
  title?: string;
  /** @format html */
  text?: string;
  botoes?: BotoesImgTxt[];   
  tamanhoDaImagemNoGrid?: "50%" | "30%";
  /** @title Imagem do lado direito em desktop? */
  ladoImgDesktop?: boolean;
  /** @title Imagem abaixo do texto em mobile? */
  imagemAbaixoNoMobile?: boolean;
  /** @title Centralizar título no mobile? */
  centralizarTituloMobile?: boolean;
  /** @title Título menor no mobile? */
  fonteMenorNoTituloMobile?: boolean;
  /** @description Imagem de fundo do bloco. Não preencher caso não seja necessário. */
  background?: {
    mobile?: ImageWidget;
    desktop?: ImageWidget;
  };
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
} 

export default function ImagemETexto(
  { 
    botoes,
    text,
    title,
    image,
    background,
    classeCss,
    imagemAbaixoNoMobile,
    centralizarTituloMobile,
    fonteMenorNoTituloMobile,
    ladoImgDesktop,
    tamanhoDaImagemNoGrid,
  }: Props,
) { 
  const imgordermobile = imagemAbaixoNoMobile === true
    ? "-order-1"
    : "order-none";
  const imgorderdesktop = ladoImgDesktop === true
    ? "md:-order-1"
    : "md:order-none";
  const menorfontemobile = fonteMenorNoTituloMobile === true
    ? "text-[32px] leading-9 md:text-[46px] md:leading-[55px]"
    : "text-[46px] leading-[55px]";
  return (
    <div
      class={`w-full my-8 block-shoppable-banner relative 
        ${classeCss}
    `}
    >
      {(background?.desktop || background?.mobile) && (
        <Picture class="w-full h-full absolute left-0 top-0 mb-4">
          {(background?.mobile) && (
            <Source
              media="(max-width: 767px)"
              src={background?.mobile}
              width={400}
            />
          )}
          {(background?.desktop) && (
            <Source
              media="(min-width: 768px)"
              src={background?.desktop}
              width={1920}
            />
          )}
          {(background?.desktop) && (
            <img
              class="w-full h-full"
              src={background?.desktop}
              width={1920}
              decoding="async"
              loading="lazy"
            />
          )}
        </Picture>
      )}

      <div class="container relative">
        <div class="flex flex-wrap items-center">
          <figure
            class={`relative px-4 md:px-0 ${
              tamanhoDaImagemNoGrid === "50%" ||
                tamanhoDaImagemNoGrid === undefined
                ? "w-full md:w-1/2"
                : ""
            }  ${tamanhoDaImagemNoGrid === "30%" ? "w-full md:w-1/3" : ""} `}
          >
            <Picture class="w-full">
              <Source
                media="(max-width: 767px)"
                src={image?.mobile}
                width={400}
              />
              <Source
                media="(min-width: 768px)"
                src={image?.desktop}
                width={400}
              />
              <img
                class="max-w-full w-full md:w-auto h-auto"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image?.desktop}
                alt={image?.altText}
                width={400}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </figure>
          <div
            class={`card-content px-4 md:px-0
            ${imgordermobile} ${imgorderdesktop}
            ${
              tamanhoDaImagemNoGrid === "50%" ||
                tamanhoDaImagemNoGrid === undefined
                ? "w-full md:w-1/2"
                : ""
            } ${tamanhoDaImagemNoGrid === "30%" ? "w-full md:w-2/3" : ""}
            `}
          >
            <div class="mx-auto w-full md:w-4/5">
              <h2
                class={`font-playfair text-secondary font-bold separador-primary-left relative pb-4 mb-4 ${menorfontemobile} 
                ${
                  centralizarTituloMobile === true
                    ? "text-center md:text-left"
                    : ""
                }
                `}
              > 
                {title && (
                  <span 
                    dangerouslySetInnerHTML={{ __html: title }}
                  /> 
                )}
                <small
                  class={`absolute bg-secondary h-0.5 w-20 bottom-0 left-0
                  ${
                    centralizarTituloMobile === true
                      ? "right-0 mx-auto md:mx-0"
                      : ""
                  }
                  `}
                >
                </small>
              </h2>
              {text && (
                <div
                  class="descricao"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {botoes && botoes.length > 0 && (
                <div class="flex flex-row my-4 gap-3">
                  {botoes.map((item) => (
                     <a
                      class={`font-bold text-xs
                      ${getCorDoBotaoClass(item.corDoBotao)}`}
                      href={item.href}
                      target={item.abrirEmNovaAba ? "_blank" : ""}
                      rel={item.abrirEmNovaAba ? "noopener noreferrer" : ""}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
function getCorDoBotaoClass(
  corDoBotao?: BotoesImgTxt["corDoBotao"],
): string {
  switch (corDoBotao) {
    case "Success":
      return "btn py-2 min-height-unset text-white h-auto color-white bg-[#00c9a2] rounded-full hover:bg-[#b994fe] uppercase";
    case "Transparent Success":
      return "btn py-2 min-height-unset h-auto rounded-full hover:bg-[#b994fe] uppercase color-[#00c9a2] btn-outline";
    default:
      return "btn py-2 min-height-unset text-white h-auto color-white bg-[#00c9a2] rounded-full hover:bg-[#b994fe] uppercase";
  }
} 