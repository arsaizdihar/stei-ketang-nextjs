const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "SF Pro Display", ...fontFamily.sans],
        title: ["Valorant", ...fontFamily.sans],
      },
      fontSize: {
        custom: ["20px", "26px"],
      },
      colors: {
        primary: "#163162",
        secondary: "#78CD98",
        tertiary: "#324283",
        quartiary: "#6BAE8599",
        fiftiary: "#78CD98",
        covers: "#F7F7F7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
