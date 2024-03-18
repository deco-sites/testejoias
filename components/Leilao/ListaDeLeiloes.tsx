import { ProductAuction } from "apps/linx/utils/types/auctionJSON.ts"; 
import type { ImageWidget } from "apps/admin/widgets.ts"; 
import { Picture, Source } from "apps/website/components/Picture.tsx"; 
import { useId } from "$store/sdk/useId.ts"; 
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";


export interface Props { 
    produtos: ProductAuction[] | null;
    topo:{        
        /** @title Pré título */
        preTitulo?: string; 
        /** @title Título */ 
        titulo: string; 
        /** @title Descrição */
        desc?: string; 
        /** @title Imagem de fundo em desktop */
        imagemDeFundo: ImageWidget;
        /** @title Imagem de fundo em mobile */
        imagemDeFundoMob: ImageWidget;
    }
    bannerPropaganda?: {
      ImagemDesktop?: ImageWidget;
      ImagemMobile?: ImageWidget;
      Alt?: string;
    };
}   

const snippet = (expiresAt: string, rootId: string) => {
    const expirationDate = new Date(expiresAt).getTime();
  
    const getDelta = () => {
      const delta = expirationDate - new Date().getTime();
  
      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };
  
    const setValue = (id: string, value: number) => {
      const elem = document.getElementById(id);
  
      if (!elem) return;
  
      elem.style.setProperty("--value", value.toString());
    };
  
    const start = () =>
      setInterval(() => {
        const { days, hours, minutes, seconds } = getDelta();
        const isExpired = days + hours + minutes + seconds < 0;
  
        if (isExpired) {
          const expired = document.getElementById(`${rootId}::expired`);
          const counter = document.getElementById(`${rootId}::counter`);
  
          expired && expired.classList.remove("hidden");
          counter && counter.classList.add("hidden");
        } else {
          setValue(`${rootId}::days`, days);
          setValue(`${rootId}::hours`, hours);
          setValue(`${rootId}::minutes`, minutes);
          setValue(`${rootId}::seconds`, seconds);
        }
      }, 1_000);
  
    document.readyState === "complete"
      ? start()
      : addEventListener("load", start);
  }; 
