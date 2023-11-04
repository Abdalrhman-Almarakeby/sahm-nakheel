import { useState } from "react";
import PropTypes from "prop-types";
import Range from "./Range";

export default function InvestmentCalcForm(props) {
  const [errors, setErrors] = useState({});

  function handleCalcData(e) {
    props.setShowInvestmentReturns(false);
    props.setCalcData((prevCalcData) => {
      return {
        ...prevCalcData,
        [e.target.name]: !isNaN(e.target.value)
          ? Number(e.target.value)
          : e.target.value,
      };
    });
  }

  function getInvestmentReturns(calcData) {
    // Return the prevues value if there is any errors
    const prevValue = document.getElementById("investmentReturns");

    if (!(Object.keys(validateForm(calcData)).length === 0))
      return prevValue.innerText;

    const { palmType, palmsNumber, yearsNumber } = calcData;

    let palmCost;
    let palmYearlyReturns;

    // Set the cost of the palm and the yearly return on investment (Yearly ROI)
    //  depends on the palm type
    switch (palmType) {
      case "type-A":
        palmCost = 2500;
        palmYearlyReturns = 250;
        break;
      case "type-B":
        palmCost = 2000;
        palmYearlyReturns = 200;
        break;
      case "type-C":
        palmCost = 1500;
        palmYearlyReturns = 150;
        break;
      case "type-D":
        palmCost = 1000;
        palmYearlyReturns = 100;
        break;
    }

    const palmsYearlyReturns = palmYearlyReturns * palmsNumber;

    return palmsYearlyReturns * yearsNumber;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = validateForm(props.calcData);
    if (Object.keys(errors).length === 0) {
      document.getElementById("investmentReturns").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      props.setShowInvestmentReturns(true);
      setErrors({});
    } else {
      setErrors(errors);
    }
  }

  function validateForm(data) {
    let errors = null;

    const palmTreeTypes = ["type-A", "type-B", "type-C", "type-D"];
    if (!palmTreeTypes.includes(data.palmType)) {
      errors = { ...errors, palmType: "Invalid Palm Tree type" };
    }

    if (!(data.palmsNumber >= 1) || !(data.palmsNumber <= 20)) {
      errors = {
        ...errors,
        palmsNumber:
          "Invalid Palms number, Palms number should be between 1 and 20",
      };
    }

    if (!(data.yearsNumber >= 4) || !(data.yearsNumber <= 10)) {
      errors = {
        ...errors,
        yearsNumber:
          "Invalid Years number, Years number should be between 4 and 10",
      };
    }

    return errors || {};
  }

  const errorMessages = Object.keys(errors).map((key) => {
    return (
      <p
        key={key}
        className="rounded-[10px] border border-red-600 bg-white px-4 py-3 text-sm font-bold text-red-600 sm:text-base md:text-lg xl:text-xl"
      >
        {errors[key]}
      </p>
    );
  });

  return (
    <form className="grid items-center gap-16 sm:grid-cols-2 sm:gap-y-24 lg:items-stretch lg:gap-x-32 lg:gap-y-14 xl:gap-y-12">
      <div className="flex flex-col gap-7 ms:gap-9 sm:col-span-2 sm:gap-5 md:gap-9 lg:col-span-1 xl:gap-12">
        <label className="text-xl font-bold ms:text-2xl md:text-3xl">
          Palm Type
        </label>
        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
          <input
            type="radio"
            name="palmType"
            className="text-radio-btn hidden"
            checked={props.calcData.palmType === "type-A"}
            id="type-A"
            value="type-A"
            onChange={handleCalcData}
          />
          <label
            className="inline-block cursor-pointer whitespace-nowrap rounded-[10px] bg-lightGray px-2.5 py-1 text-xs font-semibold transition ms:px-3.5 ms:py-1.5 md:px-4 md:py-2 md:text-base lg:px-2.5 lg:py-1 xl:px-4 xl:py-2 xl:text-xl"
            htmlFor="type-A"
          >
            Type A
          </label>

          <input
            type="radio"
            name="palmType"
            className="text-radio-btn hidden"
            checked={props.calcData.palmType === "type-B"}
            id="type-B"
            value="type-B"
            onChange={handleCalcData}
          />
          <label
            className="inline-block cursor-pointer whitespace-nowrap rounded-[10px] bg-lightGray px-2.5 py-1 text-xs font-semibold transition ms:px-3.5 ms:py-1.5 md:px-4 md:py-2 md:text-base lg:px-2.5 lg:py-1 xl:px-4 xl:py-2 xl:text-xl"
            htmlFor="type-B"
          >
            Type B
          </label>

          <input
            type="radio"
            name="palmType"
            className="text-radio-btn hidden"
            checked={props.calcData.palmType === "type-C"}
            id="type-C"
            value="type-C"
            onChange={handleCalcData}
          />
          <label
            className="inline-block cursor-pointer whitespace-nowrap rounded-[10px] bg-lightGray px-2.5 py-1 text-xs font-semibold transition ms:px-3.5 ms:py-1.5 md:px-4 md:py-2 md:text-base lg:px-2.5 lg:py-1 xl:px-4 xl:py-2 xl:text-xl"
            htmlFor="type-C"
          >
            Type C
          </label>

          <input
            type="radio"
            name="palmType"
            className="text-radio-btn hidden"
            checked={props.calcData.palmType === "type-D"}
            id="type-D"
            value="type-D"
            onChange={handleCalcData}
          />
          <label
            className="inline-block cursor-pointer whitespace-nowrap rounded-[10px] bg-lightGray px-2.5 py-1 text-xs font-semibold transition ms:px-3.5 ms:py-1.5 md:px-4 md:py-2 md:text-base lg:px-2.5 lg:py-1 xl:px-4 xl:py-2 xl:text-xl"
            htmlFor="type-D"
          >
            Type D
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-7 ms:gap-9 sm:gap-5 md:gap-9 lg:gap-5 xl:gap-8">
        <label
          htmlFor="palms-number"
          className="text-xl font-bold ms:text-2xl md:text-3xl"
        >
          Number of Palms
        </label>
        {/* <span className="relative mt-5 before:absolute before:left-1 before:top-0 before:-translate-y-[calc(100%+3px)] before:text-2xs before:capitalize before:text-lightGreen before:content-['Enter_a_number_between_1_and_20'] ms:before:text-xs lg:before:text-sm"></span> */}
        <span
          style={{ display: errors.palmsNumber ? "block" : "none" }}
          className="-mb-8 ml-2 text-2xs capitalize text-lightGreen ms:text-xs lg:-mb-6 lg:text-sm xl:text-base"
        >
          Enter a number between 1 and 20
        </span>
        <input
          type="number"
          min="1"
          inputMode="numeric"
          pattern="[0-9]+"
          name="palmsNumber"
          id="palms-number"
          max="20"
          // Turn tha value to String to git get rid of the leading zero
          value={Number(props.calcData.palmsNumber).toString()}
          onChange={handleCalcData}
          className="relative w-full rounded-[10px] border border-transparent bg-lightGray px-4 py-1 font-bold outline outline-2 outline-transparent focus-within:outline-white md:text-lg lg:text-2xl xl:w-2/3 xl:text-2xl"
        />
        <Range
          setCalcData={props.setCalcData}
          min={1}
          max={20}
          onChange={handleCalcData}
          value={props.calcData.palmsNumber}
          name="palmsNumber"
          customNumbers={[1, 5, 10, 15, 20]}
          setShowInvestmentReturns={props.setShowInvestmentReturns}
        />
      </div>
      <div className="flex flex-col gap-7 ms:gap-9 sm:gap-5 md:gap-9 lg:gap-5 xl:gap-8">
        <label
          htmlFor="years-number"
          className="text-xl font-bold ms:text-2xl md:text-3xl"
        >
          Years Number
        </label>
        {/* <span className="relative mt-5 before:absolute before:left-1 before:top-0 before:-translate-y-[calc(100%+3px)] before:text-2xs before:capitalize before:text-lightGreen before:content-['Enter_a_number_between_4_and_10'] ms:before:text-xs lg:before:text-sm"></span> */}
        <span
          style={{ display: errors.yearsNumber ? "block" : "none" }}
          className="-mb-8 ml-2 text-2xs capitalize text-lightGreen ms:text-xs lg:-mb-6 lg:text-sm xl:text-base"
        >
          Enter a number between 4 and 10
        </span>
        <input
          type="number"
          min="4"
          inputMode="numeric"
          pattern="[0-9]+"
          name="yearsNumber"
          id="years-number"
          // Turn tha value to String to git get rid of the leading zero
          value={Number(props.calcData.yearsNumber).toString()}
          max="10"
          onChange={handleCalcData}
          className="relative w-full rounded-[10px] border border-white bg-[#B7FFB273] px-4 py-1 font-bold outline outline-2 outline-transparent focus-within:outline-white md:text-xl lg:text-2xl xl:w-2/3"
        />
        <Range
          setCalcData={props.setCalcData}
          min={4}
          max={10}
          name="yearsNumber"
          value={props.calcData.yearsNumber}
          onChange={handleCalcData}
          setShowInvestmentReturns={props.setShowInvestmentReturns}
        />
      </div>

      {!(Object.keys(errors).length === 0) && (
        <div className="mt-7 grid gap-4 sm:col-span-2 lg:order-last">
          {errorMessages}
        </div>
      )}

      <div className="flex flex-col gap-8 sm:col-span-2 lg:col-span-1">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn border border-darkGreen bg-[#1370548C] text-lg font-bold shadow-6 sm:text-xl lg:absolute lg:bottom-0 lg:left-1/2 lg:z-30 lg:-translate-x-1/2 lg:translate-y-1/2 lg:bg-darkGreen lg:uppercase xl:px-12 xl:py-5 xl:text-2xl"
        >
          Calculate
        </button>
        <div className="flex flex-col items-center justify-center gap-2.5 rounded-full border-2 border-white bg-[#b7ffb240] p-2.5 shadow-7 ms:flex-row lg:flex-grow lg:flex-col lg:items-stretch lg:rounded-[35px] lg:p-4 lg:text-center xl:mt-7">
          <p className="ms:p-2.5 sm:text-xl md:text-2xl">Investor Returns</p>
          <p
            id="investmentReturns"
            className="rounded-full bg-[#7fce7ab3] px-5 py-2 text-3xl font-bold md:text-4xl lg:rounded-[30px] lg:text-5xl xl:text-6xl"
          >
            {getInvestmentReturns(props.calcData)}
          </p>
        </div>
      </div>
    </form>
  );
}

InvestmentCalcForm.propTypes = {
  calcData: PropTypes.shape({
    palmType: PropTypes.string.isRequired,
    palmsNumber: PropTypes.number.isRequired,
    yearsNumber: PropTypes.number.isRequired,
  }),
  setCalcData: PropTypes.func.isRequired,
  setShowInvestmentReturns: PropTypes.func.isRequired,
};
