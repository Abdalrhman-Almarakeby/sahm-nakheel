import { useSwiper } from "swiper/react";
import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";
import { useState } from "react";

export default function PlansNav() {
  const swiper = useSwiper();
  // swiper.once("loopFix", () => {
  //   document.querySelectorAll(".p").forEach((el) => {
  //     el.classList.remove("bg-darkGreen");
  //     if (el.getAttribute("data") == swiper.activeIndex)
  //       el.classList.add("bg-darkGreen");
  //   });
  // });

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
          onClick={(e) => {
            // FIXME: make the pagination
            // if (window.innerWidth > 640) return;
            // document.querySelectorAll(".p").forEach((e) => {
            //   e.classList.remove("bg-darkGreen");
            //   if (e.getAttribute("data") == swiper.realIndex)
            //     e.classList.add("bg-darkGreen");
            // });

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
