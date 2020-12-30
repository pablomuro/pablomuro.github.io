<template>
  <div class="container">
    <nuxt-content :document="article" />
    <button @click="changeLang" />
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content, params, app }) {
    let article
    try {
      article = await $content(app.i18n.locale, params.slug).fetch()
    } catch (error) {
      article = await $content('en', params.slug).fetch()
    }

    // debugger
    console.log(app.i18n.locale)
    return {
      article,
      params,
    }
  },
  methods: {
    formatDate(date: string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    async changeLang() {
      const lang = this.$i18n.locale
      const locale = lang === 'en' ? 'pt-br' : 'en'
      await this.$i18n.setLocale(locale)
      this.$nuxt.refresh()
    },
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.logo {
  width: 50px;
  height: 100%;
  margin-left: 2%;
  margin-top: 2%;
}
</style>
