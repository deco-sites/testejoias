import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export type Canal = {
    /** @title Nome do canal */
  label: string;
  /** @title Número do canal */
  numeroCanal: string;
};

export type blocoDeCanal = { 
  logoCanal: ImageWidget;  
  /** @title Informações dos canais */
  listaCanais: Canal[];  
  dias: string;
  horario: string;  
  diasLinhaDois?: string;
  horarioLinhaDois?: string; 
};

export interface Props {
  blocoDeCanal: blocoDeCanal[];  
} 

export default function ImagemETexto(
  { 
    blocoDeCanal 
  }: Props,
) {  
  return (
    <div class="container my-6 px-4 grid grid-row md:grid-cols-2 gap-4">
      {blocoDeCanal.map((bcanal) => (
        <div class="flex flex-wrap rounded-xl overflow-hidden w-full">
          <div class="bg-[#2B3243] w-full md:w-[18%] flex justify-center items-center p-4">
            <Image 
              src={bcanal.logoCanal}  
              loading="lazy" 
            /> 
          </div>
          <div class="md:h-full md:flex flex-wrap w-full md:w-[41%]"> 
            {bcanal.listaCanais.map((op, index) => (
            <div
              key={index}
              class={`flex ${
              index % 2 === 0 ? "bg-secondary" : "bg-[#452F88]"
              } w-full px-4 py-2 flex items-center justify-between`}
            > 
                <div class="text-2xl w-1/2 text-center text-white font-bold font-playfair">
                  {op.label}
                </div>
                <div class="text-2xl w-1/2 text-center text-white font-bold">
                  <span class="block">Canal</span>
                  <span class="block">{op.numeroCanal}</span>
                </div>
            </div>
            ))}
          </div>  
          <div class="bg-[#2B3243] py-4 md:py-2 w-full md:w-[41%] flex justify-center content-center flex-wrap">
            <Image 
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4348/6f1cf02b-4576-4d0f-a040-b7ef738ba139"
              loading="lazy" 
              width={145}
            /> 
            <p class="block w-full m-0 text-center text-4xl text-[#B994FE] font-playfair">{bcanal.dias}</p>
            <p class="block w-full m-0 text-center text-[22px] font-bold text-white">{bcanal.horario}</p>   
            {bcanal.diasLinhaDois && (
              <p class="block w-full m-0 text-center text-4xl text-[#B994FE] font-playfair">{bcanal.diasLinhaDois}</p>
            )} 
            {bcanal.horarioLinhaDois && (
              <p class="block w-full m-0 text-center text-[22px] font-bold text-white">{bcanal.horarioLinhaDois}</p>
            )}
          </div> 
        </div>
      ))}
    </div>
  );
}