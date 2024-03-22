export type BotaoTopoPadrao = {
  label: string;
  href: string;
  abrirEmNovaAba?: boolean;
  corDoBotao?:
    | "Success"
    | "Transparent Success";
  tamanhoFonte?:
    | "12px"
    | "14px";
};
export default function BtnsTopoPadrao(
  { content }: { content?: BotaoTopoPadrao[] },
) {
  return (
    <>
      {content && content.length > 0 && (
        <div class="flex flex-row justify-center mt-6 gap-3">
          {content.map((item) => ( 
            <a
              class={`font-bold text-sm 
              ${getTamanhoFonteClass(item.tamanhoFonte)}
              ${getCorDoBotaoClass(item.corDoBotao)}
              `}
              href={item.href}
              target={item.abrirEmNovaAba ? "_blank" : ""}
              rel={item.abrirEmNovaAba ? "noopener noreferrer" : ""}
            > 
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function getTamanhoFonteClass(
  tamanhoFonte?: BotaoTopoPadrao["tamanhoFonte"],
): string {
  switch (tamanhoFonte) {
    case "12px":
      return "text-xs";
    case "14px":
      return "text-sm";
    default:
      return "text-xs";
  }
}
function getCorDoBotaoClass(
  corDoBotao?: BotaoTopoPadrao["corDoBotao"],
): string {
  switch (corDoBotao) {
    case "Success":
      return "btn py-2 min-height-unset text-white h-auto color-white bg-success rounded-full  uppercase";
    case "Transparent Success":
      return "btn py-2 min-height-unset h-auto rounded-full  uppercase color-[#00c9a2] btn-outline";
    default:
      return "btn py-2 min-height-unset text-white h-auto color-white bg-success rounded-full  uppercase";
  }
}
