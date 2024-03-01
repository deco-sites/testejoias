import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useCallback, useState } from "preact/hooks";

export interface Item {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  quantity: number;
  price: {
    sale: number;
    list: number;
  };
}

export interface Props {
  item: Item;
  index: number;

  locale: string;
  currency: string;

  onUpdateQuantity: (quantity: number, index: number) => Promise<void>;
  itemToAnalyticsItem: (index: number) => AnalyticsItem | null | undefined;
}

function CartItem(
  {
    item,
    index,
    locale,
    currency,
    onUpdateQuantity,
    itemToAnalyticsItem,
  }: Props,
) {
  const { image, name, price: { sale, list }, quantity } = item;
  const isGift = sale < 0.01;
  const [loading, setLoading] = useState(false);

  const withLoading = useCallback(
    <A,>(cb: (args: A) => Promise<void>) => async (e: A) => {
      try {
        setLoading(true);
        await cb(e);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <div
      class="grid grid-rows-1 gap-3 border-b border-colid border-primary py-4"
      style={{
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Image
        {...image}
        src={image.src.replace("55-55", "255-255")}
        style={{ aspectRatio: "176 / 176" }}
        width={176}
        height={176}
        class="h-full object-contain"
      />

      <div class="flex flex-col gap-1">
        <span class="text-sm">{name}</span>
        <div class="gap-2">
          <span class="block line-through text-xs">
            {formatPrice(list, currency, locale)}
          </span>
          <span class="block font-bold fontsize-22px text-secondary">
            {isGift ? "Grátis" : formatPrice(sale, currency, locale)}
          </span>
        </div>
        <div class="grid gap-3 grid-cols-2 justify-between items-center">
          <div class="flex flex-wrap justify-center">
            <small class="text-xs block">Quantidade</small>
            <QuantitySelector
              disabled={loading || isGift}
              quantity={quantity}
              onChange={withLoading(async (quantity) => {
                const analyticsItem = itemToAnalyticsItem(index);
                const diff = quantity - item.quantity;

                await onUpdateQuantity(quantity, index);

                if (analyticsItem) {
                  sendEvent({
                    name: diff < 0 ? "remove_from_cart" : "add_to_cart",
                    params: {
                      items: [{ ...analyticsItem, quantity: Math.abs(diff) }],
                    },
                  });
                }
              })}
            />
          </div>
          <div></div>
        </div>
        <Button
          disabled={loading || isGift}
          loading={loading}
          class="w-full mt-2 excluir-carrinho p-1 rounded-md btn-outline btn-error flex items-center justify-center border border-solid text-xs"
          onClick={withLoading(async () => {
            const analyticsItem = itemToAnalyticsItem(index);

            await onUpdateQuantity(0, index);

            analyticsItem && sendEvent({
              name: "remove_from_cart",
              params: { items: [analyticsItem] },
            });
          })}
        >
          <Icon id="ExcluirCarrinho" size={14} /> Excluir
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
