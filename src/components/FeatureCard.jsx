import propTypes from "prop-types";

export default function FeatureCard(props) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl border bg-white px-3 py-8 text-center shadow-3 ms:items-start ms:gap-2.5 ms:px-2.5 ms:py-8 sm:px-4 md:gap-3.5 md:px-6 lg:shadow-none xl:p-8">
      <img
        src={props.src}
        alt={props.alt}
        className="ms:w-8 md:w-14 xl:w-auto"
      />
      <h5 className="text-xl font-bold ms:text-base sm:text-lg md:text-xl">
        {props.name}
      </h5>
      <p className="main-p text-darkGreen ms:text-left ms:text-xs md:text-base">
        {props.description}
      </p>
    </div>
  );
}

FeatureCard.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
