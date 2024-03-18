import BackToTop from "$store/components/footer/BackToTop.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import RegionSelector from "$store/components/footer/RegionSelector.tsx";
import Social from "$store/components/footer/Social.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx"; 

export type Item = {
  label: string;
  href: string;
  ocultarNoMobile?: boolean;
};

export type Section = {
  label: string;
  items: Item[];
};

export type plataformasLogo = {
  label?: string; 
  image: ImageWidget;
  alt?: string;
  href?: string; 
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter"
    | "Blog"
    | "YouTube";
  link: string;
}

export interface PaymentItem {
  label:
    | "Visa"
    | "Diners"
    | "Elo"
    | "Mastercard"
    | "Pix"
    | "Hipercard"
    | "Amex"
    | "Aura"
    | "Boleto"
    | "PagaLeve"
    | "PagarMe";
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5";
  hide?: {
    logo?: boolean;
    newsletter?: boolean;
    sectionLinks?: boolean;
    socialLinks?: boolean;
    paymentMethods?: boolean;
    mobileApps?: boolean;
    regionOptions?: boolean;
    extraLinks?: boolean;
    backToTheTop?: boolean;
  };
}

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };
  payments?: {
    title?: string;
    items: PaymentItem[];
  };
  mobileApps?: MobileApps;
  regionOptions?: RegionOptions;
  extraLinks?: Item[];
  backToTheTop?: {
    text?: string;
  };
  layout?: Layout;
  copyright?: string;
  plataformasLogo?: plataformasLogo[];
}

