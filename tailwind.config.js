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
        lightGreen: "#7FCE7A",
        darkGreen: "#137054",
        darkBlue: "#00263A",
      },
      fontSize: {
        md: "0.9375rem",
      },
    },
  },
  plugins: [],
};
