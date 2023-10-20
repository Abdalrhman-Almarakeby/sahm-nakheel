import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";
import { useSwiper } from "swiper/react";

export default function PlansNavBtn({ direction }) {
  const isNext = direction === "next";
  const swiper = useSwiper();
  return (
    <button
      className="flex items-center justify-center w-6 h-6 rounded-full bg-lightGreen "
      onClick={() => {
        isNext ? swiper.slideNext() : swiper.slidePrev();
      }}
    >
      <img
        src={isNext ? next : prev}
        alt={`${isNext ? "Next" : "Prevues"}  Icon`}
      />
    </button>
  );
}
