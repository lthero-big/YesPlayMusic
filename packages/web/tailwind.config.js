/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const pickedColors = require('./scripts/pickedColors.js')

module.exports = {
  content: ['./index.html', './**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ...pickedColors,
        brand: colors.blue,
        gray: colors.neutral,
      },
    },
  },
  variants: {},
}