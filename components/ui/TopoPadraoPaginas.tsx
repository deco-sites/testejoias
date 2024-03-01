export interface Props {
  title: string;
  /** @format html */
  text?: string;
}

export default function TopoPadraoPaginas({ text, title }: Props) {
  return (
    <div class="w-[1020px] max-w-full mx-auto mt-6 mb-6 lg:mt-20 px-4 lg:px-0">
      <h1 class="font-playfair text-secondary text-center font-bold separador-secondary text-[32px] leading-9 md:text-[46px] md:leading-[55px] relative pb-4">
        {title}
        <small class="absolute bg-secondary h-0.5 w-20 bottom-0 right-0 left-0 mx-auto">
        </small>
      </h1>
      {text && (
        <div
          class="text-sm md:text-base text-center mt-4"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
}
