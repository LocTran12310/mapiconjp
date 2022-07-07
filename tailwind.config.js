/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'md': {
        'max': '1250px'
      },
      'sm': {
        'max': '768px'
      },
      'xs': {
        'max': '500px'
      },
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
