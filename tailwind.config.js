/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Poppins: " 'Poppins', sans-serif",
    },
    extend: {
      fontSize: {
        "2xs": "0.625rem",
      },
      colors: {
        darkGreen: "#137054",
        midGreen: "#4F9D5D",
        lightGreen: "#7FCE7A",
        darkBlue: "#00263A",
        mintyGray: "#EFFFEE",
        darkGray: "#969696",
        lightGray: "#ffffff59",
      },
      screens: {
        ms: "400px",
      },
      backgroundImage: {
        gradient:
          " linear-gradient(90deg,#137054 0%,#efffee80 15%,#efffee80 85%,#137054 100%)",
        "gradient-t-b": "linear-gradient(180deg, #00263A 0%, #137054 100%)",
        "gradient-270": "linear-gradient(270deg, var(--tw-gradient-stops))",
        plans: "linear-gradient(32deg, #56B794 0%, #137054 100%)",
      },
      boxShadow: {
        1: "0px 15px 20px 0px rgba(0, 0, 0, 0.10) ",
        2: "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
        3: "0px 0px 100px 0px rgba(127, 206, 122, 0.40)",
        4: "-25px 25px 100px 0px rgba(127, 206, 122, 0.50)",
        5: "-100px 100px 150px 0px rgba(54, 180, 140, 0.20)",
        6: "0px 14px 35px 0px rgba(54, 180, 140, 0.40)",
        7: " -75px 75px 150px 0px #137054",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
        35: "35px",
      },
    },
  },
  plugins: [],
};
