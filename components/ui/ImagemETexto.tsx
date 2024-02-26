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
  classeCss?: string;
}

export default function ImagemETexto(
  { link, text, title, image, background, classeCss, imagemAbaixoNoMobile }:
    Props,
) {
  const imgordermobile = imagemAbaixoNoMobile === true ? "mob-order--1" : "";
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
          <figure class="relative">
            <Picture>
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
                class="max-w-100 w-auto h-auto"
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
              <h2 class="mob-fontsize-32px desk-fontsize-46px font-playfair text-secondary font-bold separador-primary-left">
                {title}
              </h2>
              {text && (
                <div
                  class="descricao"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              <div class="mt-4 card-actions">
                <a
                  class="btn m-border-radius-60px w-full-mobile py-2 px-8 fontsize-12px min-height-unset h-auto color-white uppercase"
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
