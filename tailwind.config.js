/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/js/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '90vh': '90vh',
      },
    },
    screens: {
      'sm': '320px',
      'md': '820px',
      'lg': '1100px',
      'xl': '1500px',
    },
    fontFamily: {
      'sfPro': ['SF-Pro']
    },
    fontSize: {
      '40': '40px',
      '32': '32px',
      '26': '26px',
      '24': '24px',
      '20.8': '20.8px',
      '16': '16px',
    },
    colors: {
      'primary': '#6366F1',
      'primary-dark': '#4338CA',
      'sky-500': '#0EA5E9',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#F2F3F4',
      'grey-light': '#979A9A',
      'grey-dark': '#AFAFAF',
      'grey-info': '#5C5C5C',
      'dark-blue': '#34495E',
      'green': '#52BE80',
      'yellow': '#F7DC6F',
    },
    spacing: {
      '0': '0px',
      '5': '5px',
      '8': '8px',
      '10': '10px',
      '12.5': '12.5px',
      '13': '13px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '25': '25px',
      '41': '41px',
      '60': '60px',
      '70': '70px',
      '91': '91px',
      '117': '117px',
      '153': '153px',
      '300': '300px',
      '20%': '20%',
      '80%': '80%',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
    },
    lineHeight: {
      '17': '68px',
    },
  },
  plugins: [],
}
