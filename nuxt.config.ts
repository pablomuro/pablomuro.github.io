import { getSiteXmlRoutes } from './utils/routesUtils'
import { BASE_URL, getHeadMetaTags, getHeadFavicons } from './utils/headUtils'
import { defaultLocale, i18nLocale } from './nuxt.default.config'
import { coverGenerate, coverImagePlaceholder, openGraphImagePlaceholder } from './post-cover-create/index'

import myData from './myData.json'

import enI18nFile from './lang/en'
import esI18nFile from './lang/es'
import ptBrI18nFile from './lang/pt-br'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  ssr: true,

  publicRuntimeConfig: {
    myData: { ...myData }
  },

  render: {
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': ["'self'"],
        'img-src': ['https:', "'self'"],
        'worker-src': ["'self'", `blob:`],
        'style-src': [
          "'self'", "'unsafe-inline'",
        ],
        'script-src': [
          "'self'", "'unsafe-inline'",
        ],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'object-src': ["'self'"],
      }
    },
    resourceHints: true,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  corejs: '3',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vue-flag-icon',
    '@/plugins/i18n-format-date',
    '@/plugins/vue-lazysizes.client',
    '@/plugins/i18n-guard',
    '@/plugins/i18n-route'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/layout/' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/color-mode',
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

    'cookie-universal-nuxt',
    '@nuxtjs/fontawesome',


    // SITEMAP MUST BE ON THE END - https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],
  tailwindcss: {
    exposeConfig: false,
    cssPath: '@/assets/sass/main.scss',
    configPath: './tailwind.config.js',
  },
  colorMode: {
    preference: 'light',
    fallback: 'dark',
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faHeart', 'faEnvelope', 'faFile', 'faChevronLeft'],
      regular: ['faComment'],
      light: [],
      duotone: [],
      brands: [
        'faJsSquare',
        'faNode',
        'faVuejs',
        'faLinkedin',
        'faGithub',
        'faInstagram',
        'faTwitter',
      ],
    },
  },

  hardSource: true,


  // I18n module configuration (https://i18n.nuxtjs.org/)
  i18n: {
    baseUrl: BASE_URL,
    locales: i18nLocale,
    // lazy: true,
    // langDir: 'lang/',
    defaultLocale: defaultLocale,
    vueI18n: {
      fallbackLocale: defaultLocale,
      messages: {
        en: { ...enI18nFile },
        es: { ...esI18nFile },
        'pt-br': { ...ptBrI18nFile }
      },
    },
    seo: false, // initialize on the default layout
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
  },

  generate: {
    exclude: ['/cover']
  },

  optimizedImages: {
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true
  },

  hooks: {
    'content:file:beforeInsert': async (document: any) => {
      if (document.extension === '.md') {
        const { minutes } = require('reading-time')(document.text)

        document.readingTime = minutes
      }

      if (document.coverImage?.includes(coverImagePlaceholder) || document.openGraphImage?.includes(openGraphImagePlaceholder)) {
        await coverGenerate(document)
      }
    },
  },

  // Sitemap module configuration (https://www.npmjs.com/package/@nuxtjs/sitemap)
  sitemap: {
    hostname: BASE_URL,
    gzip: true,
    routes: getSiteXmlRoutes,
  },

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
    // analyze: true,
    postcss: {
      syntax: 'postcss-scss',
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

    extend(config: any, { isDev, isClient, loaders: { vue } }: { isDev: boolean, isClient: boolean, loaders: { vue: any } }) {
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
        content: myData.fullName,
      },
      ...getHeadMetaTags(null),
    ],
    link: [...getHeadFavicons()],
  },

  webpack: {
    ignored: '/node_modules/',
  },
}
