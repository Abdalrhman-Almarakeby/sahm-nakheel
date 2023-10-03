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
    <section className="relative pb-10">
      <SectionTitle
        description="There is no better asset to own than one that
        increases in value over time & keeps pace with inflation"
      >
        Great Features
      </SectionTitle>
      <div className="card-container">
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
      <img src={shadow3} className="absolute right-14 -top-60 -z-50 blur-3xl" />
    </section>
  );
}
