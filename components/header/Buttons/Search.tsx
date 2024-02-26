import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function SearchButton() {
  const { displaySearchDrawer, displaySearchPopup } = useUI();

  return (
    <>
      <Button
        class="w-auto hidden sm:flex items-center"
        aria-label="search icon button"
        onClick={() => {
          displaySearchPopup.value = !displaySearchPopup.value;
        }}
      >
        <Icon id="MagnifyingGlass" size={20} strokeWidth={0.1} />
        <span class="text-secondary font-semibold">Pesquisar</span>
      </Button>
    </>
  );
}
