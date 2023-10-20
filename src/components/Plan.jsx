import listBulletImg from "../assets/icons/list-bullet.svg";

export default function Plan(props) {
  return (
    <div
      className={`flex flex-col  gap-8  md:gap-10 p-6 sm:p-7 md:p-8  rounded-[35px] ${
        props.isMostPopular
          ? " text-white bg-plans before:absolute relative md:before:text-sm   md:before:font-semibold md:before:px-5 md:before:py-2  before:text-xs before:whitespace-nowrap before:content-['Most_popular_plan'] before:py-1 before:px-2 lg:before:py-2.5 lg:before:px-12 before:text-darkGreen before:bg-[#FFC859] before:rounded-full before:right-1/2 before:top-0  before:translate-x-1/2 before:-translate-y-1/2"
          : "bg-white"
      }`}
    >
      <div className="flex gap-4 md:gap-6">
        <p
          className={`text-4xl font-bold ms:text-5xl sm:text-6xl  ${
            props.isMostPopular ? "text-white" : "text-darkGreen"
          }`}
        >
          {props.number}
        </p>
        <div
          className={`text-sm  ${
            props.isMostPopular ? "text-black" : " text-lightGreen"
          }`}
        >
          <p className="text-lg font-medium sm:text-xl whitespace-nowrap text-lightGreen">
            Medjool Trees
          </p>
          10 - Years ROI would be
          <br />
          <p className="whitespace-nowrap">EGP {props.ROI}</p>
        </div>
      </div>
      <ul
        className={`flex flex-col gap-3 sm:gap-4 lg:gap-5 text-xs ${
          props.isMostPopular ? "text-white" : ""
        }`}
      >
        {props.list.map((listText) => (
          <li
            key={listText}
            className={
              "flex items-center gap-3 main-p ms:gap-5 xl:gap-6 font-medium md:text-sm xl:text-xl"
            }
          >
            <img
              src={listBulletImg}
              alt="sahm nakheel logo as list item bullet"
              className="w-6 lg:w-8 xl:w-auto"
            />
            {listText}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 text-center sm:flex-row sm:justify-between">
        <p
          className={`text-lg m:text-base font-bold ${
            props.isMostPopular ? "text-white" : "text-darkGreen"
          }`}
        >
          {props.price}{" "}
          <span
            className={props.isMostPopular ? "text-white" : "text-lightGreen"}
          >
            EGP
          </span>
        </p>
        <a
          href="#"
          className={`text-xs sm:px-3 md:py-2 ${
            props.isMostPopular
              ? "light-gradient-btn"
              : "btn md:dark-gradient-btn"
          }`}
        >
          Choose the plane
        </a>
      </div>
    </div>
  );
}
