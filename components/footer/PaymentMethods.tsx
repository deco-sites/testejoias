import Icon from "$store/components/ui/Icon.tsx";

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

export default function PaymentMethods(
  { content }: { content?: { title?: string; items?: PaymentItem[] } },
) {
  return (
    <>
      {content && content.items && content.items.length > 0 && (
        <div class="flex flex-col gap-4">
          {content.title && (
            <h3 class="font-playfair fontsize-16px">{content.title}</h3>
          )}
          <ul class="flex items-center gap-1 flex-wrap">
            {content.items.map((item) => {
              return (
                <li 
                  title={item.label}
                >
                  <Icon
                    width={60}
                    height={40}
                    strokeWidth={1}
                    id={item.label}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
