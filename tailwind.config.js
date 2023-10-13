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
      colors: {
        darkGreen: "#137054",
        midGreen: "#4F9D5D",
        lightGreen: "#7FCE7A",
        darkBlue: "#00263A",
        mintyGray: "#EFFFEE",
      },
      screens: {
        ms: "400px",
      },
      backgroundImage: {
        gradiant:
          " linear-gradient(90deg,#137054 0%,#efffee80 15%,#efffee80 85%,#137054 100%)",
        "gradiant-t-b": "linear-gradient(180deg, #00263A 0%, #137054 100%)",
        "gradient-270": "linear-gradient(270deg, var(--tw-gradient-stops))",
      },
      boxShadow: {
        light: "0px 15px 20px 0px rgba(0, 0, 0, 0.10) ",
        spread: "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
        features: "0px 0px 100px 0px rgba(127, 206, 122, 0.40)",
      },
    },
  },
  plugins: [],
};
