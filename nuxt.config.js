import { getSiteXmlRoutes } from './utils/routesUtils'
import { BASE_URL, getHeadMetaTags, getHeadFavicons } from './utils/headUtils'

const i18nLocale = [
  { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
  { code: 'pt-br', iso: 'pt-BR', name: 'Português', file: 'pt-br.js' },
  { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.js' },
]

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/sass/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-flag-icon.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],
  tailwindcss: {
    exposeConfig: false,
    cssPath: '@/assets/sass/tailwind.css',
    configPath: './tailwind.config.js',
  },

  // I18n module configuration (https://i18n.nuxtjs.org/)
  i18n: {
    baseUrl: BASE_URL,
    locales: i18nLocale,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      // onlyOnRoot: true,
      alwaysRedirect: true,
    },
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { minutes } = require('reading-time')(document.text)

        document.readingTime = minutes
      }
    },
  },

  // Sitemap module configuration (https://www.npmjs.com/package/@nuxtjs/sitemap)
  sitemap: {
    hostname: BASE_URL,
    // gzip: true,
    routes: getSiteXmlRoutes,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  /* Layout Transitions */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  /* Page Transitions */
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: './blog-posts',
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css',
      },
      remarkPlugins: ['remark-emoji'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    transpile: ['vue-flag-icon'],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Pablo A. Muro Martinez's personal web site and blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'author',
        name: 'author',
        content: 'Pablo A. Muro Martinez',
      },
      ...getHeadMetaTags(),
    ],
    link: [...getHeadFavicons(), { rel: 'manifest', href: '/manifest.json' }],
  },

  webpack: {
    ignored: '/node_modules/',
  },
}
