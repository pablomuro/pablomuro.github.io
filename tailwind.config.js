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
        default: { ...colors.blueGray, tag: '#3b3b4f' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
