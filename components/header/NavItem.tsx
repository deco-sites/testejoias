import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { headerHeight } from "./constants.ts";

function NavItem({ item }: { item: SiteNavigationElement }) {
  const { url, name, children } = item;
  const image = item?.image?.[0];

  return (
    <li
      class={`group flex items-center relative ${
        children && children.length > 0 ? "has-children" : ""
      }`}
    >
      <a href={url} class="py-6">
        <span class="text-sm text-secondary font-semibold">{name}</span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 w-screen"
            style={{ top: "0px", left: "0px", marginTop: headerHeight }}
          >
            <ul class="flex items-start justify-center gap-6">
              {children.map((node) => (
                <li class="p-6">
                  <a class="" href={node.url}>
                    <span class="text-sm text-secondary font-bold">
                      {node.name}
                    </span>
                  </a>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="" href={leaf.url}>
                          <span class="text-sm text-secondary">
                            {leaf.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            {image?.url && (
              <Image
                class=""
                src={image.url}
                alt={image.alternateName}
                width={538}
                height={420}
                loading="lazy"
              />
            )}
          </div>
        )}
    </li>
  );
}

export default NavItem;
