import { Middleware } from '@nuxt/types'

const i18nMiddleware: Middleware = async ({ app: { $i18nGuard }, from, route }) => {
  if (process.server) return

  if (from.name == route.name) {

    if ($i18nGuard.getLocale() === '') {
      await $i18nGuard.setLocale()
    }

    await $i18nGuard.guard()
  }

}

export default i18nMiddleware
