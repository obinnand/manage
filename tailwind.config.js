/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "822px",
        lg: "1020px",
        xl: "1440px",
      },
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        Users: "url('../images/bg-simplify-section-desktop.svg')",
        Usersmobile: "url('../images/bg-simplify-mobile.svg')",
      },
    },
  },
  plugins: [],
};
