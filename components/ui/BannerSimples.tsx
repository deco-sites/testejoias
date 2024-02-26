import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  imagemDesktop: {
    Imagem: ImageWidget;
    Alt?: string;
  };
  imagemMobile: {
    Imagem: ImageWidget;
    Alt?: string;
  };
  Fullbanner?: boolean;
  action?: {
    href: string;
    title: string;
  };
  margem?: {
    tamanhoDoEspacamento?: "Margem grande" | "Margem pequena";
  };
}

export default function FullBanner(
  { imagemDesktop, imagemMobile, action, margem, Fullbanner }: Props,
) {
  return (
    <div
      class={`
      ${Fullbanner == true ? "row" : "container"}  
      ${margem?.tamanhoDoEspacamento == "Margem pequena" ? "my-4" : ""}
      ${
        margem?.tamanhoDoEspacamento == "Margem grande"
          ? "my-20 px-4 lg:px-0"
          : ""
      }
      `}
    >
      <a
        href={action?.href ?? "#"}
        title={action?.title}
        class="relative h-[600px] overflow-y-hidden w-full"
      >
        <Picture>
          <Source
            media="(max-width: 768px)"
            src={imagemMobile.Imagem}
            width={360}
          />
          <Source
            media="(min-width: 768px)"
            src={imagemDesktop.Imagem}
            width={1200}
          />
          <img
            src={imagemDesktop.Imagem}
            class="w-full h-auto"
            width={1200}
            decoding="async"
            loading="lazy"
          />
        </Picture>
      </a>
    </div>
  );
}
