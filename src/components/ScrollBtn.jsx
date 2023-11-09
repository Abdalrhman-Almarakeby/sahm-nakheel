import { useScrollBtn } from "../hooks/useScrollBtn";
import UpArrow from "../assets/icons/up-arrow.svg";

export default function ScrollBtn() {
  const { btnStyle, handleScrollToTop } = useScrollBtn();

  return (
    <div
      className="fixed bottom-2 right-2 z-40 transition duration-700 md:bottom-4 md:right-4 lg:bottom-4 lg:right-6"
      style={btnStyle}
    >
      <button
        onClick={handleScrollToTop}
        className="relative rounded-full lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:-z-10 lg:before:h-[90%] lg:before:w-[90%] lg:before:rounded-full lg:before:bg-[#7fce7a40] lg:before:transition-all lg:hover:before:-left-[30%] lg:hover:before:-top-[30%] lg:hover:before:h-[160%] lg:hover:before:w-[160%]"
      >
        <img
          src={UpArrow}
          alt="Up Arrow"
          className="w-8 md:w-10 lg:w-12  xl:w-auto"
        />
      </button>
    </div>
  );
}