export default function ListaDeLeiloes({produtos,topo,bannerPropaganda}:Props,) {   

    const id = useId();
    interface TimeComponentProps {
      id: string; 
      time: string;
    }
  
    
  const TimeComponent: preact.FunctionalComponent<TimeComponentProps> = (
    { id, time },
  ) => (  
    <span class="countdown text-secondary text-[46px] font-bold block w-full">
    <span 
        id={`${id}::${time}`}
    />
    </span>  
  );

    return (
        <> 
        <div class="relative">
            <Picture preload>
                <Source
                src={topo.imagemDeFundoMob}
                width={360}
                height={300}
                media="(max-width: 767px)"
                />
                <Source
                src={topo.imagemDeFundo}
                width={1920}
                height={680}
                media="(min-width: 767px)"
                />
                <img class="w-full" src={topo.imagemDeFundo} alt={topo.titulo} />
            </Picture>

            <div class="container px-4 py-8 flex flex-wrap content-center w-full absolute top-0 left-0 right-0 m-auto h-full">
                <span class="bg-[#B994FE] text-white md:text-[36px] font-playfair rounded-md px-2 pb-1">{topo.preTitulo}</span>
                <h1 class="text-[46px] md:text-8xl mb-2 font-playfair font-semibold w-full text-base-100">
                {topo.titulo}
                </h1>
                <div class="md:max-w-[490px] text-sm md:text-lg font-medium w-full text-base-100">
                    {topo.desc} 
                </div>
            </div>
        </div>

        {bannerPropaganda && (
            <div class="container -mt-14 block relative px-4">
                <Picture>
                    <Source
                        media="(max-width: 768px)"
                        src={bannerPropaganda.ImagemMobile
                        ? bannerPropaganda.ImagemMobile
                        : ""}
                        width={400}
                    />
                    <Source
                        media="(min-width: 768px)"
                        src={bannerPropaganda.ImagemDesktop
                        ? bannerPropaganda.ImagemDesktop
                        : ""}
                        width={1360}
                    />
                    <img
                        src={bannerPropaganda.ImagemDesktop
                        ? bannerPropaganda.ImagemDesktop
                        : ""}
                        class="w-full md:w-auto h-auto mx-auto rounded-md" 
                        decoding="async"
                        loading="lazy"
                    />
                </Picture>
            </div>
        )}

        {produtos &&( 
            <div class="container px-4 sm:py-10">
                {produtos.length === 0 ? (
                    <h2 class="block text-secondary text-center text-2xl font-bold my-6">Estamos cadastrando um novo leilão. Em breve estará disponível.</h2>
                ) : (
                <div class="flex flex-row gap-20">
                    {/* <aside class="hidden sm:block w-min min-w-72">
                        <p>
                        <span class="text-secondary text-2xl font-playfair font-semibold">
                            Filtrar
                        </span>
                        </p> 
                    </aside> */}
                    {/* <div class="flex-grow">   */}
                    <div className="w-full">
                        {produtos.map((it, index) => (
                            <div class="card-leilao flex content-center items-center md:bg-white rounded-lg my-4 md:p-6"> 
                                <Picture preload class="w-[45%] md:w-80">
                                    <Source
                                    src={it.ProductImage} 
                                    width={175}
                                    height={175} 
                                    media="(max-width: 767px)"
                                    />
                                    <Source
                                    src={it.ProductImage} 
                                    width={320}
                                    height={320}
                                    media="(min-width: 767px)"
                                    />
                                    <img src={topo.imagemDeFundo} alt={topo.titulo} class="rounded-lg w-full"/>
                                </Picture> 
                                <div class="w-[55%] md:w-auto pl-4">
                                    <h2 class="font-bold text-sm leading-[14px] md:text-[22px] md:leading-6 mb-4">{it.Name}</h2>
                                    <div class="grid grid-row md:flex md:border-b border-primary border-solid pb-2 mb-2">
                                        <div class="flex mb-2 md:mb-0 items-center relative after:text-primary after:text-xl after:top-1.5 md:after:content-['|'] after:absolute after:right-0 pr-3 mr-2">
                                            <Icon size={25} id="TagPreco" />
                                            <div>
                                                <span class="block text-xs -mb-1">Valor de mercado</span>
                                                <strong class="text-base text-secondary">{it.MarketAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                            </div>
                                        </div>
                                        <div class="flex items-center"> 
                                            <Icon size={28} id="LancePequeno" />
                                            <div>
                                                <span class="block text-xs -mb-1">
                                                    Último lance
                                                </span>
                                                <strong class="text-base text-secondary"><span class="font-light">{Number(it.BidAmountMultiplier).toFixed(0)}x</span> </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hidden md:block">
                                        <span class="block text-xs md:text-sm text-secondary flex items-center mb-1"> 
                                            <Icon size={23} id="Clock" class="mr-1" />
                                            Falta apenas:
                                        </span> 
                                        
                                        <div id={`${index}${id}::counter`} class="flex w-full">
                                            <div class="relative after:-top-3.5 after:text-[46px] after:content-['|'] after:absolute after:right-0 pr-4 mr-2 text-secondary">
                                                <TimeComponent id={`${index}${id}`} time="days"/>
                                                <small class="text-xs font-bold block w-full">Dias</small>
                                            </div>
                                            <div class="relative after:-top-4 after:text-[46px] after:content-[':'] after:absolute after:right-0 pr-4 mr-2 text-secondary">
                                                <TimeComponent id={`${index}${id}`} time="hours"/>
                                                <small class="text-xs font-bold block w-full">Horas</small>
                                            </div>
                                            <div class="relative text-secondary">
                                                <TimeComponent id={`${index}${id}`} time="minutes"/> 
                                                <small class="text-xs font-bold block w-full">Minutos</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <script
                                    type="module"
                                    dangerouslySetInnerHTML={{
                                    __html: `(${snippet})("${it.ExecutionTo}", "${index}${id}");`,
                                    }}
                                /> 

                                <div class="w-96 overflow-hidden rounded-lg h-full hidden md:flex flex-wrap">
                                    <div class="w-full bg-secondary py-4 px-8">   
                                        <Icon size={28} id="LanceGrande" />
                                    </div> 
                                    <div class="w-full bg-[#E0E0E0] py-4 px-8">   
                                        <span class="block font-semibold text-secondary">Dê seu lance</span>
                                    </div> 
                                </div>
                            </div>  
                        ))} 
                    </div>  
                </div>
                )} 
            </div>
        )}









 



        </>
    );
}