import Logo from "../assets/Logo.svg";
import globeIcon from "../assets/icons/globe.svg";
import shadow1 from "../assets/background-shadows/shadow1.svg";

export default function Header() {
  return (
    <header className="flex flex-col gap-5 text-center py-12 px-6 text-darkGreen">
      <img src={Logo} alt="Sahm Nakheel Logo" className="self-center" />
      <nav className="flex justify-between items-center px-14 2x:px-40 py-5">
        <ul className="flex gap-6">
          <li className="text-lg">
            <a href="#home" className="px-1 py-3">
              Home
            </a>
          </li>
          <li className="text-lg">
            <a href="#about" className="px-1 py-3">
              About us
            </a>
          </li>
          <li className="text-lg">
            <a href="#features" className="px-1 py-3">
              Features
            </a>
          </li>
          <li className="text-lg">
            <a href="#pricing" className="px-1 py-3">
              Pricing
            </a>
          </li>
          <li className="text-lg">
            <a href="#faqs" className="px-1 py-3">
              FAQs
            </a>
          </li>
          <li className="text-lg">
            <a href="#gallery" className="px-1 py-3">
              Gallery
            </a>
          </li>
          <li className="text-lg">
            <a href="#blog" className="px-1 py-3">
              Blog
            </a>
          </li>
          <li className="text-lg">
            <a href="#contact" className="px-1 py-3">
              Contact us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <a
            className="text-md py-1 px-4 bg-gradient-to-r from-lightGreen to-darkGreen text-white font-bold rounded-full"
            href="https://play.google.com"
            target="_blank"
          >
            Get app
          </a>
          <a
            className="text-md py-1 px-4  text-darkGreen border-darkGreen border border-solid  rounded-full"
            href="#"
          >
            Sign in
          </a>
          <button className="flex gap-1 items-center px-2">
            <img src={globeIcon} alt="globe Icon" />
            <p id="lang">EN</p>
          </button>
        </div>
      </nav>
      <img
        src={shadow1}
        className="absolute right-7 top-5 -z-50 rotate-[-15deg] blur-3xl"
      />
    </header>
  );
}
