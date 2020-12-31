import { $content } from '@nuxt/content'

export default async () => {
  const routes = []
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
