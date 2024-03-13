import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";

export interface Props {
  alerts?: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id} class="w-full md:w-2/3">
      <div class="w-full">
        <Slider class="carousel carousel-center justify-center w-full">
          {alerts.map((alert, index) => (
            <Slider.Item index={index} class="carousel-item h-6">
              <span class="text-xs text-secondary-content flex justify-center items-center w-screen">
                {alert}
              </span>
            </Slider.Item>
          ))}
        </Slider>

        <SliderJS rootId={id} interval={interval && interval * 1e3} />
      </div>
    </div>
  );
}

export default Alert;
