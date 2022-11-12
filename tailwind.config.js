/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1140px",
        "2xl": "1366px",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
