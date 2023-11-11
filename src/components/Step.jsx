import PropTypes from "prop-types";
import arrow from "../assets/icons/next-arrow.svg";

export default function Step(props) {
  return (
    <>
      <div className="flex max-w-[15rem] flex-col items-center gap-3 p-8 text-center xl:p-0">
        <img src={props.src} alt={props.alt} />
        <h5 className="text-xl font-bold ms:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {props.name}
        </h5>
        <p className="text-sm font-light capitalize text-darkGreen ms:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {props.description}
        </p>
      </div>
      {props.PropTypesarrowAfter && (
        <img
          src={arrow}
          alt="Dashed arrow going to the next step"
          className="hidden xl:block"
        />
      )}
    </>
  );
}

Step.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  arrowAfter: PropTypes.bool.isRequired,
};
