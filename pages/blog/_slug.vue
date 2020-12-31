<template>
  <div class="container">
    <nuxt-content :document="article" />
    <button @click="changeLang">TROCA</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc } from '@nuxt/content/types/content'
import { NuxtAppOptions } from '@nuxt/types'
type Dictionary<T> = { [key: string]: T }
export default Vue.extend({
  async asyncData({
    $content,
    params,
    app,
  }: {
    $content: contentFunc
    params: Dictionary<string>
    app: NuxtAppOptions
  }) {
    let article
    try {
      article = await $content(app.i18n.locale, params.slug).fetch()
    } catch (error) {
      article = await $content('en', params.slug).fetch()
    }

    // debugger
    // console.log(article[1])
    return {
      article,
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
})
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
