/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "xplore-pink": {
          100: "#FF348E",
          200: "#d42a75",
        },
      },
    },
  },
  plugins: [],
};
