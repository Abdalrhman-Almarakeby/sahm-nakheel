import PropTypes from "prop-types";

export default function InvestmentReturnsTable({
  calcData: { palmType, palmsNumber, yearsNumber },
}) {
  function getPalmsData(palmType, palmsNumber) {
    const palmsData = {};
    switch (palmType) {
      case "type-A":
        palmsData.palmCost = 2500;
        palmsData.offShoots = 4 * palmsNumber;
        palmsData.dates = 25;
        palmsData.price = 300;
        break;
      case "type-B":
        palmsData.palmCost = 2000;
        palmsData.offShoots = 3 * palmsNumber;
        palmsData.dates = 20;
        palmsData.price = 250;
        break;
      case "type-C":
        palmsData.palmCost = 1500;
        palmsData.offShoots = 2 * palmsNumber;
        palmsData.dates = 15;
        palmsData.price = 200;
        break;
      case "type-D":
        palmsData.palmCost = 1000;
        palmsData.offShoots = 1 * palmsNumber;
        palmsData.dates = 10;
        palmsData.price = 180;
        break;
    }

    return palmsData;
  }

  // Get an array of the years
  const years = [];
  for (let i = 4; i <= yearsNumber; i++) {
    years.push(i);
  }

  const palmsData = getPalmsData(palmType, palmsNumber);

  return (
    <section className="break-container sm:undo-break-container mt-14 overflow-x-auto px-4 lg:mt-20 lg:px-10 xl:mt-28">
      <table className="w-full overflow-hidden rounded-t-[20px] text-center text-2xs ms:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        <thead className="bg-[#EFEFEF] font-bold">
          <tr>
            <td className="whitespace-nowrap p-3 text-darkBlue sm:p-5">
              Years<>&nbsp;</>
              <span className="hidden xl:inline-block">Number</span>
            </td>
            <td className="whitespace-nowrap p-3 text-darkGreen sm:p-5">
              Dates<>&nbsp;</>
              <span className="hidden xl:inline-block">Produced</span>
            </td>
            <td className="whitespace-nowrap p-3 text-darkGreen sm:p-5">
              <span className="hidden xl:inline-block">
                Date<>&nbsp;</>
              </span>
              Price
            </td>
            <td className="whitespace-nowrap p-3 text-lightGreen sm:p-5">
              Off shoots<>&nbsp;</>
              <span className="hidden xl:inline-block">Produced</span>
            </td>
            <td className="whitespace-nowrap p-3 text-lightGreen sm:p-5">
              <span className="hidden xl:inline-block">
                Off shoots<>&nbsp;</>
              </span>
              Price
            </td>
          </tr>
        </thead>
        <tbody>
          {years.map((year) => (
            <tr
              className="border-lightGreen last:border-none ms:border-b"
              key={year}
            >
              <td className="p-3 font-semibold text-darkBlue sm:p-5">
                #{year}
              </td>
              <td className="whitespace-nowrap p-3 font-semibold text-darkGreen sm:p-5">
                {palmsData.dates} Kilos
              </td>
              <td className="whitespace-nowrap p-3 font-semibold text-darkGreen sm:p-5">
                {palmsData.price} EGP
              </td>
              <td className="p-3 font-semibold text-lightGreen sm:p-5">
                {palmsData.offShoots}
              </td>
              <td className="whitespace-nowrap p-3 font-semibold text-lightGreen sm:p-5">
                {palmsData.palmCost} EGP
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

InvestmentReturnsTable.propTypes = {
  calcData: PropTypes.shape({
    palmType: PropTypes.oneOf(["type-A", "type-B", "type-C", "type-D"]),
    palmsNumber: PropTypes.oneOf([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]),
    yearsNumber: PropTypes.oneOf([4, 5, 6, 7, 8, 9, 10]),
  }).isRequired,
};
