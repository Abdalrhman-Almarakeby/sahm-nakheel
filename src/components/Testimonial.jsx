import PropTypes from "prop-types";

export default function Testimonial(props) {
  return (
    <div className="flex flex-col gap-1.5 rounded-3xl bg-white px-5 pb-4 pt-3 shadow-4 md:p-8 md:px-10 md:py-6 lg:gap-2.5 lg:font-normal lg:shadow-5">
      <img
        src={props.src}
        alt="User Avatar"
        className="h-12 w-12 md:h-14 md:w-14 lg:h-20 lg:w-20"
      />
      <p className="font-bold text-black lg:text-xl">{props.name}</p>
      <p className="text-2xs font-light text-black ms:text-xs sm:text-sm md:text-lg lg:text-xl">
        {props.content}
      </p>
    </div>
  );
}

Testimonial.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
