/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#294F80",
        darkblue2: "#213E63",
        lightgrey: "#8C8C8C",
        hover: "#193458",
      },
    },
  },
  plugins: [],
};
