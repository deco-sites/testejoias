import { SendEventOnView } from "$store/components/Analytics.tsx";
import { Layout as CardLayout } from "$store/components/product/ProductCard.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Layout {
  /**
   * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
   */
  variant?: "aside" | "drawer";
  /**
   * @description Number of products per line on grid
   */
  columns?: Columns;
}

export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
  bannerPropaganda?: {
    ImagemDesktop?: ImageWidget;
    ImagemMobile?: ImageWidget;
    Alt?: string;
  };
  layout?: Layout;
  cardLayout?: CardLayout;

  /** @description 0 for ?page=0 as your first page */
  startingPage?: 0 | 1;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Result({
  page,
  bannerPropaganda,
  layout,
  cardLayout,
  startingPage = 0,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;
  const perPage = pageInfo.recordPerPage || products.length;

  const id = useId();

  const zeroIndexedOffsetPage = pageInfo.currentPage - startingPage;
  const offset = zeroIndexedOffsetPage * perPage;
  return (
    <>
      <div class="container px-4 sm:py-10">
        <div class="flex flex-row gap-20">
          {layout?.variant === "aside" && filters.length > 0 && (
            <aside class="hidden sm:block w-min min-w-72">
              <p>
                <span class="text-secondary text-2xl font-playfair font-semibold">
                  Filtrar
                </span>
              </p>
              <Filters filters={filters} />
            </aside>
          )}
          <div class="mt-2 md:mt-12 flex-grow" id={id}>
            {bannerPropaganda && (
              <Picture>
                <Source
                  media="(max-width: 768px)"
                  src={bannerPropaganda.ImagemMobile
                    ? bannerPropaganda.ImagemMobile
                    : ""}
                  width={400}
                />
                <Source
                  media="(min-width: 768px)"
                  src={bannerPropaganda.ImagemDesktop
                    ? bannerPropaganda.ImagemDesktop
                    : ""}
                  width={1200}
                />
                <img
                  src={bannerPropaganda.ImagemDesktop
                    ? bannerPropaganda.ImagemDesktop
                    : ""}
                  class="w-full h-auto rounded-md"
                  width={1200}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            )}
            <SearchControls
              sortOptions={sortOptions}
              filters={filters}
              breadcrumb={breadcrumb}
              displayFilter={layout?.variant === "drawer"}
            />
            <ProductGallery
              products={products}
              offset={offset}
              layout={{ card: cardLayout, columns: layout?.columns }}
            />

            <div class="flex justify-center my-4">
              <div class="join">
                <a
                  aria-label="previous page link"
                  rel="prev"
                  href={pageInfo.previousPage ?? "#"}
                  class="btn btn-ghost join-item"
                >
                  <Icon id="ChevronLeft" size={24} strokeWidth={2} />
                </a>
                <span class="btn btn-ghost join-item">
                  {zeroIndexedOffsetPage + 1}
                </span>
                <a
                  aria-label="next page link"
                  rel="next"
                  href={pageInfo.nextPage ?? "#"}
                  class="btn btn-ghost join-item"
                >
                  <Icon id="ChevronRight" size={24} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendEventOnView
        id={id}
        event={{
          name: "view_item_list",
          params: {
            // TODO: get category name from search or cms setting
            item_list_name: breadcrumb.itemListElement?.at(-1)?.name,
            item_list_id: breadcrumb.itemListElement?.at(-1)?.item,
            items: page.products?.map((product, index) =>
              mapProductToAnalyticsItem({
                ...(useOffer(product.offers)),
                index: offset + index,
                product,
                breadcrumbList: page.breadcrumb,
              })
            ),
          },
        }}
      />
    </>
  );
}

function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default SearchResult;
