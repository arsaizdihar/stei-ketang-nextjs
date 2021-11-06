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
        primary: ['SF Pro Display', ...fontFamily.sans],
        title:['Valorant', ...fontFamily.sans]
      },
      colors: {
        'primary': '#243c5a',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
