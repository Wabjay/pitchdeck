/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    fontFamily: {
      'san': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      boxShadow: {
      'navbarLink':  '0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset',
        'backButton': '0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset',
    },
    backgroundImage: {
      'green-tick': "url('/src/assets/green_tick.png')",
      'white-tick': "url('/src/assets/white_tick.png')",
    }
},
screens: {
  'tablet': '576px',
  // => @media (min-width: 640px) { ... }

  'laptop': '1024px',
  // => @media (min-width: 1024px) { ... }

  'desktop': '1280px',
  // => @media (min-width: 1280px) { ... }
},
  },
  plugins: [],
}

