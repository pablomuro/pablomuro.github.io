import getRoutes from './utils/getRoutes'
import { BASE_URL, getHeadMetaTags, getHeadFavicons } from './utils/headUtils'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/composition-api'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],

  // I18n module configuration (https://i18n.nuxtjs.org/)
  i18n: {
    baseUrl: BASE_URL,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
      { code: 'pt-br', iso: 'pt-BR', name: 'Português', file: 'pt-br.js' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.js' },
    ],
    strategy: 'no_prefix',
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },

  // Sitemap module configuration (https://www.npmjs.com/package/@nuxtjs/sitemap)
  sitemap: {
    hostname: BASE_URL,
    // gzip: true,
    routes: getRoutes,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: 'blog-posts',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
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
      ...getHeadMetaTags(),
    ],
    link: [...getHeadFavicons(), { rel: 'manifest', href: '/manifest.json' }],
  },
}
