/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/js/*.js',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '390px',
      'md': '820px',
      'lg': '1100px',
      'xl': '1500px',
    },
    fontFamily: {
      'sfPro': ['SF-Pro']
    },
    fontSize: {
      '68': '68px',
      '32': '32px',
      '26': '26px',
      '24': '24px',
      '20.8': '20.8px',
      '16': '16px',
    },
    colors: {
      'primary': '#7A82AB',
      'primary-dark': '#616786',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#F2F3F4',
      'grey-light': '#979A9A',
      'grey-dark': '#AFAFAF',
      'dark-blue': '#34495E',
      'green': '#52BE80',
      'yellow': '#F7DC6F',
    },
    spacing: {
      '5': '5px',
      '8': '8px',
      '10': '10px',
      '13': '13px',
      '20': '20px',
      '24': '24px',
      '41': '41px',
      '60': '60px',
      '91': '91px',
      '117': '117px',
      '153': '153px',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
    }
  },
  plugins: [],
}
