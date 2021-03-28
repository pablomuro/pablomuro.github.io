import { Middleware } from '@nuxt/types'

const customMiddleware: Middleware = async (context) => {
  const { app: { $i18nGuard, store }, from, route } = context

  if ($i18nGuard.getLocale() === '') {
    await $i18nGuard.setLocale()
  }

  store?.dispatch('pages/clearTitle')


  if (process.server) {
    if (await $i18nGuard.guard()) {
      const from = context.i18n.locale
      const to = $i18nGuard.getLocale()

      return context.redirect({ name: route.name?.replace(from, to) })
    }
  } else {

    if (from && from.name == route.name) {

      await $i18nGuard.guard()
    }
  }

}

export default customMiddleware
