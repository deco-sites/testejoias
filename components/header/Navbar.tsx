import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import CartButtonNuvemshop from "$store/islands/Header/Cart/nuvemshop.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo } from "$store/components/header/Header.tsx";

function Navbar({ items, searchbar, logo, buttons, logoPosition = "left" }: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  logo?: Logo;
  buttons?: Buttons;
  logoPosition?: "left" | "center";
}) {
  const platform = usePlatform();
  const primeiraMetadeMenu = items.slice(0, Math.ceil(items.length / 2));
  const segundaMetadeMenu = items.slice(Math.ceil(items.length / 2));

  return (
    <>
      {
        /* {!buttons?.hideAccountButton && (
        <a
          class="flex items-center text-xs font-thin"
          href="/account"
          aria-label="Account"
        >
          <div class="flex btn btn-circle btn-sm btn-ghost gap-1">
            <Icon id="User" size={20} strokeWidth={0.4} />
          </div>
          ACCOUNT
        </a>
      )}
      {!buttons?.hideWishlistButton && (
        <a
          class="flex items-center text-xs font-thin"
          href="/wishlist"
          aria-label="Wishlist"
        >
          <button
            class="flex btn btn-circle btn-sm btn-ghost gap-1"
            aria-label="Wishlist"
          >
            <Icon id="Heart" size={24} strokeWidth={0.4} />
          </button>
          WISHLIST
        </a>
      )} */
      }

      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden bg-[#FFFFFF] w-full px-4 gap-2"
      >
        <div class="w-full flex flex-wrap justify-between items-center">
          <MenuButton />
          {logo && (
            <a
              href="/"
              class="flex-grow inline-flex items-center justify-center"
              style={{ minHeight: navbarHeight }}
              aria-label="Store logo"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 130}
                height={logo.height || 41}
              />
            </a>
          )}

          <div class="flex justify-end gap-1">
            {platform === "vtex" && <CartButtonVTEX />}
            {platform === "vnda" && <CartButtonVDNA />}
            {platform === "wake" && <CartButtonWake />}
            {platform === "linx" && <CartButtonLinx />}
            {platform === "shopify" && <CartButtonShopify />}
            {platform === "nuvemshop" && <CartButtonNuvemshop />}
          </div>
        </div>
        <div class="w-full">
          <Searchbar searchbar={searchbar} />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:block w-full bg-white">
        <div class="flex container justify-between items-center">
          <div class="menupricipal flex justify-end items-center">
            <ul
              class={`flex lg:gap-8 2xl:gap-x-10 col-span-1 ${
                logoPosition === "left" ? "justify-center" : "justify-start"
              }`}
            >
              {primeiraMetadeMenu.map((item) => <NavItem item={item} />)}
            </ul>

            {logo && (
              <a
                href="/"
                aria-label="Store logo"
                class="block mx-10 logo-header"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 205}
                  height={logo.height || 64}
                />
              </a>
            )}

            <ul
              class={`flex lg:gap-8 2xl:gap-x-10 col-span-1 ${
                logoPosition === "left" ? "justify-center" : "justify-start"
              }`}
            >
              {segundaMetadeMenu.map((item) => <NavItem item={item} />)}
            </ul>
          </div>

          <div class="flex-none flex items-center justify-end gap-4 col-span-1">
            {!buttons?.hideSearchButton && (
              <div class="flex items-center text-xs font-thin gap-1">
                <SearchButton />
              </div>
            )}

            <Searchbar searchbar={searchbar} />

            {!buttons?.hideCartButton && (
              <div class="flex items-center text-xs font-thin">
                {platform === "vtex" && <CartButtonVTEX />}
                {platform === "vnda" && <CartButtonVDNA />}
                {platform === "wake" && <CartButtonWake />}
                {platform === "linx" && <CartButtonLinx />}
                {platform === "shopify" && <CartButtonShopify />}
                {platform === "nuvemshop" && <CartButtonNuvemshop />}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
