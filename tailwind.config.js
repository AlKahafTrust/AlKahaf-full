
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
        fontFamily: {
          lato: ['Lato', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        colors: {
          'primary': '#052e16',
          'secondary': '#fcd34d',
          'accentprimary': '#0d9488',
          'accentsecondary': '#b45309',
          'kahafneutral': '#f0fdf4',
          
        },
  
    },
  },
  plugins: [],
}