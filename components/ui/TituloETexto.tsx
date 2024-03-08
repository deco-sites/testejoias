export interface ColunaTextos {
  /** @title Título */
  label: string;
  centralizarTitulo?: boolean;
  tagHtmlDoTitulo:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"; 
  /** @description Caso não seja selecionado, assumirá o tamanho padrão.  */
  tamanhoFonteDesktop?:
    | "38px"
    | "36px"
    | "32px"
    | "22px"; 
  /** @description Caso não seja selecionado, assumirá o tamanho padrão.  */
  tamanhoFonteMobile?:
    | "38px"
    | "36px"
    | "32px"
    | "22px"; 
  /** @format html */
  text?: string;
}; 

export interface Props {
  /** @title Colunas de textos */
  /** @description Este campo representa uma linha. O layout será adaptado conforme a quantidade de colunas de textos */
  content: ColunaTextos[];
  /** @title Espaçamento da linha em desktop */
  /** @description Caso não seja selecionado, assumirá o espaçamento padrão.  */
  espacamentoDaLinha?:
  | "10"
  | "8"
  | "6"
  | "4"
  | "2"
  | "0"; 
  /** @title Espaçamento da linha em mobile */
  /** @description Caso não seja selecionado, assumirá o espaçamento padrão.  */
  espacamentoDaLinhaMobile?:
  | "10"
  | "8"
  | "6"
  | "4"
  | "2"
  | "0"; 
}

export default function TituloETexto({ content,espacamentoDaLinha,espacamentoDaLinhaMobile }: Props) { 
  if (!content) return null;

  // Calcula o numero de colunas
  const quantidadeItens = content.length;
  const espacamentoLinha = espacamentoDaLinha !== undefined ? espacamentoDaLinha : "4";
  const espacamentoLinhaMob = espacamentoDaLinhaMobile !== undefined ? espacamentoDaLinhaMobile : "4";
  return (
    <>
    <div className={`container px-4 md:px-0 md:py-${espacamentoLinha} md:grid grid-cols-${quantidadeItens} gap-8`}>
      {content.map((item, index) => ( 
        <div className={`py-${espacamentoLinhaMob} md:py-0`}>
          <item.tagHtmlDoTitulo className={
            `font-playfair text-secondary font-bold
            ${item.centralizarTitulo === true ? "text-center" : ""} 
            ${item.tamanhoFonteMobile ? `text-[${item.tamanhoFonteMobile}]` : "text-[32px] leading-9"}
            ${item.tamanhoFonteDesktop ? `md:text-[${item.tamanhoFonteDesktop}]` : "md:text-[46px] md:leading-[55px]"}
            `
          }>
            {item.label}
          </item.tagHtmlDoTitulo>
          {item.text && (
            <div
              className="text-sm md:text-base mt-4"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          )} 
        </div>
      ))}
    </div>
    </>
  );
}
