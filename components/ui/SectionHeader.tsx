export interface Props {
  title?: string;
  fontSize?: "Small" | "Normal" | "Large";
  description?: string;
  alignment?: "center" | "left";
}

const fontSizeClasses = {
  "Small": "lg:text-2xl",
  "Normal": "lg:text-3xl",
  "Large": "lg:text-4xl",
};

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col relative gap-2 px-4 lg:px-0 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h2 class="text-[46px] font-playfair text-secondary font-bold">
                  {props.title}
                </h2>
              )}
            {props.description &&
              (
                <><h3 class="text-primary text-sm separador-primary pb-2">
                  {props.description}
                </h3><small class="absolute bg-neutral-content h-0.5 w-20 bottom-0 left-0 right-0 m-auto"></small></>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
