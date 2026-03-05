/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b689b6',
        bg: '#101010',
        'nav-color': '#fff',
        'text-color': '#fff',
        'side-nav': '#101010',
        'search-text': '#fff',
        'nav-text': '#f77124',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
