/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        "main-teal": '#369699',
        "main-orange": "#FF6016",
        "main-grey": "#444444",
        "sub-green": "#479C34",
        "sub-blue": "#3C71B4",
        "sub-teal": "#1FADB3",
        "sub-grey": "#7F7F7F",
        "sub-background": "#F7A67A",
        "grey-background": "#F0F2F5",
        "sub-greybackground": "#F3F3F3",
        "und-orange": "#FFAE84"
      }
    },
    screens: {
      'lg': {
        'max': '1280px'
      },
      'md': {
        'max': '1024px'
      },
      'sm': {
        'max': '768px'
      },
      'xs': {
        'max': '640px'
      },
      '2xs': {
        'max': '375px'
      },
      '3xs': {
        'max': '320px'
      }
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
