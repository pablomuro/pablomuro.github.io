import { Middleware } from '@nuxt/types'
import { Route, Location } from 'vue-router'


const customMiddleware: Middleware = async (context) => {
  const { app: { $i18nGuard, store, $content }, from, route, redirect } = context

  if ($i18nGuard.getLocale() === '') {
    await $i18nGuard.setLocale()
  }

  const _route = (process.client && from ? from : route) as Route

  if (_route.name?.includes('blog-slug___') && $i18nGuard.haveToGuard()) {
    const [, lang] = _route.name.split('___')
    const post = (await $content(lang, _route.params.slug).fetch()) as any
    if (post && post[$i18nGuard.getLocale()]) {
      route.params.slug = post[$i18nGuard.getLocale()]
      const newPath = route.path.split('/')
      newPath.pop()
      newPath.push(post[$i18nGuard.getLocale()])
      route.path = newPath.join('/')
      route.fullPath = route.path

      if (process.client) {
        const location: Location = {
          name: route?.name ?? '',
          path: route.path,
          params: route.params
        }
        await Promise.resolve(redirect(location))
      }
    }
  }

  store?.dispatch('pages/clearTitle')

  await $i18nGuard.guard()
}

export default customMiddleware
