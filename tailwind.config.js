/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg,png}"],
  theme: {
    extend: {
      colors: {
        primary: "#be0919",
        light: "#ffffff",
        secondary: "#9b9999",
        tertiary: "#e4e4e4",
        black: "#13131a",
        gradientStart: "#e50525",
        gradientEnd: "#89030e",
        overlay: "#000000d2",
        overlay1: "#000000de",
        bannerOverlay: "#00000070",
        new: "#ea9012",
        count: "#3c3c44",
        cartGradientStart: "#a9be5e",
        cartGradientEnd: "#6d7c3c",
        error: "#FF0000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        clamp: "clamp(1.8rem, 6vw, 6rem)",
        authClamp: "clamp(1.75rem, 5.5vw, 5.5rem)",
      },

      backgroundImage: {
        texture: "url(/src/assets/texture-bg.png)",
        loginImage: "url(/src/assets/login.jpg)",
        signupImage: "url(/src/assets/signup.jpg)",
      },
      screens: {
        xs: "475px",
        average: "1032px",
      },
      maxWidth: {
        max_lg: "1024px",
        max_tomato: "7rem",
      },
    },
  },
  plugins: [],
};
