import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";


/** @titleBy label */
export interface Props {
    image: {
        mobile: ImageWidget;
        desktop: ImageWidget;
        href?: string;
    };
}


function Card({ image }: Props,) {
    return (
        <div class="flex flex-col gap-4 justify-center">
            {image && (
                <a href={image?.href} class="flex flex-col gap-4 lg:w-full w-full lg:h-auto">
                    <figure>
                        <Picture class="w-full">
                            <Source
                                media="(max-width: 767px)"
                                src={image?.mobile}
                            />
                            <Source
                                media="(min-width: 768px)"
                                src={image?.desktop}
                            />
                            <img
                                class="max-w-full w-full md:w-auto h-auto"
                                sizes="(max-width: 640px) 100vw, 30vw"
                                src={image?.desktop}
                                decoding="async"
                                loading="lazy"
                            />
                        </Picture>
                    </figure>
                </a>
            )}
        </div>
    );
}

export default Card;
