/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'black': '#18181B',
        'black':'#27272A',
        'gradient':'#06B6D4',
        'gradient':'#0E7490',
        'gradient':'#0284C7',        
      },
      backgroundImage:{
        'section-gradient': 'linear-gradient(274.03deg, #06B6D4 0%, #0E7490 0.01%, #0284C7 100%)'
      },

      fontFamily:{
        Mulish: ['Mulish'],
        nunito: ["'Nunito Sans', sans-serif"],
        montserrat:["'Montserrat', sans-serif"]
      },
    },
  },
  plugins: [],
}

