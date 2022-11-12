/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
        "4/5": "4 / 5",
        "3/5": "3 / 5",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
