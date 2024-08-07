/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Unbounded', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: []
};
