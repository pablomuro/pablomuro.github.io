import Vue from 'vue'

if (!Vue.prototype.i18nFormatDate) {
  Vue.prototype.i18nFormatDate = true

  Vue.mixin({
    methods: {
      i18nFormatDate(dateString: string | undefined): string {
        if (dateString === undefined) return ''

        const lang = this.$i18n.locale ?? this.$i18n.defaultLocale
        const options = { year: 'numeric', month: 'long', day: 'numeric' }

        if (dateString.includes('/')) {
          const [day, month, year] = dateString
            .split('/')
            .map((el) => Number(el))

          return new Date(year, month, day).toLocaleDateString(lang, options)
        }

        return new Date(dateString).toLocaleDateString(lang, options)
      },
    },
  })
}
