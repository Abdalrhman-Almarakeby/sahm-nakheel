import palmTreeImg from "../assets/images/Image-2.png";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="pb-10">
      <SectionTitle description="Maximizing your investment opportunities">
        About us
      </SectionTitle>
      <div className="flex flex-col gap-4 px-5 ms:gap-6 sm:gap-12 md:gap-5 xl:flex-row">
        <img
          src={palmTreeImg}
          alt="Palm tree with green art behind"
          className="px-5 ms:px-14 sm:px-28 xl:p-0 xl:max-w-xl"
        />
        <div className="flex flex-col items-center text-center lg:items-center md:px-8 gap-11 xl:text-left xl:items-start">
          <div className="flex flex-col items-center gap-4 ms:gap-4 sm:gap-10 md:gap-8 xl:items-start">
            <h4 className="text-2xl font-medium ms:text-2xl sm:text-3xl lg:text-4xl text-center max-w-[30ch] xl:text-left">
              Take control of your financial destiny and build future
            </h4>
            <p className="main-p max-w-[50ch]">
              With Sahm Nakheel, you can own a share, which represents a palm
              tree, for an impressive period of 50 years.
            </p>
            <p className="main-p max-w-[50ch]">
              And guess what? The value of one share is a mere 8000 Egyptian
              pounds! Such an affordable investment opens the door to incredible
              possibilities.
            </p>
          </div>
          <a
            href="#"
            className="text-white text-sm sm:text-base bg-darkGreen px-4 py-1 sm:px-12 sm:py-2.5 rounded-full lg:text-2xl"
          >
            Reserve your share now
          </a>
        </div>
      </div>
    </section>
  );
}
