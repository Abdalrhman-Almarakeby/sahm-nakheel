import PropTypes from "prop-types";

export default function Range(props) {
  // Get an array of the numbers that will be added under the range
  const numbers = [];
  for (let i = props.min; i <= props.max; i++) {
    numbers.push(i);
  }

  return (
    <div className="flex max-w-[500px] flex-col gap-4 px-2 text-base text-[#EFFFEE80]">
      <div className="flex justify-between">
        <input
          type="range"
          min={props.min}
          max={props.max}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          id={props.name}
          step={props.step}
          className="pointer-events-auto grow-[24] rounded-full"
        />
      </div>
      <div className="flex justify-between">
        {props.customNumbers
          ? props.customNumbers.map((num) => (
              <span
                key={num}
                name={props.name}
                onClick={(e) => {
                  props.setShowInvestmentReturns(false);
                  props.setCalcData((prevCalcData) => ({
                    ...prevCalcData,
                    [e.target.getAttribute("name")]: Number(e.target.innerText),
                  }));
                }}
                className="relative cursor-pointer text-center before:absolute before:-top-[20px] before:left-1/2 before:block before:h-[6px] before:w-[6px] before:-translate-x-1/2 before:rounded-full before:bg-[#EFFFEE80] first:before:left-[3px] last:before:left-[calc(100%-3px)]"
              >
                {num}
              </span>
            ))
          : numbers.map((num) => (
              <span
                key={num}
                name={props.name}
                onClick={(e) => {
                  props.setShowInvestmentReturns(false);
                  props.setCalcData((prevCalcData) => ({
                    ...prevCalcData,
                    [e.target.getAttribute("name")]: Number(e.target.innerText),
                  }));
                }}
                className="relative cursor-pointer text-center before:absolute before:-top-[20px] before:left-1/2 before:block before:h-[6px] before:w-[6px] before:-translate-x-1/2 before:rounded-full before:bg-[#EFFFEE80] first:before:left-[3px] last:before:left-[calc(100%-3px)]"
              >
                {num}
              </span>
            ))}
      </div>
    </div>
  );
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  step: PropTypes.number,
  customNumbers: PropTypes.arrayOf(PropTypes.number),
  setCalcData: PropTypes.func.isRequired,
  setShowInvestmentReturns: PropTypes.func.isRequired,
};
