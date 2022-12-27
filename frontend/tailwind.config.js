const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./{pages,components,screens}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'Kantumruy', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4605',
          '50': '#FFCEBD',
          '100': '#FFBFA8',
          '200': '#FFA17F',
          '300': '#FF8257',
          '400': '#FF642E',
          '500': '#FF4605',
          '600': '#CC3500',
          '700': '#942600',
          '800': '#5C1800',
          '900': '#240900'
        },
        'bluesky': {
          DEFAULT: '#EFF3FA',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#EFF3FA',
          '600': '#C4D3ED',
          '700': '#9AB3DF',
          '800': '#6F93D2',
          '900': '#4473C5'
        },
        background: '#FF4605',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};