/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // borderWidth: {
    //   DEFAULT: '1px',
    //   '0.5': '0.5',
    // },
    extend: {
      colors: {
        gray: "#ccc",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
