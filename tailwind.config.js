/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.ejs",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    container: {
      center: true,
      screens: {

        xl: "1296px",

      },
    },
    screens: {
      xl: "1296px",
    },
    extend: {
      colors: {
        "lightGrey": "#CCCCCC"
      },
    },
  },
};
