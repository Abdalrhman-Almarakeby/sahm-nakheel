import { useState } from "react";
import InvestmentCalcForm from "../components/InvestmentCalcForm";
import InvestmentReturnsTable from "../components/InvestmentReturnsTable";

export default function InvestmentCalc() {
  const [calcData, setCalcData] = useState({
    palmType: "type-A",
    palmsNumber: 1,
    yearsNumber: 4,
  });
  const [showInvestmentReturns, setShowInvestmentReturns] = useState(false);

  return (
    <>
      <section className="breakable-container break-container pt-14 sm:pt-20 lg:px-20 lg:pt-32 xl:px-24">
        <h3 className="px-5 text-center text-3xl font-black uppercase text-darkBlue ms:text-4xl sm:text-5xl lg:text-6xl">
          Your investment <span className="text-darkGreen">calculator</span>
        </h3>
        <div className="breakable-container break-container lg:undo-break-container lg:undo-break-container relative mt-12 bg-darkBlue px-10 py-14 text-white ms:p-16 lg:mt-20 lg:rounded-[35px] lg:p-14 lg:pb-28">
          <InvestmentCalcForm
            setShowInvestmentReturns={setShowInvestmentReturns}
            calcData={calcData}
            setCalcData={setCalcData}
          />
        </div>
      </section>
      <span id="investmentReturns"></span>
      {showInvestmentReturns && <InvestmentReturnsTable calcData={calcData} />}
    </>
  );
}
