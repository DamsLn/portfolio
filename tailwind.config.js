/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/js/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sfPro': ['SF-Pro']
    },
    colors: {
      'primary': '#7A82AB',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey-light': '#979A9A',
      'grey-dark': '#AFAFAF',
      'dark-blue': '#34495E',
      'green': '#52BE80',
      'yellow': '#F7DC6F',
    }
  },
  plugins: [],
}
