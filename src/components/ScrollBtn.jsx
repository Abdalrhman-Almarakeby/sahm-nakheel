import { useState, useEffect } from "react";
import UpArrow from "../assets/icons/up-arrow.svg";

export default function ScrollBtn() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    function handleScrollBtnVisibility() {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    }

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () =>
      window.removeEventListener("scroll", handleScrollBtnVisibility);
  });

  const btnStyle = {
    left: showBtn ? "auto" : -100,
    opacity: showBtn ? 1 : 0,
  };

  function handleBtnClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className="fixed z-40 transition duration-700 right-2 bottom-2 sm:right-6 sm:bottom-6 md:right-12 md:bottom-12"
      style={btnStyle}
    >
      <button
        onClick={handleBtnClick}
        className="relative rounded-full hover: before:bg-[#7fce7a40] before:w-[90%] before:h-[90%] before:absolute before:top-0 before:left-0 hover:before:w-[140%] hover:before:h-[140%] sm:hover:before:w-[180%] sm:hover:before:h-[180%] before:transition-all before:rounded-full hover:before:-top-[20%] hover:before:-left-[20%] sm:hover:before:-top-[40%] sm:hover:before:-left-[40%] before:-z-10"
      >
        <img src={UpArrow} alt="Up Arrow" className="w-11 sm:w-auto" />
      </button>
    </div>
  );
}
