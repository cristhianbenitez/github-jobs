/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'searchbar-background': "url('/src/assets/backgroundImg.png')"
      },
      colors: {
        lightGray: '#B9BDCF'
      }
    }
  },
  plugins: []
};
