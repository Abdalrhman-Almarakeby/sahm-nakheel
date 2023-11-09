import { useEffect, useState } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import Logo from "../assets/Logo.svg";
import whiteLogo from "../assets/simple-logo.svg";
import burgerIcon from "../assets/icons/mobile-menu.svg";
import closeIcon from "../assets/icons/mobile-close.svg";
import userIcon from "../assets/icons/user.svg";
import ScrollBtn from "../components/ScrollBtn";
import shadow1 from "../assets/background-shadows/shadow1.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const navStyle = {
    top: menuOpen ? "75%" : "-2000px",
  };

  useEffect(() => {
    if (scrollDirection === "down") {
      setMenuOpen(false);
    }
  });

  return (
    <>
      <header
        className={`preserve-3d lg:preserve-3d-unset fixed right-0 z-50 flex w-full flex-row items-center justify-between gap-5 rounded-b-3xl bg-[#efffeec7] px-5 pb-4 pt-8 text-center shadow-2 transition-all duration-200 ms:px-8 ms:pt-16 lg:w-full lg:flex-col lg:items-stretch lg:justify-start lg:bg-inherit lg:bg-white lg:px-6 lg:py-10 ${
          menuOpen ? "!bg-midGreen" : ""
        } ${scrollDirection === "down" ? "-top-full" : "top-0"} ${
          window.pageYOffset > 1000 ? "lg:shadow-lg" : "lg:shadow-none"
        }`}
      >
        <img
          src={menuOpen ? whiteLogo : Logo}
          alt="Sahm Nakheel Logo"
          className="z-50 max-w-[150px] self-center ms:max-w-[160px] sm:max-w-[170px]"
        />
        <img
          id="icon"
          src={menuOpen ? closeIcon : burgerIcon}
          alt={menuOpen ? "Close menu icon" : "Open menu icon"}
          className="z-50 max-w-[30px] ms:max-w-[35px] sm:max-w-none lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        />
        <nav
          id="menu"
          style={navStyle}
          className="-translateZ-px absolute right-0 z-20 flex w-full flex-col items-center gap-4 bg-darkGreen px-0 pb-5 pt-10 text-mintyGray transition-[top] duration-300 md:gap-10 md:pt-20 md:text-lg lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:gap-8 lg:bg-inherit lg:px-0 lg:pb-0 lg:pt-5 lg:text-base lg:text-darkGreen xl:justify-between xl:px-20 2xl:justify-center 2xl:gap-32"
        >
          <ul className="flex w-full flex-col gap-3 text-sm font-bold ms:gap-5 ms:text-xl md:gap-6 lg:w-auto lg:flex-row lg:gap-4 lg:text-base lg:font-normal xl:text-lg">
            <li onClick={() => setMenuOpen(false)}>
              <a href="#home" className="lg:px-1 lg:py-3">
                Home
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#about" className="lg:px-1 lg:py-3">
                About us
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#features" className="lg:px-1 lg:py-3">
                Features
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#pricing" className="lg:px-1 lg:py-3">
                Pricing
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#faqs" className="lg:px-1 lg:py-3">
                FAQs
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#gallery" className="lg:px-1 lg:py-3">
                Gallery
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#blog" className="lg:px-1 lg:py-3">
                Blog
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
            <li onClick={() => setMenuOpen(false)}>
              <a href="#contact" className="lg:px-1 lg:py-3">
                Contact us
              </a>
            </li>
            <span className="hidden h-0.5 w-full bg-gradient ms:block lg:hidden" />
          </ul>
          <div className="flex flex-col items-center md:gap-6 lg:flex-row lg:gap-5 xl:gap-6">
            <a
              className="dark-gradient-btn hidden px-4 py-1 lg:block"
              href="https://play.google.com"
              target="_blank"
            >
              Get app
            </a>
            <a
              className="border-btn hidden bg-transparent px-5 py-1 text-sm lg:block"
              href="#"
            >
              Sign in
            </a>
            <div className="flex flex-row items-center gap-3.5 ms:mt-10 lg:hidden">
              <img src={userIcon} alt="User icon" />
              <a
                href="#"
                className="grow rounded-full border border-mintyGray px-4 py-1 text-sm ms:px-8 ms:py-2"
              >
                Log in
              </a>
            </div>
            <p className="pb-4 pt-3 lg:hidden">
              New here ?{" "}
              <a
                href="#"
                className="whitespace-nowrap text-lightGreen underline"
              >
                create an account
              </a>
            </p>
            <div className="text-mintyGray lg:text-darkGreen">
              <button className="flex items-center gap-1 px-2 py-1 lg:gap-3 lg:px-0">
                {/* FIXME: replace the svg with an img and use stroke and fill to change the color */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  className="h-5 w-5 fill-mintyGray lg:fill-darkGreen"
                >
                  <path d="M4.5 9.53674e-07C5.115 9.53674e-07 5.69625 0.118201 6.24375 0.354601C6.79125 0.591001 7.26945 0.913501 7.67835 1.3221C8.08695 1.7307 8.40945 2.20875 8.64585 2.75625C8.88225 3.30375 9.0003 3.885 9 4.5C9 5.1225 8.8818 5.7057 8.6454 6.2496C8.409 6.7935 8.0865 7.2696 7.6779 7.6779C7.2693 8.0868 6.7914 8.4093 6.2442 8.6454C5.697 8.8815 5.1156 8.9997 4.5 9C3.8775 9 3.2943 8.8818 2.7504 8.6454C2.2065 8.409 1.7304 8.0865 1.3221 7.6779C0.913199 7.2693 0.5907 6.79305 0.3546 6.24915C0.1185 5.70525 0.000300407 5.1222 0 4.5C0 3.885 0.1182 3.30375 0.3546 2.75625C0.591 2.20875 0.9135 1.73055 1.3221 1.32165C1.7307 0.913051 2.20695 0.590551 2.75085 0.354151C3.29475 0.117751 3.8778 -0.000299454 4.5 9.53674e-07ZM4.5 0.922501C4.305 1.1925 4.13625 1.47375 3.99375 1.76625C3.85125 2.05875 3.735 2.37 3.645 2.7H5.355C5.265 2.37 5.14875 2.05875 5.00625 1.76625C4.86375 1.47375 4.695 1.1925 4.5 0.922501ZM5.67 1.1025C5.805 1.35 5.9232 1.60695 6.0246 1.87335C6.126 2.13975 6.2103 2.4153 6.2775 2.7H7.605C7.3875 2.325 7.11555 1.99875 6.78915 1.72125C6.46275 1.44375 6.0897 1.2375 5.67 1.1025ZM3.33 1.1025C2.91 1.2375 2.5368 1.44375 2.2104 1.72125C1.884 1.99875 1.6122 2.325 1.395 2.7H2.7225C2.79 2.415 2.8743 2.1393 2.9754 1.8729C3.0765 1.6065 3.1947 1.3497 3.33 1.1025ZM7.9875 3.6H6.4575C6.48 3.75 6.49695 3.8982 6.50835 4.0446C6.51975 4.191 6.5253 4.3428 6.525 4.5C6.525 4.6575 6.5193 4.8093 6.5079 4.9554C6.4965 5.1015 6.4797 5.2497 6.4575 5.4H7.9875C8.025 5.25 8.0532 5.1018 8.0721 4.9554C8.091 4.809 8.1003 4.6572 8.1 4.5C8.1 4.3425 8.09055 4.1907 8.07165 4.0446C8.05275 3.8985 8.0247 3.7503 7.9875 3.6ZM5.5575 3.6H3.4425C3.42 3.75 3.40305 3.8982 3.39165 4.0446C3.38025 4.191 3.3747 4.3428 3.375 4.5C3.375 4.6575 3.3807 4.8093 3.3921 4.9554C3.4035 5.1015 3.4203 5.2497 3.4425 5.4H5.5575C5.58 5.25 5.59695 5.1018 5.60835 4.9554C5.61975 4.809 5.6253 4.6572 5.625 4.5C5.625 4.3425 5.6193 4.1907 5.6079 4.0446C5.5965 3.8985 5.5797 3.7503 5.5575 3.6ZM2.5425 3.6H1.0125C0.974999 3.75 0.9468 3.8982 0.9279 4.0446C0.909 4.191 0.8997 4.3428 0.9 4.5C0.9 4.6575 0.90945 4.8093 0.928349 4.9554C0.947249 5.1015 0.9753 5.2497 1.0125 5.4H2.5425C2.52 5.25 2.50305 5.1018 2.49165 4.9554C2.48025 4.809 2.4747 4.6572 2.475 4.5C2.475 4.3425 2.4807 4.1907 2.4921 4.0446C2.5035 3.8985 2.5203 3.7503 2.5425 3.6ZM2.7225 6.3H1.395C1.6125 6.675 1.8843 7.00125 2.2104 7.27875C2.5365 7.55625 2.9097 7.7625 3.33 7.8975C3.195 7.65 3.0768 7.39305 2.9754 7.12665C2.874 6.86025 2.7897 6.5847 2.7225 6.3ZM5.355 6.3H3.645C3.735 6.63 3.85125 6.94125 3.99375 7.23375C4.13625 7.52625 4.305 7.8075 4.5 8.0775C4.695 7.8075 4.86375 7.52625 5.00625 7.23375C5.14875 6.94125 5.265 6.63 5.355 6.3ZM7.605 6.3H6.2775C6.21 6.585 6.12555 6.8607 6.02415 7.1271C5.92275 7.3935 5.8047 7.6503 5.67 7.8975C6.09 7.7625 6.4632 7.55625 6.7896 7.27875C7.116 7.00125 7.3878 6.675 7.605 6.3Z" />
                </svg>
                <p id="lang">EN</p>
                <span className="ml-3 text-xs lg:hidden">Change Language</span>
              </button>
            </div>
          </div>
        </nav>
        <img
          unselectable="on"
          src={shadow1}
          className="pointer-events-none absolute right-7 top-5 z-20 rotate-[-15deg] blur-3xl"
        />
      </header>
      <ScrollBtn />
    </>
  );
}
