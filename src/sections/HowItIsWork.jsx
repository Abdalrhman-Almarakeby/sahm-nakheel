import SectionTitle from "../components/SectionTitle";
import Step from "../components/Step";
import listBulletImg from "../assets/icons/list-bullet.svg";
import registerImg from "../assets/images/register.png";
import chooseImg from "../assets/images/choose.png";
import payImg from "../assets/images/pay.png";
import notificationImg from "../assets/images/notification.png";
import mobileMockup from "../assets/images/mobile-mockup.png";

export default function HowItIsWork() {
  return (
    <section className="flex flex-col gap-12 px-2 ms:gap-10 sm:gap-16 lg:gap-0">
      <SectionTitle description="Your Path to Effortless Financial Growth">
        How it is work
      </SectionTitle>
      <div className="flex flex-col gap-16 md:gap-20 xl:gap-24">
        <>&nbsp;</>
        <div className="lg: grid grid-cols-1 justify-items-center p-0 px-10 ms:grid-cols-2 ms:justify-items-center ms:gap-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-0 xl:flex-nowrap xl:justify-center xl:gap-0">
          <Step
            name="Register"
            description="Sign-Up easily through our website or application."
            src={registerImg}
            alt="User with green clothes and gray background"
            arrowAfter={true}
          />

          <Step
            name="Choose"
            description="Get your investment option from our wide range offers."
            src={chooseImg}
            alt="Hand pointing with the index finger"
            arrowAfter={true}
          />

          <Step
            name="Easy Pay"
            description="Flexible & convenient payments for everyone."
            src={payImg}
            alt="Green cash with some gold coins"
            arrowAfter={true}
          />

          <Step
            name="Own"
            description="You will get notified within 24H of New Investment."
            src={notificationImg}
            alt="Gold ring with green correct badge"
            arrowAfter={false}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:pt-20">
          <img
            src={mobileMockup}
            alt="phone with the sahm nakheel app open and secure ,long time and best ROI badges"
            className="lg:max-w-lg xl:max-w-none"
          />
          <div className="ms:10 flex flex-col gap-14 px-6 sm:gap-16 lg:gap-8 lg:px-0">
            <h2 className="main-heading text-center text-3xl ms:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:pl-5 xl:text-left xl:text-6xl">
              Download Our Mobile App<>&nbsp;</>
              <span className="font-extrabold text-darkGreen xl:text-7xl">
                Now!
              </span>
            </h2>
            <ul className="flex flex-col gap-4 ms:gap-8 ms:px-4 sm:gap-12 lg:gap-5">
              <li className="main-p flex items-center gap-6 ms:gap-5 lg:text-lg xl:gap-6 xl:text-xl">
                <img
                  src={listBulletImg}
                  alt="sahm nakheel logo as list item bullet"
                  className="w-6 ms:w-8 sm:w-auto lg:w-8 xl:w-auto"
                />
                Easy options to sign up and enjoy our Sahm Nakheel app
              </li>
              <li className="main-p flex items-center gap-6 ms:gap-5 lg:text-lg xl:gap-6 xl:text-xl">
                <img
                  src={listBulletImg}
                  alt="sahm nakheel logo as list item bullet"
                  className="w-6 ms:w-8 sm:w-auto lg:w-8 xl:w-auto"
                />
                The project's latest developments are notified to you through
                notifications
              </li>
              <li className="main-p flex items-center gap-6 ms:gap-5 lg:text-lg xl:gap-6 xl:text-xl">
                <img
                  src={listBulletImg}
                  alt="sahm nakheel logo as list item bullet"
                  className="w-6 ms:w-8 sm:w-auto lg:w-8 xl:w-auto"
                />
                Track your installments and view your account statement for the
                latest transactions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
