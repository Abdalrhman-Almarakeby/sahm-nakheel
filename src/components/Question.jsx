import downArrow from "../assets/icons/down.svg";
import PropTypes from "prop-types";

export default function Question(props) {
  return (
    <div
      className="flex flex-col items-center gap-0"
      onClick={() =>
        props.setOpenQuestion((prev) => (prev === props.id ? false : props.id))
      }
    >
      <div className="flex cursor-pointer items-center gap-2.5 rounded-3xl bg-lightGreen p-4 md:p-6 lg:gap-4 lg:p-7">
        <p className="text-xs font-bold leading-relaxed text-white sm:text-sm md:text-base xl:text-lg">
          {props.question}
        </p>

        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-darkGreen">
          <img
            src={downArrow}
            alt="Arrow"
            className={`transition duration-300 ${
              props.openQuestion ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className="grid transition-all"
        style={{
          gridTemplateRows: props.openQuestion ? "1fr" : "0fr",
        }}
      >
        <p
          className="duration-400 mx-5 overflow-hidden border-l border-darkBlue px-6 text-2xs transition-all sm:text-xs md:text-sm lg:mx-12 lg:px-8 xl:text-base"
          style={{
            opacity: props.openQuestion ? 1 : 0,
            marginTop: props.openQuestion ? "15px" : 0,
            marginBottom: props.openQuestion ? "10px" : 0,
          }}
        >
          {props.answer}
        </p>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  openQuestion: PropTypes.bool.isRequired,
  setOpenQuestion: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
