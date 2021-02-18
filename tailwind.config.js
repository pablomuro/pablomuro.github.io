const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './**/*.vue',
    'plugins/**/*.ts',
    'nuxt.config.js',
    'blog-posts/**/*.md',
    'content/**/*.md', // TODO - add future blog posts folder
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        default: {
          DEFAULT: 'var(--default-color)',
          light: 'var(--default-color-light)',
          dark: 'var(--default-color-dark)',
        },
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
