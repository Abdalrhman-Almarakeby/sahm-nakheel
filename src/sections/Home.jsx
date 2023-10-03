import playIcon from "../assets/icons/play.svg";
import palmTreesImg from "../assets/images/Image-1.png";
import shadow2 from "../assets/background-shadows/shadow2.svg";

export default function Home() {
  return (
    <section className="flex items-center justify-between pb-10" id="home">
      <div className="flex flex-col p-20 gap-7">
        <h3 className="text-xl font-light">
          Start your investment journey with Sahm Nakheel
        </h3>
        <h1 className="text-4xl font-light leading-relaxed">
          Affordable investment <br />
          <span className="font-extrabold"> Starting from</span>
          <span className="font-extrabold text-darkGreen"> 8000 EGP</span>
        </h1>
        <h3 className="text-xl font-light">
          Achieve an exceptional long-term ROI up to 50%
        </h3>
        <div className="flex gap-5">
          <a
            href="#get-started"
            className="px-10 py-2 text-2xl text-center text-white rounded-full bg-darkGreen"
          >
            Get started
          </a>
          <a
            href="https://www.youtube.com"
            className="flex gap-5 px-10 py-2 text-2xl text-center border border-solid rounded-full text-darkGreen border-darkGreen"
          >
            <img src={playIcon} alt="Play video icon" />
            watch video
          </a>
        </div>
      </div>
      <img
        src={palmTreesImg}
        alt="Three palm trees in a field, representing nature and beauty."
      />
      <img src={shadow2} className="absolute left-7 top-80 -z-50 blur-3xl" />
    </section>
  );
}
