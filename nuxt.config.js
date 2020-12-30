export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Pablo A. Muro Martinez's personal web site and blog",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/manifest.json' },
    ],
  },

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
  i18n: {},

  // Sitemap module configuration (https://www.npmjs.com/package/@nuxtjs/sitemap)
  sitemap: {},

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
  },
}
