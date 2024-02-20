/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "border-gray": "#cbcfd3 ",
        "bg-gray": "#f9f9fa",
        "ultra-red": "#FF0000",
        "label-gry": "#79818c",
      },
    },
  },
  plugins: [],
};
