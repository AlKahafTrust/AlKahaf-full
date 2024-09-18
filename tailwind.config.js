
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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