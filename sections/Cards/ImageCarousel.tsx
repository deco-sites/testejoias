import ImageCardsCarousel, {
    Props as CarouselProps,
  } from "$store/components/cards/ImageCarousel.tsx";
  
  type Props = {
    carousel?: CarouselProps;
  }; 
  
  export default function Section({ carousel }: Props) {
    return <ImageCardsCarousel {...carousel} />;
  }
  