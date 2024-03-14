import { ProductDetailsPage } from "apps/commerce/types.ts";

interface Props {
  product: ProductDetailsPage | null;
}

function BreadcrumbProduct({ product }: Props) {
  return (
    <div class="py-6 container px-4">
      <div class="breadcrumbs">
        <ul>
          <li class="fontsize-12px">
            <a href="/">Inicio</a>
          </li>
          {product?.breadcrumbList?.itemListElement?.map((dado) => {
            return (
              <li class="fontsize-12px">
                <a href={dado.item}>{dado.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BreadcrumbProduct;
