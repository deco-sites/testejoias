import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";
import CartItem, { Item, Props as ItemProps } from "./CartItem.tsx";
import Coupon, { Props as CouponProps } from "./Coupon.tsx";
import FreeShippingProgressBar from "./FreeShippingProgressBar.tsx";

interface Props {
  items: Item[];
  loading: boolean;
  total: number;
  subtotal: number;
  discounts: number;
  locale: string;
  currency: string;
  coupon?: string;
  freeShippingTarget: number;
  checkoutHref: string;
  onAddCoupon?: CouponProps["onAddCoupon"];
  onUpdateQuantity: ItemProps["onUpdateQuantity"];
  itemToAnalyticsItem: ItemProps["itemToAnalyticsItem"];
}

function Cart({
  items,
  total,
  subtotal,
  locale,
  coupon,
  loading,
  currency,
  discounts,
  freeShippingTarget,
  checkoutHref,
  itemToAnalyticsItem,
  onUpdateQuantity,
  onAddCoupon,
}: Props) {
  const { displayCart } = useUI();
  const isEmtpy = items.length === 0;

  return (
    <div
      class="flex flex-col justify-center items-center overflow-hidden"
      style={{ minWidth: "calc(min(100vw, 425px))", maxWidth: "425px" }}
    >
      {isEmtpy
        ? (
          <div class="flex flex-col gap-6">
            <span class="font-medium text-2xl">Sua sacola está vazia</span>
            <Button
              class="btn-outline"
              onClick={() => {
                displayCart.value = false;
              }}
            >
              Escolher produtos
            </Button>
          </div>
        )
        : (
          <>
            {/* Cart Items */}
            <ul
              role="list"
              class="mt-6 px-2 flex-grow overflow-y-auto flex flex-col gap-6 w-full"
            >
              {items.map((item, index) => (
                <li key={index}>
                  <CartItem
                    item={item}
                    index={index}
                    locale={locale}
                    currency={currency}
                    onUpdateQuantity={onUpdateQuantity}
                    itemToAnalyticsItem={itemToAnalyticsItem}
                  />
                </li>
              ))}
            </ul>

            {/* Cart Footer */}
            <footer class="w-full pb-6 pt-4 bg-secondary text-secondary-content">
              {/* Free Shipping Bar */}
              <div class="px-2 py-4 w-full">
                <FreeShippingProgressBar
                  total={total}
                  locale={locale}
                  currency={currency}
                  target={5000}
                />
              </div>

              {/* Subtotal */}
              <div class="px-9 py-2 flex flex-col">
                {discounts > 0 && (
                  <div class="flex justify-between items-center px-4 hidden">
                    <span class="text-sm">Descontos</span>
                    <span class="text-sm">
                      {formatPrice(discounts, currency, locale)}
                    </span>
                  </div>
                )}
                <div class="w-full flex justify-between text-sm">
                  <span class="font-semibold fontsize-14px">Subtotal</span>
                  <span class="font-semibold fontsize-14px">
                    {formatPrice(subtotal, currency, locale)}
                  </span>
                </div>
                <div className="hidden cupom">
                  {onAddCoupon && (
                    <Coupon onAddCoupon={onAddCoupon} coupon={coupon} />
                  )}
                </div>
              </div>

              {/* Total */}
              <div class="px-9 flex flex-col justify-end items-end gap-2">
                <div class="py-4 flex justify-between items-center w-full">
                  <span class="font-semibold fontsize-14px">Total</span>
                  <span class="font-semibold fontsize-14px">
                    {formatPrice(total, currency, locale)}
                  </span>
                </div>
              </div>

              <div class="px-9">
                <a class="inline-block w-full" href={checkoutHref}>
                  <Button
                    data-deco="buy-button"
                    class="btn btn-block border-radius-60px py-2 min-height-unset h-auto color-white"
                    disabled={loading || isEmtpy}
                    onClick={() => {
                      sendEvent({
                        name: "begin_checkout",
                        params: {
                          coupon,
                          currency,
                          value: total,
                          items: items
                            .map((_, index) => itemToAnalyticsItem(index))
                            .filter((x): x is AnalyticsItem => Boolean(x)),
                        },
                      });
                    }}
                  >
                    FINALIZAR COMPRA
                  </Button>
                </a>
                <div class="btn bg-transparent btn-block border-radius-60px mt-2 py-2 min-height-unset h-auto color-white">
                  CONTINUAR COMPRANDO
                </div>
              </div>
            </footer>
          </>
        )}
    </div>
  );
}

export default Cart;
