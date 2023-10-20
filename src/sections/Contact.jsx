import SectionTitle from "../components/SectionTitle";
import ContactFrom from "../components/ContactFrom";
import map from "../assets/images/map-s.png";
import largeMap from "../assets/images/map-l.png";
import phone from "../assets/icons/phone.svg";
import pin from "../assets/icons/pin.svg";
import mail from "../assets/icons/mail.svg";

export default function Contact() {
  return (
    <section className="space-y-16 break-container breakable-container pb-14">
      <SectionTitle
        children="Contact Us"
        description="Get in touch, with easy ways to reach"
      />
      <div className="flex flex-col gap-5 break-container breakable-container lg:flex-row-reverse ">
        <img
          src={map}
          alt="Gray map from the location of Sahm Nakheel"
          className="lg:hidden break-container"
        />
        <img
          src={largeMap}
          alt="Gray map from the location of Sahm Nakheel"
          className="hidden object-cover lg:block"
        />
        <div className="flex flex-col gap-5 px-4">
          <div className="flex flex-col gap-4 px-5 py-4 text-xs font-light rounded-xl bg-mintyGray text-midGreen">
            <a className="flex gap-5 ms:text-sm" href="tel:+2001151151126">
              <img src={phone} alt="Green phone icon" />( +20 ) 011 511 511 26
            </a>
            <a
              className="flex gap-5 ms:text-sm"
              href="https://maps.app.goo.gl/zhCjLVCJf7dLXyPx6"
              target="_blank"
            >
              <img src={pin} alt="Green map pin icon " />
              35 Al Gahez, Al Hadiqah Al-Dawleyah, Nasr City, Cairo.
            </a>
            <a
              className="flex gap-5 ms:text-sm"
              href="mailto:info@sahmnakheel.com"
            >
              <img src={mail} alt="Green mail icon " />
              info@sahmnakheel.com
            </a>
          </div>
          <ContactFrom />
        </div>
      </div>
    </section>
  );
}
