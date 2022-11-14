/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleish': '#3d3244',
        'pinkish': '#ff79c6',
        'blueish': '#3c3e48',
        'whiteish': '#d2d3d0',
        'transparent': 'transparent'
      }
    },
  },
  plugins: [],
}
