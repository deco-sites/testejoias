export type linhaTable = {
  label: string;
  gema: string;
};

export interface Props {
  tituloColunaUm: string;
  tituloColunaDois: string;
  linhas: linhaTable[];
}

export default function TabelaDeGemas(
  { tituloColunaUm, tituloColunaDois, linhas }: Props,
) {
  return (
    <div class="w-[880px] max-w-full mx-auto my-8 px-4">
      <div class="w-full px-2 py-1 flex justify-between">
        <span class="text-xs md:text-sm text-primary font-bold">
          {tituloColunaUm}
        </span>
        <span class="text-xs md:text-sm text-primary font-bold">
          {tituloColunaDois}
        </span>
      </div>
      {linhas.map((linha, index) => (
        <div
          key={index}
          class={`${
            index % 2 === 0 ? "bg-secondary" : "bg-[#2B3243]"
          } w-full px-2 py-1 flex items-center justify-between`}
        >
          <span class="text-xs md:text-sm w-2/3 text-white">{linha.label}</span>
          <span class="text-xs md:text-sm text-right w-1/3 text-success underline">
            {linha.gema}
          </span>
        </div>
      ))}
    </div>
  );
}
