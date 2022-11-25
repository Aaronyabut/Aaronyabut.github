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
      },
      spacing: {
        '50': '14rem',
        '120': '28rem',
        '128': '32rem',
        '140': '37rem',
        '150': '45rem',
        '160': '53rem',
      },
      zIndex: {
        '1000': '1000',
      },
      width: {
        '1000': '62.5rem',
        '500': '31.25rem',
      },
      height: {
        '500': '31.25rem',
      },
      minHeight: {
        '500': '31.25rem',
      },
      backgroundImage: {
        'temp-img': "url(https://source.unsplash.com/collection/905011/1000x1000)",
      },
      boxShadow: {
        '3xl': '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
      },
      fontSize: {
        2.5: '2.7rem',
      },
      padding: {
        'desc': '0 24px 24px',
      },
    },
  },
  plugins: [],
}
