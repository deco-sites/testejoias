import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface LinksTopo {
  label: string;
  href: string; 
  icon?: AvailableIcons; 
}

export default function LinksDoTopo(
  { content }: { content?: LinksTopo[] },
) {
  return (
    <>
      {content && content.length > 0 && (
        <div class="flex flex-row justify-end gap-6 h-6">
          {content.map((item) => (
            <a
              class="text-xs text-secondary-content flex items-center"
              href={item.href}
            >
                {item.icon && (
                    <Icon
                        id={item.icon}
                        width={17}
                        height={15}
                        class="mr-2"
                    />
                )}
                {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}