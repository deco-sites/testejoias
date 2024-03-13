import Card, { Props as CardProps } from "../../components/cards/Image.tsx";
import Carousel, { Props as CarouselProps } from "../layout/Carousel.tsx";

export interface Props {
  placeholderItems?: number;
  items?: CardProps[];
  slider?: CarouselProps;
  /** @description Usado para estilização. Não preencher caso não seja necessário. */
  classeCss?: string;
}

export default function Section({ placeholderItems, items, slider, classeCss}: Props) {
  const ITEMS: CardProps[] = new Array(placeholderItems || 10).fill({});
  const allItems = !items || items?.length === 0 ? ITEMS : items;

  return (
    <div class={`py-6 ${classeCss ? classeCss : ""}`}>
      <Carousel
        layout={{ itemWidth: 200 }}
        {...slider}
        children={allItems.map((item) => <Card {...item} />)}
      />
    </div>
  );
}
