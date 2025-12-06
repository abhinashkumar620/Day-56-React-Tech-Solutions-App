/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        dark: '#0e1218',
      },
      fontFamily: {
      bbh: ['BBH Sans Bartle', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif'],
      michroma: ['Michroma', 'sans-serif'],
      sharetech: ['Share Tech', 'sans-serif'],
       tektur: ['Tektur', 'sans-serif'],
  },
  
    },
  },

  plugins: [],
}
