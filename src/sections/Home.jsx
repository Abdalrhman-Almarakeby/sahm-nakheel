import playIcon from "../assets/icons/play.svg";
import palmTreesImg from "../assets/images/Image-1.png";
import shadow2 from "../assets/background-shadows/shadow2.svg";

export default function Home() {
  return (
    <section
      className="flex flex-col-reverse items-center justify-between pb-10 lg:flex-row lg:px-5 lg:pt-10 xl:justify-center 2xl:gap-10"
      id="home"
    >
      <div className="flex flex-col gap-1 p-4 text-center ms:gap-3 sm:gap-5 md:gap-7 lg:p-0 lg:gap-9 xl:p-10">
        <h3 className="main-p sm:text-2xl lg:text-xl xl:text-2xl">
          Start your investment journey with Sahm Nakheel
        </h3>
        <h1 className="text-xl font-light leading-relaxed ms:text-2xl sm:text-5xl lg:text-4xl">
          Affordable investment <br />
          <span className="font-extrabold"> Starting from</span>
          <span className="font-extrabold text-darkGreen"> 8000 EGP</span>
        </h1>
        <h3 className="main-p sm:text-2xl lg:text-xl xl:text-2xl">
          Achieve an exceptional long-term ROI up to 50%
        </h3>
        <div className="flex flex-col gap-2 mt-5 ms:mt-8 lg:flex-row xl:justify-center xl:gap-5">
          <a
            href="#get-started"
            className="px-2 py-1 text-sm text-center text-white rounded-full sm:text-xl lg:px-10 md:py-2 md:text-2xl lg:text-2xl bg-darkGreen"
          >
            Get started
          </a>
          <a
            href="https://www.youtube.com"
            className="flex items-center justify-center gap-2 px-2 py-1 text-sm text-center border border-solid rounded-full lg:px-10 md:py-2 sm:text-xl md:text-2xl lg:text-2xll text-darkGreen border-darkGreen"
          >
            <img src={playIcon} alt="Play video icon" className="w-3" />
            watch video
          </a>
        </div>
      </div>
      <img
        src={palmTreesImg}
        alt="Three palm trees in a field, representing nature and beauty."
        className="px-5 ms:px-14 sm:px-28 md:px-44 lg:p-0 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl"
      />
      <img src={shadow2} className="absolute left-7 top-80 -z-40 blur-3xl" />
    </section>
  );
}
