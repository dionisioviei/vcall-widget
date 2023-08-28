/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf8ff',
          100: '#d6ecff',
          200: '#b6e0ff',
          300: '#83ceff',
          400: '#49b2ff',
          500: '#1f8eff',
          600: '#086dff',
          700: '#0155f4',
          800: '#0947cc',
          900: '#0e3e9a',
          950: '#0e275d'
        }
      },
      borderRadius: {
        md: '4px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')],
  corePlugins: {
    preflight: false
  }
}
