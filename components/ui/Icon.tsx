import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ArrowsPointingOut"
  | "BeneficiosFrete"
  | "BeneficiosParcelamento"
  | "BeneficiosPrimeiraCompra"
  | "BeneficiosTroca"
  | "Bars3"
  | "Blog"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "Clock"
  | "ContatoEmail"
  | "ContatoWhatsapp"
  | "CreditCard"
  | "Deco"
  | "Discord"
  | "Discount"
  | "ExcluirCarrinho"
  | "Facebook"
  | "FilterList"
  | "Heart"
  | "Instagram"
  | "LancePequeno"
  | "LanceGrande"
  | "Linkedin"
  | "Minus"
  | "MapPin"
  | "MagnifyingGlass"
  | "Message"
  | "Phone"
  | "Plus"
  | "QuestionMarkCircle"
  | "Return"
  | "Ruler"
  | "SetaMenu"
  | "ShoppingCart"
  | "Star"
  | "TagPreco"
  | "Tiktok"
  | "TopMinhaConta"
  | "TopListaDeDesejo"
  | "TopCentralDeAjuda"
  | "Trash"
  | "Truck"
  | "Twitter"
  | "User"
  | "WhatsApp"
  | "XMark"
  | "YouTube"
  | "Zoom"
  | "Alert"
  | "AlertInfo"
  | "AlertSuccess"
  | "AlertWarning"
  | "AlertError"
  | "share"
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
  | "Valores"
  | "Visao"
  | "Missao"
  | "Posvenda"
  | "Pedido"
  | "Qualidade"
  | "Seguranca"
  | "PagarMe";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
