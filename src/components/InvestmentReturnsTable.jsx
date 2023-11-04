import PropTypes from "prop-types";

export default function InvestmentReturnsTable({ calcData }) {
  // Get an array of the years
  const years = [];
  for (let i = 4; i <= calcData.yearsNumber; i++) {
    years.push(i);
  }

  function getTableData(calcData) {
    const palmsData = {};

    // Set the cost of the palm and the yearly return on investment (Yearly ROI)
    //  depends on the palm type
    switch (calcData.palmType) {
      case "type-A":
        palmsData.palmCost = 2500;
        palmsData.offShoots = 4 * calcData.palmsNumber;
        palmsData.dates = 25;
        palmsData.price = 300;
        break;
      case "type-B":
        palmsData.palmCost = 2000;
        palmsData.offShoots = 3 * calcData.palmsNumber;
        palmsData.dates = 20;
        palmsData.price = 250;
        break;
      case "type-C":
        palmsData.palmCost = 1500;
        palmsData.offShoots = 2 * calcData.palmsNumber;
        palmsData.dates = 15;
        palmsData.price = 200;
        break;
      case "type-D":
        palmsData.palmCost = 1000;
        palmsData.offShoots = 1 * calcData.palmsNumber;
        palmsData.dates = 10;
        palmsData.price = 180;
        break;
    }

    return palmsData;
  }

  return (
    <section className="mt-14 overflow-x-auto px-4 lg:mt-20 lg:px-24 xl:mt-28">
      <table className="w-full overflow-hidden rounded-t-[20px] text-center text-2xs ms:text-sm md:text-base lg:text-lg xl:text-xl">
        <thead className="bg-[#EFEFEF] font-bold">
          <tr>
            <td className="p-3 text-darkBlue ms:p-5 xl:whitespace-nowrap">
              Years <span className="hidden md:inline-block">Number</span>
            </td>
            <td className="p-3 text-darkGreen ms:p-5 xl:whitespace-nowrap">
              Dates<span className="hidden md:inline-block"> Produced</span>
            </td>
            <td className="p-3 text-darkGreen ms:p-5 xl:whitespace-nowrap">
              <span className="hidden md:inline-block">Date </span>Price
            </td>
            <td className="p-3 text-lightGreen ms:p-5 xl:whitespace-nowrap">
              Off shoots
              <span className="hidden md:inline-block"> Produced</span>
            </td>
            <td className="p-3 text-lightGreen ms:p-5 xl:whitespace-nowrap">
              <span className="hidden md:inline-block">Off shoots </span>Price
            </td>
          </tr>
        </thead>
        <tbody>
          {years.map((year) => (
            <tr
              className="border-lightGreen last:border-none ms:border-b"
              key={year}
            >
              <td className="p-3 font-semibold text-darkBlue ms:p-5">
                #{year}
              </td>
              <td className="p-3 font-semibold text-darkGreen ms:p-5 xl:whitespace-nowrap">
                {getTableData(calcData).dates} Kilos
              </td>
              <td className="p-3 font-semibold text-darkGreen ms:p-5 xl:whitespace-nowrap">
                {getTableData(calcData).price} EGP
              </td>
              <td className="p-3 font-semibold text-lightGreen ms:p-5">
                {getTableData(calcData).offShoots}
              </td>
              <td className="p-3 font-semibold text-lightGreen ms:p-5 xl:whitespace-nowrap">
                {getTableData(calcData).palmCost} EGP
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

InvestmentReturnsTable.propTypes = {
  palmType: PropTypes.oneOf(["type-A", "type-B", "type-C", "type-D"]),
  palmsNumber: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]),
  yearsNumber: PropTypes.oneOf([4, 5, 6, 7, 8, 9, 10]),
};
