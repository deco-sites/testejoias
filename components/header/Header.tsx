import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import LinksDoTopo from "$store/components/header/LinksDoTopo.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface Buttons {
  hideSearchButton?: boolean;
  hideAccountButton?: boolean;
  hideWishlistButton?: boolean;
  hideCartButton?: boolean;
}

export interface LinksTopo {
  label: string;
  href: string;
  icon?: AvailableIcons;
}

export interface Props {
  alerts?: string[];

  LinksTopo: LinksTopo[];

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

  /** @title Logo */
  logo?: Logo;

  logoPosition?: "left" | "center";

  buttons?: Buttons;

  linkWhats: string; 
}

function Header({
  alerts,
  LinksTopo,
  searchbar,
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Feminino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Masculino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sale",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Linktree",
      url: "/",
    },
  ],
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 100,
    height: 16,
    alt: "Logo",
  },
  logoPosition = "center",
  buttons,
  linkWhats = "https://web.whatsapp.com/send?phone=5541988161686&text=Ol%C3%A1+Joias+Vip!",
}: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <header style={{ height: headerHeight }}>
        <Drawers
          menu={{ items }}
          searchbar={searchbar}
          platform={platform}
        >
          <div class="fixed w-full z-50">
            <div class="bg-secondary">
              <div class="container flex gap-6">
                {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
                <div class="hidden md:block w-1/3">
                  <LinksDoTopo
                    content={LinksTopo}
                  />
                </div>
              </div>
            </div>
            <Navbar
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
              logoPosition={logoPosition}
              buttons={buttons} 
            />
          </div>
        </Drawers>
        <div class="whats-flutuante fixed bottom-6 right-6 z-20">
          <a href={linkWhats} target="blank">
            <Icon width={72} height={72} id="WhatsappVerde" />
          </a>
        </div>
      </header> 
    </> 
  );
}

export default Header;
