import Avatar from "$store/components/ui/Avatar.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";
import { parseRange } from "apps/commerce/utils/filters.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem(
  { url, selected, label, quantity }: FilterToggleValue,
) {
  return (
    <a
      href={url}
      rel="nofollow"
      class="flex items-center justify-between w-full"
    >
      <span class="text-white font-semibold text-sm">
        {label.split("/").pop()}
      </span>
      {quantity > 0 && (
        <span class="hidden text-sm text-base-300">({quantity})</span>
      )}
      <div aria-checked={selected} class="checkbox border-white w-5 h-5 mr-2" />
    </a>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  return (
    <ul class="flex flex-wrap gap-2 max-h-[156px] overflow-y-auto">
      {values.map((item) => {
        const { url, selected, value, quantity } = item;

        if (key === "cor" || key === "tamanho") {
          return (
            <a href={url} rel="nofollow">
              <Avatar
                content={value}
                variant={selected ? "active" : "default"}
              />
            </a>
          );
        }

        if (key === "price") {
          const range = parseRange(item.value);

          return range && (
            <ValueItem
              {...item}
              label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
            />
          );
        }

        return <ValueItem {...item} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6 py-4">
      {filters
        .filter(isToggle)
        .map((filter) => (
          <li class="flex flex-col gap-4 bg-secondary texto-content-secondary p-4 rounded-md">
            <span class="text-white text-[22px] font-playfair">
              {filter.label}
            </span>
            <FilterValues {...filter} />
          </li>
        ))}
    </ul>
  );
}

export default Filters;
