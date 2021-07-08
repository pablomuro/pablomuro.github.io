import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'

const DEFAULT_CARD_IMG = '/pablo-card-dark.png'

export function getHtmlHead(this: Vue): any {
  const { baseUrl = '' } = this.$config
  const { post = null } = this.$data

  if (post != null) {
    return {
      title: post.title,
      meta: [
        ...getHeadMetaTags({
          baseUrl,
          post,
          description: post.description,
          title: post.title,
          path: this.$route,
          image: post.ogImage ?? null,
          tags: post.tags,
        }),
      ],
    }
  }

  let title: TranslateResult = this.$i18n.t('root-meta-title')
  let description: TranslateResult = this.$i18n.t('root-meta-description')

  if (this.$route.fullPath !== '/') {
    title = title.toString().replace('|', 'Blog |')
    description = this.$i18n.t('blog-meta-description')
  }

  return {
    title: title.toString(),
    meta: [
      ...getHeadMetaTags({
        baseUrl,
        description,
        title,
        path: this.$route,
      }),
    ],
  }
}

export const getHeadMetaTags = (data: any) => {
  const {
    baseUrl = '',
    post = null,
    description = null,
    title = null,
    path = null,
    image = null,
    tags = null,
  } = {
    ...data,
  }

  const twitterCardMetaTags = createTwitterCardMetaTags({ image, baseUrl })
  const openGraphMetaTags = createOpenGraphMetaTags({
    baseUrl,
    description,
    title,
    post,
    path: path ? path.path : null,
    image,
  })
  const otherMetaTags = createOtherMetaTags({ title, description, tags })
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
    {
      hid: 'article:tag',
      property: 'article:tag',
      content: post?.tags?.toString() ?? '',
    }
  ]
}

function createOtherMetaTags({
  title,
  description,
  tags,
}: {
  title: string | null
  description: string | null
  tags: string[] | null
}) {
  const _tags = []

  if (title) _tags.push({
    hid: 'title',
    name: 'title',
    content: title,
  })

  if (description) _tags.push({
    hid: 'description',
    name: 'description',
    content: description,
  })


  if (tags) _tags.push({
    hid: 'keywords',
    name: 'keywords',
    content: tags?.toString() ?? '', // data.tags
  })

  return _tags
}

function createTwitterCardMetaTags({ image, baseUrl }: { image: string | null, baseUrl: string }) {
  return [
    { hid: 'twitter:site', name: 'twitter:site', content: '@pablomurodev' },
    { hid: 'twitter:creator', name: 'twitter:creator', content: '@pablomurodev' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    {
      hid: 'twitter:image', name: 'twitter:image', content: image ? `${baseUrl}${image}` : `${baseUrl}${DEFAULT_CARD_IMG}`,
    },
  ]
}

function createOpenGraphMetaTags({
  baseUrl,
  description,
  title,
  post,
  path,
  image,
}: {
  baseUrl: string
  description: string
  title: string
  post: string | null
  path: string | null
  image: string | null
}) {
  let tags: any[] = [
    {
      hid: 'og:type',
      property: 'og:type',
      content: post ? 'article' : 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: path ? `${baseUrl}${path}` : baseUrl,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: image ?? DEFAULT_CARD_IMG,
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

  if (title && description) {
    tags = [
      ...tags,
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      }
    ]
  }
  return tags
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

