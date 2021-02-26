import { $content } from '@nuxt/content'
import { defaultLocale, i18nLocale } from '../nuxt.default.config'

export const getSiteXmlRoutes = () => {
  const routes: string[] = []

  i18nLocale.forEach(async (locale) => {
    const posts: any = await $content(locale.code).fetch()
    const languageSlug =
      locale.code !== defaultLocale ? `${locale.code}/blog` : 'blog'
    if (typeof posts === typeof []) {
      for (const post of posts) {
        routes.push(`${languageSlug}/${post.slug}`)
      }
    } else {
      routes.push(`${languageSlug}/${posts.slug}`)
    }
  })

  return routes
}
