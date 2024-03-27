import Icon from "$store/components/ui/Icon.tsx";


export type Tabela1 = {
    aro: string;
    diametro: string;
    width: string;
};

export type Tabela2 = {
    aro: string;
    diametro: string;
    width: string;
};

export interface Props {
    tabela1?: Tabela1[];
    tabela2?: Tabela2[];
    /** @format html */
    text?: string;
}


let rangeValue = 50;


function GuiaMedidas(
    {
        tabela1,
        tabela2,
        text
    }: Props,
) {


    return (
        <div class="container lg:pb-28 flex justify-between">

            <div class="tabela">
                <div class="relative">
                    <div class="table">
                        <Icon id="QuadroMedidas" class="bg-[#FFFFFF]" width={536} height={536} />
                    </div>
                    <div class="medida absolute top-0 bottom-0 left-0 right-0 m-auto w-10 h-10 rounded-full bg-[#2B3243]"></div>
                </div> 
            </div>

            <div class="informacoes lg:w-[520px]">

                <div class="flex">

                    <div class="content">

                        <div class="topo flex pb-2">
                            <div class="aro w-28">
                                <b>Aro</b>
                            </div>
                            <div class="diametro w-32">
                                <b>Diâmetro</b>
                            </div>
                        </div>

                        <div class="conteudo">
                            {tabela1 && tabela1.length > 0 && (
                                tabela1.map((item) => (
                                    <div class="flex">
                                        <div class="aro w-28 border-solid border-base-300 lg:border-t py-1 px-1">
                                            <span>{item.aro}</span>
                                        </div>
                                        <div class="diametro w-32 border-solid border-base-300 lg:border-t py-1 lg:border-r">
                                            <span>{item.diametro}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div class="content">

                        <div class="topo flex pb-2">
                            <div class="aro w-28 px-1 pl-4 ">
                                <b>Aro</b>
                            </div>
                            <div class="diametro w-32">
                                <b>Diâmetro</b> 
                            </div>
                        </div>

                        <div class="conteudo">
                            {tabela2 && tabela2.length > 0 && (
                                tabela2.map((item) => (
                                    <div class="flex">
                                        <div class="aro w-28 border-solid border-base-300 lg:border-t py-1 px-1 pl-4 ">
                                            <span>{item.aro}</span>
                                        </div>
                                        <div class="diametro w-32 border-solid border-base-300 lg:border-t py-1">
                                            <span>{item.diametro}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                </div>

                <div class="my-4">
                    <h4 class="text-[26px] text-secondary font-semibold">Informações Adicionais</h4>
                    {text && (
                        <div
                            className="text-sm md:text-base mt-4"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                </div> 

            </div>

        </div>
    );
};

export default GuiaMedidas;
