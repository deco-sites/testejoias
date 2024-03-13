import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface BlocoDeTexto {
    /** @title Título */
    label: string; 
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

export interface Contatos {
    /** @title Título */
    label: string;  
    imagem?: ImageWidget;
    telefone: string; 
    linkWhatsapp?: string;
    email?: string;

}; 

export interface Props {
    /** @title Bloco de texto */ 
    content: BlocoDeTexto[];
    /** @title Espaçamento do bloco de texto em desktop */
    /** @description Caso não seja selecionado, assumirá o espaçamento padrão.  */
    espacamentoDaLinha?:
    | "10"
    | "8"
    | "6"
    | "4"
    | "2"
    | "0"; 
    /** @title Espaçamento do bloco de texto em mobile */
    /** @description Caso não seja selecionado, assumirá o espaçamento padrão.  */
    espacamentoDaLinhaMobile?:
    | "10"
    | "8"
    | "6"
    | "4"
    | "2"
    | "0"; 
    /** @title Ocultar a coluna de contatos em mobile? */
    hideOnMobile?: boolean;
    /** @title Título coluna de contatos */
    tituloColContatos?: string;
    /** @title Descrição de contatos */
    descColContatos?: string;
    contatos: Contatos[];
}

export default function TituloETexto({ content,espacamentoDaLinha,espacamentoDaLinhaMobile, tituloColContatos, descColContatos, contatos,hideOnMobile }: Props) { 
    if (!content) return null;
 
    const espacamentoLinha = espacamentoDaLinha !== undefined ? espacamentoDaLinha : "4";
    const espacamentoLinhaMob = espacamentoDaLinhaMobile !== undefined ? espacamentoDaLinhaMobile : "4";
    const hideOnMob = hideOnMobile && hideOnMobile === true ? "hidden md:block" : "";
    return ( 
        <div className="container flex flex-wrap justify-between px-4 md:px-0">
            <div className="w-full md:w-2/3">
                {content.map((item) => ( 
                <div className={`py-${espacamentoLinhaMob} md:py-${espacamentoLinha}`}>
                    <item.tagHtmlDoTitulo className={
                    `font-playfair text-secondary font-bold 
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
            <div className={`w-full md:w-3/12 ${hideOnMob}`}>
                {tituloColContatos && (
                    <h2 class="font-playfair text-secondary font-bold text-[32px] leading-9 md:text-[46px] md:leading-[55px]">{tituloColContatos}</h2> 
                )}
                {descColContatos && (
                    <p>{descColContatos}</p> 
                )} 

                {contatos.map((itemCt) => ( 
                <div className="bg-secondary rounded-lg p-6 mb-6 mt-16"> 
                    {itemCt.imagem && (
                        <Image
                            src={itemCt.imagem} 
                            width={156} 
                            loading="lazy"
                            class="mx-auto mb-4 -mt-14"
                        />
                    )}
                    <h2 class="font-semibold text-center text-3xl text-secondary-content">{itemCt.label}</h2>
                    {itemCt.telefone && (
                        <a href={`tel:${itemCt.telefone}`} class="block text-center my-1 text-3xl text-secondary-content">{itemCt.telefone}</a> 
                    )}
                    <div className="flex justify-center"> 
                        {itemCt.linkWhatsapp && (
                            <a class="mx-1" target="_blank" href={`tel:${itemCt.linkWhatsapp}`}>
                                <Icon size={57} id="ContatoWhatsapp" />
                            </a> 
                        )}
                        {itemCt.email && (
                            <a class="mx-1" target="_blank" href={`mailto:${itemCt.email}`}>
                                <Icon size={57} id="ContatoEmail" />
                            </a> 
                        )}
                    </div>
                </div>
                ))}
            </div>
        </div> 
    );
}
