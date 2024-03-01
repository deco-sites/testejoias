export type Item = {
  label: string;
  href: string;
  ocultarNoMobile?: boolean;
};

export default function ExtraLinks({ content }: { content?: Item[] }) {
  return (
    <>
      {content && content?.length > 0 && (
        <div class="flex flex-row gap-5 lg:gap-10">
          {content.map((item) => (
            item.ocultarNoMobile === true
              ?  
                <a class="hidden md:flex font-bold text-sm" href={item.href}>
                  {item.label}
                </a>
              : (
                <a class="font-bold text-sm" href={item.href}>
                  {item.label}
                </a>
              )
          ))}
        </div>
      )}
    </>
  );
}
