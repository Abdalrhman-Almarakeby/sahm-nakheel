import downArrow from "../assets/icons/down.svg";

export default function Question({
  question,
  answer,
  openQuestion,
  setOpenQuestion,
  id,
}) {
  return (
    <div
      className="flex flex-col items-center gap-0"
      onClick={() =>
        setOpenQuestion((prev) => {
          if (prev === id) {
            return false;
          } else {
            return id;
          }
        })
      }
    >
      <div className="flex cursor-pointer items-center gap-2.5 rounded-3xl bg-lightGreen p-4 md:p-6 lg:gap-4 lg:p-7">
        <p className="text-xs font-bold leading-relaxed text-white sm:text-sm md:text-base xl:text-lg">
          {question}
        </p>

        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-darkGreen">
          <img
            src={downArrow}
            alt="Arrow"
            className={`transition duration-300 ${
              openQuestion ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className="duration-400 grid transition-all"
        style={{
          gridTemplateRows: openQuestion ? "1fr" : "0fr",
        }}
      >
        <p
          className="duration-400 mx-5 overflow-hidden border-l border-solid border-darkBlue px-6 text-2xs transition-all sm:text-xs lg:mx-12 lg:px-8"
          style={{
            opacity: openQuestion ? 1 : 0,
            marginTop: openQuestion ? "15px" : 0,
            marginBottom: openQuestion ? "10px" : 0,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
