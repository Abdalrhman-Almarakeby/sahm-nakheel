import palmTreesImg from "../assets/images/Image-1.png";
import shadow2 from "../assets/background-shadows/shadow2.svg";

export default function Home() {
  return (
    <section
      className="mt-32 flex flex-col-reverse items-center justify-between px-2 ms:mt-40 lg:mt-0 lg:flex-row lg:items-end lg:justify-center lg:gap-4 lg:px-5 lg:pt-[230px] xl:items-center 2xl:gap-10"
      id="home"
    >
      <div className="-mt-14 flex flex-col gap-1 p-4 text-center ms:-mt-12 ms:gap-3 sm:gap-5 sm:px-7 md:gap-7 lg:gap-9 lg:pl-0 lg:pr-0 xl:p-10 xl:pl-6">
        <h3 className="main-p ms:text-sm sm:text-2xl lg:text-xl">
          Start your investment journey with Sahm Nakheel
        </h3>
        <h1 className="text-2xl font-light leading-relaxed ms:text-3xl sm:text-5xl sm:leading-snug lg:text-[2.625rem] xl:text-5xl">
          Affordable investment <br />
          <span className="font-extrabold sm:whitespace-nowrap">
            <>&nbsp;</>
            Starting from
            <span className="whitespace-nowrap font-extrabold text-darkGreen">
              <>&nbsp;</>
              8000 EGP
            </span>
          </span>
        </h1>
        <h3 className="main-p ms:text-sm sm:text-2xl lg:text-xl xl:text-2xl">
          Achieve an exceptional long-term ROI up to 50%
        </h3>
        <div className="mt-5 flex flex-col gap-2 ms:mt-3 ms:flex-row ms:items-center sm:px-4 md:mt-8 lg:flex-row xl:justify-center xl:gap-5">
          <a
            href="#get-started"
            className="btn whitespace-nowrap px-1 py-2 text-sm font-bold ms:grow ms:text-base md:px-12 md:py-2.5 md:text-2xl lg:px-12 lg:text-xl xl:px-12 xl:text-2xl"
          >
            Get started
          </a>
          <a
            href="https://www.youtube.com"
            className="border-btn group flex items-center justify-center gap-2 whitespace-nowrap px-1 py-2 text-sm ms:grow ms:text-base md:px-12 md:py-2.5 md:text-2xl lg:gap-4 lg:px-12 lg:text-xl xl:gap-5 xl:px-12 xl:text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              className="w-3 fill-darkGreen transition duration-300 group-hover:fill-white"
            >
              <path d="M0.5 2.24914C0.5 2.01156 0.555718 1.77858 0.66113 1.57013C1.00749 0.895714 1.79055 0.652005 2.41248 1.02753L17.9081 10.359C18.1189 10.4862 18.2921 10.6747 18.4081 10.9031C18.7544 11.5775 18.5285 12.4282 17.9081 12.8022L2.41248 22.1336C2.22349 22.2484 2.00762 22.3093 1.78754 22.3099C1.07676 22.3099 0.5 21.6845 0.5 20.9136V2.24914Z" />
            </svg>
            watch video
          </a>
        </div>
      </div>
      <img
        src={palmTreesImg}
        alt="Three palm trees in a field, representing nature and beauty."
        className="px-5 ms:px-14 sm:px-28 md:px-44 lg:max-w-[400px] lg:p-0 xl:max-w-xl"
      />
      <img
        unselectable="on"
        src={shadow2}
        className="pointer-events-none absolute left-7 top-80 -z-40 m-0 hidden blur-3xl md:block md:max-w-[700px]"
      />
    </section>
  );
}
