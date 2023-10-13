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
    <section className="relative flex flex-col gap-6 pb-10 ms:gap-10 ms:pt-16 sm:gap-16 lg:gap-0 lg:py-0">
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
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={badgeImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Long-Term"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={calendarImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Guaranteed"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={shieldImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Effortless"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={phoneImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Flexible"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={gearsImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="Easy"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={websiteImg}
          alt="Green wallet icon with two yellow coins on it"
        />

        <FeatureCard
          name="safe"
          description="As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment."
          src={lockImg}
          alt="Green wallet icon with two yellow coins on it"
        />
      </div>
      <img
        src={shadow3}
        className="absolute left-0 top-1/3 -z-30 blur-3xl ms:-top-60 ms:right-14 lg:top-[360px] xl:top-24"
      />
    </section>
  );
}
