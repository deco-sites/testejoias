import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export default function FooterItems(
  { sections, justify = false }: { sections: Section[]; justify: boolean },
) {
  return (
    <>
      {sections.length > 0 && (
        <>
          {/* Tablet and Desktop view */}
          <ul
            class={`w-full hidden md:flex flex-row gap-6 lg:gap-10 ${justify && "lg:justify-between"
              }`}
          >
            {sections.map((section) => (
              <li>
                <div class="flex flex-col gap-2">
                  <span class="font-bold text-[26px] font-playfair">
                    {section.label}
                  </span>
                  <ul class={`flex flex-col gap-2 flex-wrap text-sm`}>
                    {section.items?.map((item) => (
                      <li>
                        <a href={item.href} class="block mb-1 link link-hover">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <div class="selos-seguranca block w-full">
            <ul class="flex items-center gap-1 justify-center md:justify-end flex-wrap">
            <li>
                <a href="https://transparencyreport.google.com/safe-browsing/search?url=joiasvip.com.br&hl=pt_BR">
                <Icon id="Selos_Reclame-Aqui-Icon" size={70} strokeWidth={0.01} />
                </a>
              </li>
              <li>
                <a href="https://transparencyreport.google.com/safe-browsing/search?url=joiasvip.com.br&hl=pt_BR">
                <Icon id="GoogleSeguro" size={70} strokeWidth={0.01} />
                </a>
              </li>
              <li>
                <a href="https://transparencyreport.google.com/safe-browsing/search?url=joiasvip.com.br&hl=pt_BR">
                <Icon id="IconeGPTW" size={70} strokeWidth={0.01} />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile view */}
          <ul class="flex w-full pl-2 mt-8 w-full flex-col md:hidden gap-4">
            {sections.map((section) => (
              <li>
                <div class="collapse collapse-arrow ">
                  <input type="checkbox" class="min-h-[0]" />
                  <label
                    htmlFor={section.label}
                    class="collapse-title relative min-h-[0] !p-0 flex font-playfair text-center text-lg"
                  >
                    <span>{section.label}</span>
                  </label>
                  <div class="collapse-content">
                    <ul
                      class={`flex flex-col gap-1 pt-2`}
                    >
                      {section.items?.map((item) => (
                        <li>
                          <a
                            href={item.href}
                            class="block text-sm py-1 link link-hover"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
