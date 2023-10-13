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
      className="fixed bottom-2 right-2 z-40 transition duration-700 sm:bottom-6 sm:right-6 md:bottom-12 md:right-12"
      style={btnStyle}
    >
      <button
        onClick={handleBtnClick}
        className="hover: relative rounded-full before:absolute before:left-0 before:top-0 before:-z-10 before:h-[90%] before:w-[90%] before:rounded-full before:bg-[#7fce7a40] before:transition-all hover:before:-left-[20%] hover:before:-top-[20%] hover:before:h-[140%] hover:before:w-[140%] sm:hover:before:-left-[40%] sm:hover:before:-top-[40%] sm:hover:before:h-[180%] sm:hover:before:w-[180%]"
      >
        <img src={UpArrow} alt="Up Arrow" className="w-11 sm:w-auto" />
      </button>
    </div>
  );
}
