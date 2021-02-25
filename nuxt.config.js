import { getSiteXmlRoutes } from './utils/routesUtils'
import { BASE_URL, getHeadMetaTags, getHeadFavicons } from './utils/headUtils'

export const i18nLocale = [
  { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
  { code: 'pt-br', iso: 'pt-BR', name: 'Português', file: 'pt-br.js' },
  { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.js' },
]

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vue-flag-icon.ts',
    '@/plugins/i18n-format-date.ts',
    '@/plugins/vue-lazysizes.client.ts',
    '@/plugins/i18n-guard.ts'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/layout/' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/svg',

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    'cookie-universal-nuxt',

    '@nuxtjs/fontawesome',

    // SITEMAP MUST BE ON THE END - https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],
  tailwindcss: {
    exposeConfig: false,
    cssPath: '@/assets/sass/main.pcss',
    configPath: './tailwind.config.js',
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faHeart', 'faEnvelope', 'faFile', 'faChevronLeft'],
      regular: [],
      light: [],
      duotone: [],
      brands: [
        'faJsSquare',
        'faNode',
        'faVuejs',
        'faGithubSquare',
        'faLinkedin',
        'faInstagramSquare',
        'faTwitterSquare',
      ],
    },
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
    seo: false, // initialize on the default layout
    detectBrowserLanguage: false,
  },

  optimizedImages: {
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true
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
    gzip: true,
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
        theme: 'dracula-prism/dist/css/dracula-prism.min.css',
      },
      remarkPlugins: ['remark-emoji'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    standalone: true,
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
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      }
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
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
