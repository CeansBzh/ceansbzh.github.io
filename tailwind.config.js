module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './vue-tailwind.settings.js', 'node_modules/vue-tailwind/dist/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
