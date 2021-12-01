const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["*html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        vgb: "hsl(217, 19%, 35%)",
        db: "hsl(214, 17%, 51%)",
        gb: "hsl(212, 23%, 69%)",
        lgb: "hsl(210, 46%, 95%)",
      },
      backgroundImage: {
        img: "url('/public/images/drawers.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
