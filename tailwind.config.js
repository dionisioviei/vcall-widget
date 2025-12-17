/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f5f6',
          100: '#e6e6e8',
          200: '#d0d0d3',
          300: '#adadb3',
          400: '#84848e',
          500: '#343640',
          600: '#2d2e38',
          700: '#26272f',
          800: '#1f2026',
          900: '#18181d',
          950: '#111114'
        },
        primary: {
          DEFAULT: '#343640',
          50: '#f5f5f6',
          100: '#e6e6e8',
          200: '#d0d0d3',
          300: '#adadb3',
          400: '#84848e',
          500: '#343640',
          600: '#2d2e38',
          700: '#26272f',
          800: '#121213',
          900: '#18181d',
          950: '#111114'
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
