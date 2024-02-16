import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  background: {
    mobile: ImageWidget;
    desktop: ImageWidget;
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
  classeCss?: string;
}

export default function ImagemETexto(
  { link, text, title, image, background, classeCss }: Props,
) {
  return (
    <div
      class={`w-full block-shoppable-banner relative 
        ${classeCss}
    `}
    >
      {(background?.desktop || background?.mobile) && (
        <Picture class="w-full h-full background-image">
          <Source
            media="(max-width: 767px)"
            src={background?.mobile}
            width={400}
          />
          <Source
            media="(min-width: 768px)"
            src={background?.desktop}
            width={1920}
          />
          <img
            class="w-full h-full"
            src={background?.desktop}
            width={1920}
            decoding="async"
            loading="lazy"
          />
        </Picture>
      )}

      <div class="container">
        <div class="card grid grid-cols-2 items-center">
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
          <div class="card-content">
            <div>
              <h2 class="fontsize-46px font-playfair text-secondary font-bold separador-primary-left">
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
                  class="btn py-2 px-8 fontsize-12px min-height-unset h-auto color-white"
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