function Footer({
  logo,
  newsletter = {
    title: "Newsletter",
    description: "",
    form: { placeholder: "", buttonText: "", helpText: "" },
  },
  sections = [{
    "label": "Sobre",
    "items": [
      {
        "href": "/quem-somos",
        "label": "Quem somos",
      },
      {
        "href": "/termos-de-uso",
        "label": "Termos de uso",
      },
      {
        "href": "/trabalhe-conosco",
        "label": "Trabalhe conosco",
      },
    ],
  }, {
    "label": "Atendimento",
    "items": [
      {
        "href": "/centraldeatendimento",
        "label": "Central de atendimento",
      },
      {
        "href": "/whatsapp",
        "label": "Fale conosco pelo WhatsApp",
      },
      {
        "href": "/trocaedevolucao",
        "label": "Troca e devolução",
      },
    ],
  }],
  social = {
    title: "Redes sociais",
    items: [{ label: "Instagram", link: "/" }, { label: "Tiktok", link: "/" }],
  },
  payments = {
    title: "Formas de pagamento",
    items: [{ label: "Mastercard" }, { label: "Visa" }, { label: "Pix" }],
  },
  mobileApps = { apple: "/", android: "/" },
  regionOptions = { currency: [], language: [] },
  extraLinks = [],
  backToTheTop,
  layout = {
    backgroundColor: "Primary",
    variation: "Variation 1",
    hide: {
      logo: false,
      newsletter: false,
      sectionLinks: false,
      socialLinks: false,
      paymentMethods: false,
      mobileApps: false,
      regionOptions: false,
      extraLinks: false,
      backToTheTop: false,
    },
  },
  copyright,
  plataformasLogo,
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;
  const _newsletter = layout?.hide?.newsletter ? <></> : (
    <Newsletter
      content={newsletter}
      layout={{
        tiled: layout?.variation == "Variation 4" ||
          layout?.variation == "Variation 5",
      }}
    />
  );
  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
      justify={layout?.variation == "Variation 2" ||
        layout?.variation == "Variation 3"}
    />
  );
  const _social = layout?.hide?.socialLinks
    ? <></>
    : <Social content={social} vertical={layout?.variation == "Variation 3"} />;
  const _payments = layout?.hide?.paymentMethods
    ? <></>
    : <PaymentMethods content={payments} />;
  const _apps = layout?.hide?.mobileApps
    ? <></>
    : <MobileApps content={mobileApps} />;
  const _region = layout?.hide?.regionOptions
    ? <></>
    : <RegionSelector content={regionOptions} />;
  const _links = layout?.hide?.extraLinks
    ? <></>
    : <ExtraLinks content={extraLinks} />;

  return (
    <footer>
      <div class={`w-full py-8 ${ColorClasses(layout)}`}>
        <div class="lg:container mx-6 lg:mx-auto">
          {(!layout?.variation || layout?.variation == "Variation 1") && (
            <div class="flex flex-col gap-10">
              <div class="flex flex-col md:flex-row md:justify-between md:flex-wrap lg:flex-nowrap gap-8 lg:gap-12">
                {_logo}
                {_sectionLinks}
                {_newsletter}
              </div>
              <Divider />
              <div class="flex flex-col md:flex-row gap-10 md:gap-14 md:items-end">
                <div class="hidden md:block">
                  {_payments}
                </div>
                {_social}
                <div class="block md:hidden">
                  {_payments}
                </div>
                <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-end">
                  {_apps}
                  {_region}
                </div>
              </div>
              <Divider />
              <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
                {copyright}
                {_links}
              </div>
            </div>
          )}
          {layout?.variation == "Variation 2" && (
            <>
            {_newsletter}
            <div class="flex flex-col gap-10">
              <div class="flex flex-col md:flex-row justify-between">
                <div class="flex flex-col gap-6 w-full md:w-1/6">
                  {_logo}
                  <div class="hidden md:block">
                    {_payments}
                  </div>
                </div>
                <div class="flex mt-10 md:mt-0 flex-col items-center w-full md:w-9/12">
                  <div class="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-0 md:py-6">
                    {_links}
                    {_social}
                    <div class="block md:hidden">
                      {_payments}
                    </div>
                  </div>
                  {_sectionLinks}
                </div>
              </div>
            </div>
            </>
          )}
          {layout?.variation == "Variation 3" && (
            <div class="flex flex-col gap-10">
              {_logo}
              <div class="flex flex-col lg:flex-row gap-14">
                <div class="flex flex-col md:flex-row lg:flex-col md:justify-between lg:justify-normal gap-10 lg:w-2/5">
                  {_newsletter}
                  <div class="flex flex-col gap-10">
                    {_payments}
                    {_apps}
                  </div>
                </div>
                <div class="flex flex-col gap-10 lg:gap-20 lg:w-3/5 lg:items-end">
                  <div class="flex flex-col md:flex-row gap-10">
                    {_sectionLinks}
                    {_social}
                  </div>
                  {_region}
                </div>
              </div>
              <Divider />
              <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
                {copyright}
                {_links}
              </div>
            </div>
          )}
          {layout?.variation == "Variation 4" && (
            <div class="flex flex-col gap-10">
              {_newsletter}
              {layout?.hide?.newsletter ? <></> : <Divider />}
              <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-between">
                {_sectionLinks}
                <div class="flex flex-col md:flex-row lg:flex-col gap-10 lg:gap-10 lg:w-2/5 lg:pl-10">
                  <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
                    <div class="lg:flex-auto">
                      {_payments}
                    </div>
                    <div class="lg:flex-auto">
                      {_social}
                    </div>
                  </div>
                  <div class="flex flex-col gap-10 lg:gap-10">
                    {_region}
                    {_apps}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="flex flex-col md:flex-row md:justify-between gap-10 md:items-center">
                {_logo}
                {copyright}
              </div>
            </div>
          )}
          {layout?.variation == "Variation 5" && (
            <div class="flex flex-col gap-10">
              {_newsletter}
              {layout?.hide?.newsletter ? <></> : <Divider />}
              {_logo}
              <div class="flex flex-col md:flex-row gap-10 lg:gap-20 md:justify-between">
                {_sectionLinks}
                <div class="flex flex-col gap-10 md:w-2/5 lg:pl-10">
                  {_payments}
                  {_social}
                  {_apps}
                </div>
              </div>
              <Divider />
              <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center">
                {copyright}
                <div class="flex flex-col md:flex-row gap-10 md:items-center">
                  {_links}
                  {_region}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div class="container copyright py-8">
        <div class="flex flex-col md:flex-row md:justify-between gap-4 md:gap-10">
          <p class="w-full md:w-2/3 px-4 text-xs text-xs text-center md:text-left">
            {copyright}
          </p> 
          <div class="w-full md:w-1/3 flex items-center justify-center md:justify-end gap-6">
          {plataformasLogo !== undefined && plataformasLogo.map((plataforma) => (
            <a href={plataforma.href} target="_blank">
              <Image 
                src={plataforma?.image}
                alt={plataforma?.alt}
                width={77} 
                loading="lazy"
              /> 
            </a>
          ))} 
          </div>
        </div>
      </div>
      {layout?.hide?.backToTheTop
        ? <></>
        : <BackToTop content={backToTheTop?.text} />}
    </footer>
  );
}

export default Footer;
