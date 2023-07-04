const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('nativewind/tailwind/css'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
  important: 'html',
  theme: {
    ...theme,
  },
}
