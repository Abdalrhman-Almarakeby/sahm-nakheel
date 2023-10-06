import SectionTitle from "../components/SectionTitle";
import Step from "../components/Step";
import registerImg from "../assets/images/register.png";
import chooseImg from "../assets/images/choose.png";
import payImg from "../assets/images/pay.png";
import notificationImg from "../assets/images/notification.png";
import Arrow from "../assets/icons/next-arrow.svg";
import mobileMockup from "../assets/images/mobile-mockup.png";
import listBulletImg from "../assets/icons/list-bullet.svg";

export default function HowItIsWork() {
  return (
    <section className="flex flex-col gap-12 pb-10 ms:gap-16 sm:gap-16">
      <SectionTitle description="Your Path to Effortless Financial Growth">
        How it is work
      </SectionTitle>
      <div className="flex flex-col items-center gap-6 px-10 lg:flex-row justify-evenly ms:gap-0 sm:items-center sm:flex-wrap sm:flex-row sm:gap-5 xl:gap-0 xl:flex-nowrap xl:justify-center">
        <Step
          name="Register"
          description="Sign-Up easily through our website or application."
          src={registerImg}
          alt="User with green clothes and gray background"
        />
        <img
          src={Arrow}
          alt="Dashed arrow going to the next step"
          className="hidden xl:block"
        />
        <Step
          name="Choose"
          description="Get your investment option from our wide range offers."
          src={chooseImg}
          alt="Hand pointing with the index finger"
        />
        <img
          src={Arrow}
          alt="Dashed arrow going to the next step"
          className="hidden xl:block"
        />
        <Step
          name="Easy Pay"
          description="Flexible & convenient payments for everyone."
          src={payImg}
          alt="Green cash with some gold coins"
        />
        <img
          src={Arrow}
          alt="Dashed arrow going to the next step"
          className="hidden xl:block"
        />
        <Step
          name="Own"
          description="You will get notified within 24H of New Investment."
          src={notificationImg}
          alt="Gold ring with green correct badge"
        />
      </div>
      <div className="flex flex-col sm:pt-20 xl:flex-row lg:items-center">
        <img
          src={mobileMockup}
          alt="phone with the sahm nakheel app open and secure ,long time and best ROI badges"
          className="lg:max-w-lg xl:max-w-3xl"
        />
        <div className="flex flex-col gap-8 px-6 ms:10 sm:gap-16">
          <h2 className="text-center main-heading xl:text-left">
            Download Our Mobile App{" "}
            <span className="font-extrabold text-7xl text-darkGreen">Now!</span>
          </h2>
          <ul className="flex flex-col gap-4 ms:px-4 ms:gap-8 sm:gap-12">
            <li className="flex items-center gap-3 ms:gap-5 main-p">
              <img
                src={listBulletImg}
                alt="sahm nakheel logo as list item bullet"
                className="w-8 ms:w-12 sm:w-auto"
              />
              Easy options to sign up and enjoy our Sahm Nakheel app
            </li>
            <li className="flex items-center gap-3 ms:gap-5 main-p">
              <img
                src={listBulletImg}
                alt="sahm nakheel logo as list item bullet"
                className="w-8 ms:w-12 sm:w-auto"
              />
              The project's latest developments are notified to you through
              notifications
            </li>
            <li className="flex items-center gap-3 ms:gap-5 main-p">
              <img
                src={listBulletImg}
                alt="sahm nakheel logo as list item bullet"
                className="w-8 ms:w-12 sm:w-auto"
              />
              Track your installments and view your account statement for the
              latest transactions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
