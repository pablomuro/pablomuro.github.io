import { Middleware } from '@nuxt/types'

const i18nMiddleware: Middleware = async ({ app: { $i18nGuard } }) => {
  if (process.server) return

  if (await $i18nGuard.guard()) {
    return
  }

}

export default i18nMiddleware
