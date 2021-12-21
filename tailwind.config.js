const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      red: '#e73433',
      white: '#f4f4f4',
      black: '#0F172A'
    },
    fontSize: {
      'title': '3.5rem',
      '4x1.5':'2.18rem',
      '4x1':'2rem',
      '5x1':'3rem',
      '8x1':'6rem',
      '9x1':'7rem',
      '11x1':'9rem',
    },

    width: {
      '10':'10%',
      '30':'30%',
      '90': '90%',
      '75':'75%',
      '40':'40%',
      '60':'60%',
      '100':'100%'
    },

    margin: {
      'footerXL': '15%',
      'footerS': '40%',
      '2':'2%',
      '3':'3%',
      '5':'5%'
     },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '991px',

    },
    gridTemplateColumns: {
      'contentXL': '40px 10px 1fr',

      'coverXL': '40px 2% 40% 2% 42% 10%',
      'coverM': '40px 2% 50% 2% 32% 10%',
      'coverS': '40px 2% 1fr',

      'historiaXL': '45% 55%',
      'historiaS': '100%',

      'footer': '40px 1fr',
    },
    gridTemplateRows: {
      'contentXL': '50px 50px 10px 1f',
 
      'coverXL': '50px 10px 28% 28% 23% 1fr',
      'coverM': '40px 50px 10px 31% 20% 20% 10%',
      'coverS': '8% 8% 2% 35% 8% 18% 1% 20%',
    },
    fontFamily: {
      sans: ['Secular One', 'sans-serif'],
      serif: ['Merienda Oner', 'serif'],
    },

    borderWidth: {
      DEFAULT: '1px',
      '10': '10px',
      '6': '6px',
      '3': '3px',
    },
    padding: {
      '0': '0',
      '2': '2%',
      '3': '3%',
      '4': '4%',
      '5': '5%',
      '6': '6%',
      '8': '8%',
      '8px':'8px',

     },


    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
