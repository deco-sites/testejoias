import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";

interface Props {
  loading: boolean;
  currency: string;
  total: number;
  items: AnalyticsItem[];
}

function CartButton({ loading, currency, total, items }: Props) {
  const { displayCart } = useUI();
  const totalItems = items.length;

  const onClick = () => {
    sendEvent({
      name: "view_cart",
      params: { currency, value: total, items },
    });
    displayCart.value = true;
  };

  return (
    <div
      onClick={onClick}
      class="indicator flex items-center px-4 border border-secondary border-radius-60px"
    >
      <Button
        class="p-1"
        aria-label="open cart"
        data-deco={displayCart.value && "open-cart"}
        loading={loading}
      >
        <Icon id="ShoppingCart" size={24} strokeWidth={2} />
      </Button>
      <span class="font-semibold fontsize-14px">
        {totalItems > 99 ? "99+" : totalItems}
      </span>
    </div>
  );
}

export default CartButton;
