/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#00d4aa" },
      animation: { "fade-in": "fadeIn 0.5s ease-in-out" },
    },
  },
  plugins: [],
  darkMode: "class",
};
