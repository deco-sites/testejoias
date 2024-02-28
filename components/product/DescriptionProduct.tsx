import { ProductDetailsPage } from "apps/commerce/types.ts";

interface Props {
  product: ProductDetailsPage | null;
}

function DescriptionProduct({ product }: Props) {
  
  const description = product?.product?.isVariantOf?.description; 
 
  return (
    <div class="mt-4 sm:mt-6 description">
      {description && (
        <div class="ml-2 mt-2" dangerouslySetInnerHTML={{ __html: description }}/>
      )}
    </div> 
  );
} 

export default DescriptionProduct;
 