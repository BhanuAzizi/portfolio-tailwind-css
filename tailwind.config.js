/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true,
      padding : '16px',
    },

    extend: {
      colors:{
        primary : '#3B3030',
        latar : '#FFF0D1',
        secondary : '#64748b',
        dark : '#0f172a',
        navtext:'#9E7F7F',
        skil:'#F9E2A7'
      },
      
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

