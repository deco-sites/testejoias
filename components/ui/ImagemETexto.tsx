import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @description Imagem de fundo do bloco. Não preencher caso não seja necessário. */
  background?: {
    mobile?: ImageWidget;
    desktop?: ImageWidget;
  };
  image: {
    mobile: ImageWidget;
    desktop: ImageWidget;
    altText?: string;
  };
  /** @format html */
  text?: string;
  title?: string;
  link?: {
    text?: string;
    href?: string;
  };
  tamanhoDaImagemNoGrid?: "50%" | "30%";
  /** @title Imagem do lado direito em desktop? */
  ladoImgDesktop?: boolean;
  /** @title Imagem abaixo do texto em mobile? */
  imagemAbaixoNoMobile?: boolean;
  /** @title Centralizar título no mobile? */
  centralizarTituloMobile?: boolean;
  /** @title Título menor no mobile? */
  fonteMenorNoTituloMobile?: boolean;
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
}

export default function ImagemETexto(
  {
    link,
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
      class={`w-full my-6 block-shoppable-banner relative 
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
            class={`relative px-4 lg:px-0 ${
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
            class={`card-content mt-2 md:mt-0 px-4 lg:px-0
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
                class={`font-playfair text-secondary font-bold separador-primary-left relative pb-4 mb-6 ${menorfontemobile} 
                ${
                  centralizarTituloMobile === true
                    ? "text-center md:text-left"
                    : ""
                }
                `}
              >
                {title}
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
              <div class="mt-4 card-actions">
                <a
                  class="btn w-full md:w-auto rounded-[60px] w-full-mobile py-2 px-8 text-xs min-height-unset h-auto text-white uppercase"
                  href={link?.href}
                >
                  {link?.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
