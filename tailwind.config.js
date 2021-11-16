module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  safelist: ['sm:w-1/2', 'lg:w-1/4'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
