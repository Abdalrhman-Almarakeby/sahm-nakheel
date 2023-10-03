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
      className="fixed transition duration-700 right-12 bottom-12"
      style={btnStyle}
    >
      <button
        onClick={handleBtnClick}
        className="relative rounded-full hover: before:bg-[#7fce7a40] before:w-[90%] before:h-[90%] before:absolute before:top-0 before:left-0 hover:before:w-[180%] hover:before:h-[180%] before:transition-all before:rounded-full hover:before:-top-[40%] hover:before:-left-[40%] before:-z-10"
      >
        <img src={UpArrow} alt="Up Arrow" />
      </button>
    </div>
  );
}
