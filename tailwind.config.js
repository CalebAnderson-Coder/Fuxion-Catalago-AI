/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        fuxion: {
          blue: '#009FE3',
          darkBlue: '#005C8F',
          green: '#8CC63F',
          orange: '#F7931E',
          purple: '#662D91',
          red: '#ED1C24',
          pink: '#EC008C',
          gold: '#D6A461',
          darkGray: '#4D4D4D',
          lightGray: '#808080',
          price: '#E29E4A',
          priceDark: '#D48D35'
        }
      },
      boxShadow: {
        'pdf': '0 4px 20px rgba(0,0,0,0.08)',
      }
    }
  },
  plugins: [],
}
