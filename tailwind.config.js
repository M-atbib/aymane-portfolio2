/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      general: "Montserrat, sans-serif",
      title: "Bruno Ace Sc, sans-serif",
    },
    extend: {
      colors: {
        gunmetal: "#022b3a",
        teal: "#1f7a8c",
        columbia: "#bfdbf7",
        lavender: "#e1e5f2",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
