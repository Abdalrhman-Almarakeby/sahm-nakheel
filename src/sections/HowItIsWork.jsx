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
    <section className="flex flex-col gap-16 pb-10">
      <SectionTitle description="Your Path to Effortless Financial Growth">
        How it is work
      </SectionTitle>
      <div className="flex items-center px-10 justify-evenly">
        <Step
          name="Register"
          description="Sign-Up easily through our website or application."
          src={registerImg}
          alt="User with green clothes and gray background"
        />
        <img src={Arrow} alt="Dashed arrow going to the next step" />
        <Step
          name="Choose"
          description="Get your investment option from our wide range offers."
          src={chooseImg}
          alt="Hand pointing with the index finger"
        />
        <img src={Arrow} alt="Dashed arrow going to the next step" />
        <Step
          name="Easy Pay"
          description="Flexible & convenient payments for everyone."
          src={payImg}
          alt="Green cash with some gold coins"
        />
        <img src={Arrow} alt="Dashed arrow going to the next step" />
        <Step
          name="Own"
          description="You will get notified within 24H of New Investment."
          src={notificationImg}
          alt="Gold ring with green correct badge"
        />
      </div>
      <div className="flex pt-20">
        <img
          src={mobileMockup}
          alt="phone with the sahm nakheel app open and secure ,long time and best ROI badges"
        />
        <div className="flex flex-col gap-16">
          <h2 className="main-heading">
            Download Our Mobile App{" "}
            <span className="font-extrabold text-7xl text-darkGreen">Now!</span>
          </h2>
          <ul className="flex flex-col gap-12">
            <li className="flex items-center gap-5 main-p">
              <img src={listBulletImg} />
              Easy options to sign up and enjoy our Sahm Nakheel app
            </li>
            <li className="flex items-center gap-5 main-p">
              <img src={listBulletImg} />
              The project's latest developments are notified to you through
              notifications
            </li>
            <li className="flex items-center gap-5 main-p">
              <img src={listBulletImg} />
              Track your installments and view your account statement for the
              latest transactions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
