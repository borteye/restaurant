/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg,png}"],
  theme: {
    extend: {
      colors: {
        primary: "#be0919",
        light: "#ffffff",
        secondary: "#9b9999",
        black: "#13131a",
        gradientStart: "#e50525",
        gradientEnd: "#89030e",
        overlay: "#000000d2",
        new: "#ea9012",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        clamp: "clamp(1.8rem, 6vw, 6rem)",
      },
      width: {
        clamp: "clamp(20rem, 20vw, 25rem)",
      },
      backgroundImage: {
        heroImage: "url(/src/assets/texture-bg.png)",
      },
      screens: {
        average: "1032px",
      },
    },
  },
  plugins: [],
};
