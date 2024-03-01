import { headerHeight } from "$store/components/header/constants.ts";
import Searchbar, {
  Props as SearchbarProps,
} from "$store/components/search/Searchbar.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export interface Props {
  searchbar?: SearchbarProps;
}

function SearchbarModal({ searchbar }: Props) {
  const { displaySearchPopup } = useUI();

  if (!searchbar) {
    return null;
  }

  return (
    <>
      <div class="hidden md:block">
        <Modal
          loading="lazy"
          open={displaySearchPopup.value}
          onClose={() => displaySearchPopup.value = false}
        >
          <div
            class="absolute top-0 bg-base-100 w-full"
            style={{ marginTop: headerHeight }}
          >
            <Searchbar {...searchbar} />
          </div>
        </Modal>
      </div>
      {
        /* <div class="block md:hidden">
        <Searchbar {...searchbar} />
      </div> */
      }
    </>
  );
}

export default SearchbarModal;
