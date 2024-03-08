import { ProductDetailsPage } from "apps/commerce/types.ts";

interface Props {
  product: ProductDetailsPage | null;
}

function DescriptionProduct({ product }: Props) {
  const description = product?.product?.isVariantOf?.description;

  return (
    <div class="mt-4 sm:mt-6 description fundo-branco py-12">
      <div class="container">
        {description && (
          <>
            <span class="fontsize-16px text-secondary font-semibold">
              Descrição
            </span>
            <div
              class="mt-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default DescriptionProduct;
