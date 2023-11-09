import { useState } from "react";
import palmTreesImgMobile from "../assets/images/footer-palm-trees-m.svg";
import palmTreesImgDesktop from "../assets/images/footer-palm-trees-d.svg";
import logo from "../assets/footer-logo.svg";
import appStore from "../assets/images/app-store.svg";
import googlePlay from "../assets/images/google-play.svg";
import facebook from "../assets/icons/facebook.svg";
import x from "../assets/icons/x.svg";
import insta from "../assets/icons/insta.svg";
import youtube from "../assets/icons/youtube.svg";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");

  function handelEmailInputChange(e) {
    setEmailInput(e.target.value);
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="break-container relative z-20 pt-16">
      <img
        src={palmTreesImgMobile}
        alt="Palm tree art"
        className="w-full md:hidden"
      />
      <img
        src={palmTreesImgDesktop}
        alt="Palm tree art"
        className="hidden w-full md:block"
      />
      <div className="rounded-t-3xl bg-darkBlue">
        <div className="container flex flex-col gap-4 rounded-t-5 p-5 text-white ms:gap-5 ms:p-8 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <a href="#home">
                <img src={logo} alt="Gray Sahm Nakheel logo" />
              </a>
              <p className="max-w-[50ch] text-xs font-light lg:max-w-[60ch] lg:text-sm xl:text-base">
                An investment project by Palm Oases Agricultural Investment
                designed for all types of investors. starting as low as 8000
                EGP. We offer a pioneering solution that is competitive to other
                conventional models with a very flexible, stable, and rewarding
                options for everyone.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold sm:max-w-[35ch] md:text-lg md:font-light lg:text-xl">
                Join our mailing list and get the latest ideas and news from
                <span className="text-lightGreen"> Sahm Nakheel</span>
              </p>
              <form className="flex items-center gap-3 ms:gap-4">
                <input
                  type="email"
                  className="max-w-[125px] flex-shrink rounded-full border-none px-3 py-1 text-2xs text-darkGray placeholder:text-darkGray focus:outline-lightGreen ms:max-w-none ms:flex-shrink-0 ms:px-4 ms:text-xs sm:px-5 sm:py-1.5 md:text-sm lg:text-base xl:text-lg"
                  placeholder="Email"
                  value={emailInput}
                  onChange={handelEmailInputChange}
                />
                <button
                  type="submit"
                  className="btn cursor-pointer whitespace-nowrap border border-transparent px-2 py-1 text-2xs font-bold transition hover:border-white ms:px-5 ms:text-xs sm:px-6 sm:text-sm md:px-6 md:py-1.5 md:text-base lg:px-8 lg:py-2 lg:text-lg xl:px-12 xl:py-2.5 xl:text-xl 2xl:text-2xl"
                >
                  Join <span className="md:hidden">now</span>
                </button>
              </form>
              <p className="font-semibold md:text-lg md:font-light lg:text-xl">
                Download our app <span className="text-lightGreen">Now!</span>
              </p>
              <div className="flex gap-4">
                <a href="https://apps.apple.com" target="_blank">
                  <img
                    src={appStore}
                    alt="App store"
                    className="sm:w-32 lg:w-40"
                  />
                </a>
                <a
                  href="https://play.google.com/store/games?hl=en_US&gl=US"
                  target="_blank"
                >
                  <img
                    src={googlePlay}
                    alt="Google play"
                    className="sm:w-32 lg:w-40"
                  />
                </a>
              </div>
            </div>
          </div>
          <hr className="h-px bg-[#E2E2E2]" />
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[0.5rem] sm:text-2xs lg:text-xs">
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Accessibility statement</a>
                </li>
                <li>
                  <a href="#">Legal Information</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
              <p className="text-2xs font-light text-[#E2E2E2] opacity-60 sm:text-xs lg:text-sm">
                <>&#169;</> {currentYear} Sahm Nakheel, All rights reserved
              </p>
            </div>
            <div className="flex gap-5 opacity-30">
              <a href="https://www.facebook.com">
                <img
                  src={facebook}
                  alt="Facebook icon"
                  className="sm:w-9 md:w-10 lg:w-11"
                />
              </a>
              <a href="https://www.twitter.com">
                <img src={x} alt="X icon" className="sm:w-9 md:w-10 lg:w-11" />
              </a>
              <a href="https://www.instagram.com">
                <img
                  src={insta}
                  alt="Instagram icon"
                  className="sm:w-9 md:w-10 lg:w-11"
                />
              </a>
              <a href="https://www.youtube.com">
                <img
                  src={youtube}
                  alt="Youtube icon"
                  className="sm:w-9 md:w-10 lg:w-11"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
