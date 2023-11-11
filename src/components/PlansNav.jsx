import { useSwiper } from "swiper/react";
import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";

export default function PlansNav() {
  const swiper = useSwiper();

  return (
    <div
      id="plans-nav"
      className="mt-5 flex items-center justify-center gap-5 ms:gap-7"
    >
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full bg-lightGreen"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <img src={prev} alt="Prevues Icon" />
      </button>

      {swiper.slides.map((slides, index) => (
        <span
          key={slides.swiperSlideIndex}
          data={slides.swiperSlideIndex}
          onClick={() => {
            swiper.slideToLoop(index);
          }}
          className="p h-2 w-2 rounded-full bg-[#13705426]"
        ></span>
      ))}
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full bg-lightGreen"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <img src={next} alt="Next Icon" />
      </button>
    </div>
  );
}
