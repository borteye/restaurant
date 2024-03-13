/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg,png}"],
  theme: {
    extend: {
      colors: {
        primary: "#be0919",
        light: "#ffffff",
        secondary: "#9b9999",
        gradientStart: "#e50525",
        gradientEnd: "#89030e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        heroImage: "url(/src/assets/texture-bg.png)",
      },
    },
  },
  plugins: [],
};
