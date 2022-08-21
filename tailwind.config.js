/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      's': '375px',
      'xs': '475px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      height: {
        '98': '30rem',
        '100': '36rem'
      }
    },
  },
  plugins: [],
}
