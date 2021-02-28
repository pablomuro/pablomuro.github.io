const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./**/*.vue',
      'plugins/**/*.ts',
      'nuxt.config.js',
      'blog-posts/**/*.md',
      'content/**/*.md', // TODO - add future blog posts folder
    ],
    options: {
      safelist: ['dark-mode'],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.gray,

      theme: {
        100: 'var(--theme-100)',
        200: 'var(--theme-200)',
        300: 'var(--theme-300)',
        400: 'var(--theme-400)',
        500: 'var(--theme-500)',
        600: 'var(--theme-600)',
        700: 'var(--theme-700)',
        lime: 'var(--lime)',
        magenta: 'var(--magenta)',
        cyan: 'var(--cyan)',
        p: 'var(--p-color)'
      },
    },
    extend: {
      fontSize: {
        inherit: 'inherit'
      }
    },
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
