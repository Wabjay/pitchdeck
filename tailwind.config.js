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
      flexBasis: {
        'big': '280px',
        'large': '504px',
      },
      gridTemplateColumns: {
        'big': '1fr 304px',
        'large': '1fr 479px',
      },
      boxShadow: {
        'navbarLink': '0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset',
        'backButton': '0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset',
      },
      backgroundImage: {
        'green-tick': "url('/src/assets/green_tick.png')",
        'white-tick': "url('/src/assets/white_tick.png')",
        'overlay': 'var(--Overlay-color, linear-gradient(180deg, rgba(1, 26, 39, 0.28) 4.69%, rgba(1, 26, 39, 0.25) 56.25%, rgba(1, 26, 39, 0.37) 100%))'
      },
      colors: {
        'myGreen-400': "#21AB68",
        'green-500': "#3E7B52",

      }
    },
    fontSize: {
      '12': ['12px', {
        lineHeight: '16px'
      }],
      '14': ['14px', {
        lineHeight: '18px'
      }],
      '16': ['16px', {
        lineHeight: '22px'
      }],
      '20': ['20px', {
        lineHeight: '28px',
        letterSpacing: '-0.8px'
      }],
      '24': ['24px', {
        lineHeight: '32px',
        letterSpacing: '-0.96px'
      }],
      '32': ['32px', {
        lineHeight: '39px',
        letterSpacing: '-1px'
      }],
      '40': ['40px', {
        lineHeight: '48.6px',
        letterSpacing: '-1.6px'
      }],
      '48': ['48px', {
        lineHeight: '57.6px',
        letterSpacing: '-1px'
      }],
      '64': ['64px', {
        lineHeight: '72px',
        letterSpacing: '-2px'
      }],

    },
    screens: {
      'tablet': '576px',
      'small': '375px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

