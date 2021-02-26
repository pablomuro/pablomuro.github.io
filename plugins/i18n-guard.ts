import { Plugin } from '@nuxt/types'
import { NuxtVueI18n } from 'nuxt-i18n'
import index from 'cookie-universal-nuxt'
import { CookieSerializeOptions } from 'cookie'

export interface I18nGuardInterface {
  guard: () => Promise<boolean>;
  setLocaleCookie: (locale: string) => void
}

declare module 'vue/types/vue' {
  interface Vue {
    $i18nGuard: I18nGuardInterface
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $i18nGuard: I18nGuardInterface
  }
  interface Context {
    $i18nGuard: I18nGuardInterface
  }
}

const i18nGuardPlugin: Plugin = ({ app }, inject) => {
  const cookieName = '_i18n_redirected'

  const setLocaleCookie = (locale: string): void => {
    const { $cookies } = app
    const date = new Date()
    const cookieOptions: CookieSerializeOptions = {
      expires: new Date(date.setDate(date.getDate() + 365)),
      path: '/',
      sameSite: 'lax',
      secure: false,
    }

    $cookies.set(cookieName, locale, { ...cookieOptions })
  }
  const guard = async (): Promise<boolean> => {
    const { $cookies, i18n } = app

    let locale = $cookies.get(cookieName)
    if (!locale) {
      locale = i18n.defaultLocale
      const browserLocale = i18n.getBrowserLocale() as string
      const availableLocales = i18n.locales as NuxtVueI18n.Options.LocaleObject[]

      availableLocales.forEach((_locale: NuxtVueI18n.Options.LocaleObject): void => {
        if (_locale.code === browserLocale) {
          locale = _locale.code
        }
      })

      setLocaleCookie(locale);
    }

    if (locale !== i18n.locale) {
      await i18n.setLocale(locale)
      app.switchLocalePath(locale)
      return true
    }
    return false;
  }
  inject('i18nGuard', { guard, setLocaleCookie })
}

export default i18nGuardPlugin
