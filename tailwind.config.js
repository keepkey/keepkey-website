/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#b79862'
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
