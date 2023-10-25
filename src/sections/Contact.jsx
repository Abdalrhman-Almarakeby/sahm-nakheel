import SectionTitle from "../components/SectionTitle";
import ContactFrom from "../components/ContactFrom";
import map from "../assets/images/map-s.png";
import largeMap from "../assets/images/map-l.png";
import phone from "../assets/icons/phone.svg";
import pin from "../assets/icons/pin.svg";
import mail from "../assets/icons/mail.svg";
import shadow4 from "../assets/background-shadows/shadow4.svg";

export default function Contact() {
  return (
    <section className="break-container breakable-container relative space-y-10 pb-14 xl:px-20">
      <SectionTitle
        children="Contact Us"
        description="Get in touch, with easy ways to reach"
        className="xl:hidden"
      />
      <div className="break-container sm:undo-break-container breakable-container flex flex-col gap-5 xl:relative xl:flex-row-reverse xl:justify-end">
        <img
          src={map}
          alt="Gray map from the location of Sahm Nakheel"
          className="break-container sm:mx-16 lg:mx-32 xl:hidden"
        />
        <img
          src={largeMap}
          alt="Gray map from the location of Sahm Nakheel"
          className="absolute right-0 top-[15%] -z-10 hidden h-[75%] !w-3/4 object-cover xl:block"
        />
        <div className="flex flex-col gap-5 px-4 sm:px-20 md:px-24 lg:px-32 xl:!m-0 xl:basis-1/2 xl:p-0">
          <SectionTitle
            children="Contact Us"
            description="Get in touch, with easy ways to reach"
            className="hidden xl:block"
            isContactSection={true}
          />
          <div className="flex flex-col gap-4 rounded-xl bg-mintyGray px-5 py-4 text-xs font-light text-midGreen sm:text-base md:gap-6 md:px-7 md:py-6 md:text-sm xl:hidden xl:text-xl">
            <a className="flex gap-5" href="tel:+2001151151126">
              <img
                src={phone}
                alt="Green phone icon"
                className="sm:scale-125"
              />
              ( +20 ) 011 511 511 26
            </a>
            <a
              className="flex gap-5"
              href="https://maps.app.goo.gl/zhCjLVCJf7dLXyPx6"
              target="_blank"
            >
              <img
                src={pin}
                alt="Green map pin icon "
                className="sm:scale-125"
              />
              35 Al Gahez, Al Hadiqah Al-Dawleyah, Nasr City, Cairo.
            </a>
            <a className="flex gap-5" href="mailto:info@sahmnakheel.com">
              <img src={mail} alt="Green mail icon " className="sm:scale-125" />
              info@sahmnakheel.com
            </a>
          </div>
          <ContactFrom />
        </div>
      </div>
      <div className="hidden justify-between rounded-xl px-7 py-6 text-lg text-midGreen xl:flex 2xl:text-xl">
        <a className="flex gap-5" href="tel:+2001151151126">
          <img src={phone} alt="Green phone icon" />( +20 ) 011 511 511 26
        </a>
        <a
          className="flex gap-5"
          href="https://maps.app.goo.gl/zhCjLVCJf7dLXyPx6"
          target="_blank"
        >
          <img src={pin} alt="Green map pin icon " />
          35 Al Gahez, Al Hadiqah Al-Dawleyah, Nasr City, Cairo.
        </a>
        <a className="flex gap-5" href="mailto:info@sahmnakheel.com">
          <img src={mail} alt="Green mail icon " />
          info@sahmnakheel.com
        </a>
      </div>
      <img
        src={shadow4}
        alt=""
        className="absolute left-0 top-0 -z-50 h-auto w-auto"
      />
    </section>
  );
}
