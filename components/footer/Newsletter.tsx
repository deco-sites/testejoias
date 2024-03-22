import { useSignal } from "@preact/signals";
import { invoke } from "$store/runtime.ts";
import type { JSX } from "preact";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  content: {
    title?: string; 
    form?: Form;
  };
  layout?: {
    tiled?: boolean;
  };
}

function Newsletter(
  { content, layout = {} }: Props,
) {
  const { tiled = false } = layout;
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await invoke.vtex.actions.newsletter.subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="flex flex-row flex-wrap rounded-xl -mt-14 mb-6 bg-[#2B3243] justify-center items-center">
      <div class="flex items-center pr-4">        
        <Icon sizes={105} id="NewsletterIc" />
        {content?.title && ( 
          <div
            class="descricao text-center md:text-left text-[22px] font-playfair"
            dangerouslySetInnerHTML={{ __html: content?.title }}
          />
        )} 
      </div>
      <div class="flex">
        <form
          class="form-control"
          onSubmit={handleSubmit}
        >
          <div class="flex flex-wrap gap-3">
            <div class="w-full md:w-72">
              <label>*Nome</label>
              <input
                name="name"
                required
                class="w-full md:w-72 input input-bordered bg-transparent border-white"
                placeholder={content?.form?.placeholder || ""}
              />
            </div>
            <div class="w-full md:w-72">
              <label>*E-mail</label>
              <input
                name="email"
                required
                class="w-full input input-bordered bg-transparent border-white"
                placeholder={content?.form?.placeholder || ""}
              />
            </div>
            <div class="w-full flex justify-end">
              <button
                type="submit"
                class="font-bold text-xs btn py-2 min-height-unset text-white h-auto color-white bg-success rounded-full disabled:loading"  
                disabled={loading}
              >
                {content?.form?.buttonText || "Inscrever"}
              </button>
            </div>
          </div>
        </form>
        {content?.form?.helpText && (
          <div
            class="text-sm"
            dangerouslySetInnerHTML={{ __html: content?.form?.helpText }}
          />
        )}
      </div>
    </div>
  );
}

export default Newsletter;
