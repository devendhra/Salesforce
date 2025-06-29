/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xl1440': '1440px',
        'xs402': '402px', 
      },
      colors: {
        brand: {
          dark: '#032D60',
          light: '#0176D3',
          DEFAULT: '#EAF5FE',
          footer: '#0B5CAB',
        },
      },
      borderRadius: {
        sm: '5px',
      },
    },
  },
  plugins: [
     
    require('tailwind-scrollbar-hide'),
    plugin(function 
      ({ addComponents, theme }) {
      addComponents({
        // Primary Button
        '.btn-primary': {
          fontSize: theme('fontSize.base'),
          backgroundColor: '#0176D3',
          color: theme('colors.white'),
          borderRadius: '5px',
          fontWeight: theme('fontWeight.semibold'),
          paddingTop: theme('spacing.3'),
          paddingBottom: theme('spacing.3'),
          paddingLeft: theme('spacing.8'),
          paddingRight: theme('spacing.8'),
          width: '100%',
          '@screen md': {
            width: 'fit-content',
          },
          '&:hover': {
            backgroundColor: theme('colors.brand.dark'),
          },
        },

        // Secondary Button
        '.btn-secondary': {
          borderWidth: '2px',
          borderRadius: theme('borderRadius.sm'),
          borderColor: theme('colors.brand.light'),
          color: theme('colors.brand.light'),
          backgroundColor: theme('colors.white'),
          fontWeight: theme('fontWeight.semibold'),
          paddingTop: '11px',
          paddingBottom: '11px',
          paddingLeft: theme('spacing.8'),
          paddingRight: theme('spacing.8'),
          width: '100%',
          '@screen md': {
            width: 'fit-content',
          },
          '&:hover': {
            backgroundColor: theme('colors.brand.DEFAULT'),
            color: theme('colors.brand.dark'),
            borderColor: theme('colors.brand.dark'),
          },
        },
      });
    }),
  ],
}

