import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
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
  imagemAbaixoNoMobile?: boolean;
  centralizarTituloMobile?: boolean;
  fonteMenorNoTituloMobile?: boolean;
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
  }: Props,
) {
  const imgordermobile = imagemAbaixoNoMobile === true ? "-order-1 md:order-none" : "";
  const centrotitulomobile = centralizarTituloMobile === true
    ? "text-center md:text-left"
    : "";
  const menorfontemobile = fonteMenorNoTituloMobile === true
    ? "text-[32px] leading-9 md:text-[46px] md:leading-[55px]"
    : "text-[46px]";
  return (
    <div
      class={`w-full block-shoppable-banner relative 
        ${classeCss}
    `}
    >
      {(background?.desktop || background?.mobile) && (
        <Picture class="w-full h-full background-image mb-4">
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

      <div class="container">
        <div class="card grid grid-cols-1 lg:grid-cols-2 items-center">
          <figure class="relative p-2">
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
          <div class={`card-content px-4 lg:px-0 ${imgordermobile}`}>
            <div>
              <h2
                class={`font-playfair text-secondary font-bold separador-primary-left relative pb-4 mb-6 ${menorfontemobile} ${centrotitulomobile}`}
              >
                {title}
                <small class="absolute bg-secondary h-0.5 w-20 bottom-0 left-0"></small>
              </h2>
              {text && (
                <div
                  class="descricao"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              <div class="mt-4 card-actions">
                <a
                  class="btn rounded-[60px] w-full-mobile py-2 px-8 text-xs min-height-unset h-auto text-white uppercase"
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
