/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      headerBg: "#541554",
      sectionBg: "#F4EDE4",
    },
    extend: {},
  },
  plugins: [],
};
