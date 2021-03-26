import { Middleware } from '@nuxt/types'

const customMiddleware: Middleware = async ({ app: { $i18nGuard, store }, from, route }) => {
  // if (process.server) return

  if ($i18nGuard.getLocale() === '') {
    await $i18nGuard.setLocale()
  }

  if (from && from.name == route.name) {

    await $i18nGuard.guard()
  }

  store?.dispatch('pages/clearTitle')

}

export default customMiddleware
