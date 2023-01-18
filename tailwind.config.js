/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#b79862',
        'dark-gold': '#b59761',
        'tan': 'rgba(247,220,174,.14)'
      },
    },
    container: {
      center: true,
      padding: '1.2rem',
      screens: {
        '2xl': '1300px',
      }
    },
    borderWidth: {
      '3': '3px',
    }
  },
  plugins: [],
}
