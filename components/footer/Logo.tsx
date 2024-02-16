import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
}

export default function Logo({ logo }: Props) {
  return (
    <>
      {logo?.image && (
        <div class="flex flex-col gap-3">
          <Image
            loading="lazy"
            src={logo?.image}
            alt={logo?.description}
            width={260}
            height={82}
          />
          <div class="fontsize-12px">
            {logo?.description}
          </div>
        </div>
      )}
    </>
  );
}
