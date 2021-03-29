import { Plugin } from '@nuxt/types'
import { NuxtVueI18n } from 'nuxt-i18n'
import { CookieSerializeOptions } from 'cookie'
import { defaultLocale } from '~/nuxt.default.config'

export interface I18nGuardInterface {
  guard: () => Promise<boolean>
  getLocale: () => string
  setLocale: (locale?: string) => Promise<void>
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

const i18nGuardPlugin: Plugin = ({ app, store }, inject) => {
  const cookieName = '_i18n_redirected'
  const { $cookies, i18n } = app

  const getLocale = (): string => store?.state.locale.lang

  const setLocale = async (locale?: string): Promise<void> => {
    if (!locale) {
      locale = getDefaultLocale()
    }

    setLocaleCookie(locale)
    await store?.dispatch('locale/change', locale)
  }
  const getDefaultLocale = (): string => {

    let locale: string = $cookies.get(cookieName)
    if (!locale) {
      locale = defaultLocale
      const browserLocale = i18n.getBrowserLocale() as string
      const availableLocales = i18n.locales as NuxtVueI18n.Options.LocaleObject[]

      availableLocales.forEach((_locale: NuxtVueI18n.Options.LocaleObject): void => {
        if (_locale.code === browserLocale) {
          locale = _locale.code
        }
      })
      setLocaleCookie(locale)
    }
    return locale
  }

  const setLocaleCookie = (locale: string): void => {
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
    const locale = getLocale()

    if (locale !== i18n.locale) {
      await i18n.setLocale(locale)
      return true
    }
    return false;
  }

  inject('i18nGuard', { guard, getLocale, setLocale })
}

export default i18nGuardPlugin
