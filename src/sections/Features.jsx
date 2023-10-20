import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import walletImg from "../assets/icons/wallet.png";
import badgeImg from "../assets/icons/badge.png";
import calendarImg from "../assets/icons/calendar.png";
import shieldImg from "../assets/icons/shield.png";
import phoneImg from "../assets/icons/phone.png";
import gearsImg from "../assets/icons/gears.png";
import websiteImg from "../assets/icons/website.png";
import lockImg from "../assets/icons/lock.png";
import shadow3 from "../assets/background-shadows/shadow3.svg";

export default function Features() {
  return (
    <section className="relative flex flex-col gap-6 px-2 pb-10 ms:gap-10 ms:pt-16 sm:gap-16 lg:gap-0 lg:py-0">
      <SectionTitle
        description="There is no better asset to own than one that
        increases in value over time & keeps pace with inflation"
      >
        Great Features
      </SectionTitle>
      <div className="grid grid-cols-1 gap-6 px-12 ms:grid-cols-2 ms:gap-6 ms:px-2 sm:grid-cols-3 sm:px-8 md:grid-cols-3 lg:gap-7 lg:px-20 xl:grid-cols-4 2xl:grid-cols-5">
        <FeatureCard
          name="Affordable"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={walletImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Exceptional"
          description="Your financial stake in Sahm Nakheel opens the doors to exceptional returns."
          src={badgeImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Long-Term"
          description="The 50-year ownership period provides stability and a long-term commitment."
          src={calendarImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Guaranteed"
          description="Medjool dates are becoming a world-famous export product with an exceptional demand."
          src={shieldImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Effortless"
          description="Our tailor-made plans allow you to buy the number of shares that best suits your needs."
          src={phoneImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Flexible"
          description="Investment options allow you to tailor your initial investment to what you are comfortable with."
          src={gearsImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Easy"
          description="Invest from anywhere through our user-friendly website, with just a few clicks."
          src={websiteImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="safe"
          description="Ensure peace of mind and a risk-free venture with our top-notch risk practices."
          src={lockImg}
          alt="Green wallet icon with two yellow coins on it"
        />
      </div>
      <img
        unselectable="on"
        src={shadow3}
        className="pointer-events-none absolute left-0 top-1/3 -z-30 blur-3xl ms:-top-60 ms:right-14 lg:top-[360px] xl:top-24"
      />
    </section>
  );
}
