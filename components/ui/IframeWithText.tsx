export interface Props {
    iframe: string;
    title: string;
    /** @format html */
    text?: string;
  }
  
  export default function IframeWithText({ iframe, title, text }: Props) {
    return (
      <div class="iframewithtext flex lg:mb-20"> 
        <div class="conteudo-text lg:w-2/5 bg-secondary lg:p-16 flex">
            <div class="text-white">
                <h4 class="font-bold text-[36px] font-playfair">{title}</h4>
                {text && (
                    <div
                    className="text-sm md:text-base mt-4"
                    dangerouslySetInnerHTML={{ __html: text }}
                    />
                )} 
            </div>            
        </div>
        <div class="iframe lg:w-3/5 bg-[#FFFFFF]">
            <iframe src={iframe} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>       
      </div>
    );  
  }
  
