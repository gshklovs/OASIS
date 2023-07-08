/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 300deg at 50% 75%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        atyre: ["ATYRE-logo-font", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
