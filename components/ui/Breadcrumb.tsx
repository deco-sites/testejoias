import type { BreadcrumbList } from "apps/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <div class="breadcrumbs">
      <ul>
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }) => (
            <li key={item}>
              <a href={item} className="text-sm capitalize">
                {name ? name.toLowerCase() : ""}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
