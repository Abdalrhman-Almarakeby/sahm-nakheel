import palmTreeImg from "../assets/images/Image-2.png";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-2 pb-10 pt-8 md:pt-16 lg:pt-0">
      <img
        src={palmTreeImg}
        alt="Palm tree with green art behind"
        className="px-5 sm:-mb-6 sm:px-28 md:hidden"
      />
      <SectionTitle description="Maximizing your investment opportunities">
        About us
      </SectionTitle>
      <div className="flex flex-col gap-4 pt-10 ms:px-5 sm:gap-12 md:gap-6 md:pt-8 lg:gap-0 lg:pt-0 xl:flex-row xl:gap-10">
        <img
          src={palmTreeImg}
          alt="Palm tree with green art behind"
          className="hidden md:mx-14 md:mb-0 md:block lg:mx-48 xl:m-0 xl:max-w-xl"
        />
        <div className="flex flex-col gap-6 px-5 text-center ms:gap-6 md:items-center md:px-8 lg:items-center lg:gap-10 xl:items-start xl:px-6 xl:text-left">
          <div className="flex flex-col items-center gap-4 ms:gap-4 sm:gap-10 sm:pt-8 md:gap-8 xl:items-start">
            <h4 className="max-w-[30ch] text-center text-xl font-medium ms:text-2xl sm:text-4xl lg:text-4xl lg:font-medium xl:text-left">
              Take control of your financial destiny and build future
            </h4>
            <p className="max-w-[50ch] text-xs sm:text-base lg:text-xl">
              With Sahm Nakheel, you can own a share, which represents a palm
              tree, for an impressive period of 50 years.
            </p>
            <p className="max-w-[50ch] text-xs sm:text-base lg:text-xl">
              And guess what? The value of one share is a mere 8000 Egyptian
              pounds! Such an affordable investment opens the door to incredible
              possibilities.
            </p>
          </div>
          <a href="#" className="btntext-xs sm:text-base lg:text-xl">
            Reserve your share now
          </a>
        </div>
      </div>
    </section>
  );
}
