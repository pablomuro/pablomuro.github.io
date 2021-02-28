import { Middleware } from '@nuxt/types'

const customMiddleware: Middleware = async ({ app: { $i18nGuard, store }, from, route }) => {
  if (process.server) return

  if (from.name == route.name) {

    if ($i18nGuard.getLocale() === '') {
      await $i18nGuard.setLocale()
    }

    await $i18nGuard.guard()
  }

  store?.dispatch('pages/clearTitle')

}

export default customMiddleware
