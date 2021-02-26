import { Context } from '@nuxt/types'

export default ({ app }: Context) => {
  app.nuxt.defaultTransition.beforeEnter = () => {
    app.i18n.finalizePendingLocaleChange()
  }

  if (!app.router) return
  app.router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (to.name !== from.name) {
      await app.i18n.waitForPendingLocaleChange()
    }
    return savedPosition || { x: 0, y: 0 }
  }
}

