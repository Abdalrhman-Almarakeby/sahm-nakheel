import { useSwiper } from "swiper/react";
import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";

export default function PlansNav() {
  const swiper = useSwiper();

  return (
    <div
      id="plans-nav"
      className="flex items-center justify-center gap-5 mt-5 ms:gap-7"
    >
      <button
        className="flex items-center justify-center w-6 h-6 rounded-full bg-lightGreen "
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <img src={prev} alt="Prevues Icon" />
      </button>

      {swiper.slides.map((slides, index) => (
        <span
          key={slides.swiperSlideIndex}
          onClick={() => {
            // FIXME: make the pagination
            if (window.innerWidth > 640) return;
            swiper.slideToLoop(slides.swiperSlideIndex);
          }}
          className={`w-2 h-2 rounded-full  ${
            index === 0 ? "bg-darkGreen" : "bg-[#13705426]"
          }`}
        ></span>
      ))}
      <button
        className="flex items-center justify-center w-6 h-6 rounded-full bg-lightGreen "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <img src={next} alt="Next Icon" />
      </button>
    </div>
  );
}
