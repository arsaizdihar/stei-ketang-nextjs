const { fontFamily } = require('tailwindcss/defaultTheme');
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
        primary: ['Inter', ...fontFamily.sans],
        title:['Valorant', ...fontFamily.sans]
      },
      colors: {
        'primary': '#163162',
        'secondary': '#78CD98',
        'tertiary' : '#324283',
        'covers':'#F7F7F7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
