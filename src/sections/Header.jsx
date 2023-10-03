import Logo from "../assets/Logo.svg";
import globeIcon from "../assets/icons/globe.svg";
import shadow1 from "../assets/background-shadows/shadow1.svg";
import ScrollBtn from "../components/ScrollBtn";

export default function Header() {
  return (
    <>
      <header className="flex flex-col gap-5 px-6 py-12 text-center text-darkGreen">
        <img src={Logo} alt="Sahm Nakheel Logo" className="self-center" />
        <nav className="flex items-center justify-between py-5 px-14 2x:px-40">
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
              className="px-4 py-1 font-bold text-white rounded-full text-md bg-gradient-to-r from-lightGreen to-darkGreen"
              href="https://play.google.com"
              target="_blank"
            >
              Get app
            </a>
            <a
              className="px-4 py-1 border border-solid rounded-full text-md text-darkGreen border-darkGreen"
              href="#"
            >
              Sign in
            </a>
            <button className="flex items-center gap-1 px-2">
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
      <ScrollBtn />
    </>
  );
}
