/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  // Use class-based dark mode so toggling `document.documentElement.classList` works
  darkMode: 'class',
  plugins: [],
};
