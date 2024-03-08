import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "apps/commerce/types.ts";

export type Props =
  & Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">
  & {
    displayFilter?: boolean;
  };

function SearchControls(
  { filters, breadcrumb, displayFilter, sortOptions }: Props,
) {
  const open = useSignal(false);

  return (
    <Drawer
      loading="lazy"
      open={open.value}
      onClose={() => open.value = false}
      aside={
        <>
          <div class="bg-secondary flex flex-col h-full divide-y overflow-y-hidden">
            <div class="flex justify-between items-center">
              <h2 class="px-4 py-3">
                <span class="font-medium text-2xl text-white md:text-primary">
                  Filtrar
                </span>
              </h2>
              <Button class="btn btn-ghost" onClick={() => open.value = false}>
                <Icon id="XMark" class="invert" size={24} strokeWidth={2} />
              </Button>
            </div>
            <div class="flex-grow overflow-auto">
              <Filters filters={filters} />
            </div>
            <div class="grid grid-cols-2 gap-2 p-4">
              <button class="btn btn-block rounded-[60px] py-2 min-height-unset h-auto text-white bg-transparent border-white">
                Limpar
              </button>
              <button class="btn btn-block rounded-[60px] py-2 min-height-unset h-auto text-white">
                Aplicar
              </button>
            </div>
          </div>
        </>
      }
    >
      <div class="flex flex-col justify-between mb-4 p-4 md:my-4 sm:p-0 sm:gap-4 sm:flex-row">
        <div class="flex flex-row items-center sm:p-0">
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
        </div>

        <div class="flex flex-row items-center justify-between gap-2 sm:gap-4 sm:border-none">
          <Button
            class={displayFilter
              ? "text-xs btn bg-transparent btn-block rounded-[60px] py-2 text-success w-1/2 min-height-unset h-auto"
              : "text-xs btn bg-transparent btn-block rounded-[60px] py-2 text-success w-1/2 min-height-unset h-auto sm:hidden"}
            onClick={() => {
              open.value = true;
            }}
          >
            Filtrar
            <Icon id="FilterList" width={16} height={16} />
          </Button>
          {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
        </div>
      </div>
    </Drawer>
  );
}

export default SearchControls;
