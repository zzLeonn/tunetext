/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#121212',
          gray: {
            dark: '#282828',
            light: '#B3B3B3'
          }
        }
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};