import { $content } from '@nuxt/content'

export const getNuxtRoutes = () => {
  const routes: string[] = []
  const languages = ['en', 'pt-br', 'es']
  languages.forEach(async (language) => {
    const posts: any = await $content(language).fetch()
    if (typeof posts === typeof []) {
      for (const post of posts) {
        routes.push(`blog/${language}/${post.slug}`)
      }
    } else {
      routes.push(`blog/${language}/${posts.slug}`)
    }
  })

  return routes
}

export const getSiteXmlRoutes = async () => {
  const routes: string[] = []

  const posts: any = await $content('en').fetch()
  if (typeof posts === typeof []) {
    for (const post of posts) {
      routes.push(`blog/${post.slug}`)
    }
  } else {
    routes.push(`blog/${posts.slug}`)
  }

  return routes
}
