import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
export const BASE_URL = 'https://www.pablomuro.dev'

// TODO - imagem default de todos os cards, FAZER IMAGEM DEFAULT DO SITE
const DEFAULT_CARD_IMG = '/icon.png'

export const getHeadMetaTags = (data: any) => {
  const {
    post = null,
    description = null,
    title = null,
    path = null,
    img = null,
    tags = null,
  } = {
    ...data,
  }
  // const post = null
  const twitterCardMetaTags = createTwitterCardMetaTags()
  const openGraphMetaTags = createOpenGraphMetaTags({
    description,
    title,
    post,
    path,
    img,
  })
  const otherMetaTags = createOtherMetaTags({ description, tags })
  const postMetaTags = createPostMetaTags(post)
  return [
    ...otherMetaTags,
    ...twitterCardMetaTags,
    ...openGraphMetaTags,
    ...postMetaTags,
  ]
}

function createPostMetaTags(post: any) {
  if (!post) return []

  return [
    {
      hid: 'article:published_time',
      property: 'article:published_time',
      content: post.createdAt,
    },
    {
      hid: 'article:modified_time',
      property: 'article:modified_time',
      content: post.updatedAt,
    },
    {
      hid: 'article:author',
      property: 'article:author',
      content: 'pablomuro',
    },
    // {
    //   hid: 'article:tag',
    //   property: 'article:tag',
    //   content: post.tags.toString(),
  ]
}

function createOtherMetaTags({
  description,
  tags,
}: {
  description: string | null
  tags: string[] | null
}) {
  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: tags?.toString() ?? '', // data.tags
    },
  ]
}

// https://cards-dev.twitter.com/validator
function createTwitterCardMetaTags() {
  return [
    { name: 'twitter:site', content: '@pablomurodev' },
    { name: 'twitter:creator', content: '@pablomurodev' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
}

function createOpenGraphMetaTags({
  description,
  title,
  post,
  path,
  img,
}: {
  description: string
  title: string
  post: string | null
  path: string | null
  img: string | null
}) {
  return [
    {
      hid: 'og:type',
      property: 'og:type',
      content: post ? 'article' : 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: path ? `${BASE_URL}${path}` : BASE_URL,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: img ?? DEFAULT_CARD_IMG,
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'en_US',
    },
    {
      hid: 'og:locale:alternate-pt',
      property: 'og:locale:alternate',
      content: 'pt_BR',
    },
    {
      hid: 'og:locale:alternate-es',
      property: 'og:locale:alternate',
      content: 'es_ES',
    },
  ]
}

export const getHeadFavicons = () => {
  return [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
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
  ]
}

export function getHtmlHead(this: Vue): any {
  const { post = null } = this.$data

  if (post != null) {
    return {
      title: post.title,
      meta: [
        ...getHeadMetaTags({
          description: post.description,
          title: post.title,
          path: this.$route,
          image: post.coverImage,
          tags: post.tags,
        }),
      ],
    }
  }

  const title: TranslateResult = this.$i18n.t('root-meta-title')
  let description: TranslateResult = this.$i18n.t('root-meta-description')

  if (this.$route.fullPath !== '/') {
    description = description.toString().replace('|', 'Blog |')
  }

  return {
    title: title.toString(),
    meta: [
      ...getHeadMetaTags({
        description,
        title,
        path: this.$route,
      }),
    ],
  }
}
