import Carousel, { Props as CarouselProps } from "../layout/Carousel.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Comentarios { 
  /** @title Nome da cliente */
  label: string;
  /** @title Foto da cliente */
  /** @description 45px x 45px */
  foto?: ImageWidget;
  titulo?: string;
  /** @format html */
  texto: string;
}

export interface Props {
  titulo: string;
  comentarios: Comentarios[];
  slider?: CarouselProps;
}

function ComentariosClientes({ comentarios, titulo, slider }: Props) {
    const ITEMS: Comentarios[] = new Array(1).fill({});
    const allItems = !comentarios || comentarios?.length === 0 ? ITEMS : comentarios;
  return (
    <div class="bg-[#2B3243] py-12 px-4">
        <div class="container">
            <h2 class="w-[800px] max-w-full mx-auto text-white font-bold font-playfair mb-4 text-center text-[32px] leading-9 md:text-[46px] md:leading-[55px]">{titulo}</h2> 
            <div class="comentarios w-[1088px] max-w-full mx-auto">
                <Carousel
                    layout={{ itemWidth: 200 }}
                    {...slider}
                    children={allItems.map((comentario) =>  
                        <div class="bg-secondary rounded-lg p-4 md:p-8"> 
                            {comentario.titulo && ( 
                              <h3 class="font-playfair text-secondary-content text-2xl font-semibold">{comentario.titulo}</h3>
                            )} 
                            <div
                              class="text-secondary-content text-sm"
                              dangerouslySetInnerHTML={{ __html: comentario.texto }}
                            />
                            <div class="flex items-center text-secondary-content mt-2">
                              {comentario.foto && (
                                <figure>
                                  <Image
                                    class="mr-2"
                                    src={comentario.foto}
                                    alt={comentario.label}
                                    width={45}
                                    height={45}
                                    loading="lazy"
                                  />
                                </figure>
                              )}
                              <div>
                                <strong class="block text-base font-semibold">{comentario.label}</strong><span class="block text-sm font-light -mt-1">Cliente Joias VIP</span>
                              </div>
                            </div> 
                        </div> 
                    )}
                />
                </div>
        </div>
    </div>
  );
}

export default ComentariosClientes;