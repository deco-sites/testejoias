import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import type { Product } from "apps/commerce/types.ts";

interface Props {
  product: Product;
  imageAtendimento?: ImageWidget;
  /** @format html */
  textAtendimento?: string;
}

function DescriptionProduct({ textAtendimento, imageAtendimento, product }: Props) {

  const { additionalProperty } = product?.product;

  console.log('testeee', additionalProperty)

  const displayAtendimento = !!additionalProperty?.find((prop) =>
    prop.name === "AtendimentoPersonalizado" && prop.value === "true" || prop.value === "Sim"
  );


  return (
    <div class="mt-4 sm:mt-6 informacoes">

      <div class="flex items-center">
        {additionalProperty.map((item) => {
          {
            if (item.name === "Bloc1Imagem1") {
              return (
                <div>
                  <img src={item.value}></img>
                </div>
              )
            }
            if (item.name === "Bloc1Imagem2") {
              return (
                <div>
                  <img src={item.value}></img>
                </div>
              )
            }
            if (item.name === "Bloc1Imagem3") {
              return (
                <div>
                  <img src={item.value}></img>
                </div>
              )
            }
          }
        })}
      </div>

      <div class="conteudo-produto flex items-center">
        <div class="md:w-1/2">
          <img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4348/01a15c85-3034-49a5-a34f-b1a287a13756"></img>
        </div>
        <div class="text md:w-1/2">
          <div class="content mx-auto w-full md:w-4/5 descricao color-[#707070]">
            <p>Este é apenas um exemplo de texto e você pode alterá-lo para atender às suas necessidades.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quam nec eros semper, vel scelerisque quam ultricies. Donec aliquam eros ac quam ultricies, nec scelerisque lorem semper. Quisque scelerisque mauris et leo tincidunt, sed semper lectus scelerisque. Ut ultricies enim a mauris semper, non luctus felis semper.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quam nec eros semper, vel scelerisque quam ultricies. Donec aliquam eros ac quam ultricies, nec scelerisque lorem semper. Quisque scelerisque mauris et leo tincidunt, sed semper lectus scelerisque. Ut ultricies enim a mauris semper, non luctus felis semper.</p>
          </div>
        </div>
      </div>

      <div class="conteudo-produto flex items-center">
        <div class="text md:w-1/2">
          <div class="content mx-auto w-full md:w-4/5 descricao color-[#707070]">
            <p>Este é apenas um exemplo de texto e você pode alterá-lo para atender às suas necessidades.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quam nec eros semper, vel scelerisque quam ultricies. Donec aliquam eros ac quam ultricies, nec scelerisque lorem semper. Quisque scelerisque mauris et leo tincidunt, sed semper lectus scelerisque. Ut ultricies enim a mauris semper, non luctus felis semper.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quam nec eros semper, vel scelerisque quam ultricies. Donec aliquam eros ac quam ultricies, nec scelerisque lorem semper. Quisque scelerisque mauris et leo tincidunt, sed semper lectus scelerisque. Ut ultricies enim a mauris semper, non luctus felis semper.</p>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4348/99c1360d-9a8a-42a6-854c-6f98497c2a65"></img>
        </div>
      </div>

      {additionalProperty.map((item) => {
        {
          if (item.name === "Video") {
            return (
              <div class="bloco-video">
                <iframe width="100%" height="640" src={item.value} title="Signos - JoiasVip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            )
          }
        }
      })}

      {displayAtendimento === true && (
        <div class="conteudo-produto flex items-center">
          <div class="text md:w-1/2">
            <div class="content mx-auto w-full md:w-4/5">
              <h3 class="font-playfair text-secondary font-bold separador-primary-left relative pb-4 mb-4 text-[46px] leading-[55px] text-center md:text-left">Personal Shopper<br></br>atendimento personalizado</h3>
              {textAtendimento && (
                <div
                  class="descricao color-[#707070]"
                  dangerouslySetInnerHTML={{ __html: textAtendimento }}
                />
              )}
              <div class="mt-4 card-actions">
                <a class="btn w-full md:w-auto rounded-[60px] w-full-mobile py-2 px-8 text-xs min-height-unset h-auto text-white uppercase">Saiba Mais</a>
                <a class="btn w-full md:w-auto rounded-[60px] w-full-mobile py-2 px-8 text-xs min-height-unset h-auto text-white uppercase">Saiba Mais</a>
              </div>
            </div>
          </div>
          {imageAtendimento && (
            <div class="md:w-1/2">
              <figure>
                <Image
                  src={imageAtendimento}
                  loading="lazy"
                />
              </figure>
            </div>
          )}
        </div>
      )}

    </div>

  );
}

export default DescriptionProduct;
