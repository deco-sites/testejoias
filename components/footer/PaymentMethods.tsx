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
            <h3 class="font-playfair mt-4 md:mt-0 text-center md:text-left text-base">
              {content.title}
            </h3>
          )}
          <ul class="flex items-center gap-1 justify-center md:justify-start flex-wrap">
            {content.items.map((item) => {
              return (
                <li
                  class="mob-zoom--7"
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
