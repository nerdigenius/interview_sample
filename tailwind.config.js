/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'cursive'],
        'sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

