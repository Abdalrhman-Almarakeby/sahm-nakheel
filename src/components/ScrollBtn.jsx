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
      className="fixed bottom-2 right-2 z-40 transition duration-700 md:bottom-12 md:right-12 lg:bottom-6 lg:right-6"
      style={btnStyle}
    >
      <button
        onClick={handleBtnClick}
        className="relative rounded-full before:absolute before:left-0 before:top-0 before:-z-10 before:h-[90%] before:w-[90%] before:rounded-full before:bg-[#7fce7a40] before:transition-all lg:hover:before:-left-[40%] lg:hover:before:-top-[40%] lg:hover:before:h-[180%] lg:hover:before:w-[180%]"
      >
        <img src={UpArrow} alt="Up Arrow" className="w-11 lg:w-auto" />
      </button>
    </div>
  );
}
