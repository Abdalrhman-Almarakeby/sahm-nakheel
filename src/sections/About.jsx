import palmTreeImg from "../assets/images/Image-2.png";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about">
      <SectionTitle description="Maximizing your investment opportunities">
        About us
      </SectionTitle>
      <div className="flex gap-12">
        <img src={palmTreeImg} alt="Palm tree with green art behind" />
        <div className="flex flex-col items-start gap-11">
          <div className="flex flex-col gap-10">
            <h4 className="text-4xl font-medium">
              Take control of your financial destiny and build future
            </h4>
            <p className="text-xl font-light">
              With Sahm Nakheel, you can own a share, which represents a palm
              tree, for an impressive period of 50 years.
            </p>
            <p className="text-xl font-light">
              And guess what? The value of one share is a mere 8000 Egyptian
              pounds! Such an affordable investment opens the door to incredible
              possibilities.
            </p>
          </div>
          <a
            href="#"
            className="text-white bg-darkGreen px-12 py-2.5 rounded-full"
          >
            Reserve your share now
          </a>
        </div>
      </div>
    </section>
  );
}
