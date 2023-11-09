import { useState, useEffect } from "react";

export function useScrollBtn() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    function handleScrollBtnVisibility() {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    }

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () =>
      window.removeEventListener("scroll", handleScrollBtnVisibility);
  }, []);

  const btnStyle = {
    left: showBtn ? "auto" : -100,
    opacity: showBtn ? 1 : 0,
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { btnStyle, handleScrollToTop };
}
