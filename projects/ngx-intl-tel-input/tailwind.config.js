// https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l
const defaultTheme = require('tailwindcss/defaultTheme');
const ajarColors = {
  ajar: {
    50: '#F4F8FB',
    100: '#E8F0F7',
    200: '#C6DAEC',
    300: '#A3C3E0',
    400: '#5F97C8',
    500: '#1A6AB1',
    600: '#175F9F',
    700: '#145085',
    800: '#10406A',
    900: '#0D3457',
    950: '#21D0A9',
    lightblue: '#02c2c9',
    inactive: '#BCBCBC',
    darkblue: '#144069',
    blue: '#000066',
    red: '#FF6B60',
    plan1: '#199ED3',
    plan2: '#1A6AB1',
    plan3: '#000066',
  },
};

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: ajarColors,
      minWidth: { ...defaultTheme.spacing, ...defaultTheme.width },
      minHeight: { ...defaultTheme.spacing, ...defaultTheme.height },
      maxWidth: { ...defaultTheme.spacing, ...defaultTheme.width },
      maxHeight: { ...defaultTheme.spacing, ...defaultTheme.height },
      boxShadow: {
        around: '0px 0px 5px 1px #ccc',
        around2: '0 0px 6px -1px rgba(0, 0, 0, 0.15), 0 0px 4px -1px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        en: ['Roboto', 'ui-sans-serif'],
        ar: ['Cairo', 'ui-sans-serif'],
      },
    },
    borderStyles: {
      styles: false,
      colors: true, // defaults to false
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwindcss-rtl'), require('tailwindcss-border-styles')()],
};
