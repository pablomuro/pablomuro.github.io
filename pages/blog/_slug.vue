<template>
  <div class="container">
    <nuxt-content :document="article" />
    <button @click="changeLang">TROCA -- {{ lang }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc } from '@nuxt/content/types/content'
import { NuxtAppOptions } from '@nuxt/types'
import { getHeadMetaTags } from '@/utils/headUtils'

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
    const lang = app.i18n.locale
    debugger
    try {
      article = await $content(app.i18n.locale, params.slug).fetch()
    } catch (error) {
      article = await $content('en', params.slug).fetch()
    }

    return {
      article,
      lang,
    }
  },

  head() {
    return {
      title: this.$data.article.tile,
      meta: [
        ...getHeadMetaTags({
          description: this.$data.article.description,
          tile: this.$data.article.tile,
          path: this.$route.path,
          image: this.$data.article.cover_image,
          tags: this.$data.article.tags,
        }),
      ],
    }
  },
  methods: {
    formatDate(date: string): string {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    async changeLang(): Promise<void> {
      const lang = this.$i18n.locale
      const locale = lang === 'en' ? 'pt-br' : 'en'
      await this.$i18n.setLocale(locale).then(async () => {
        await this.$nuxt.refresh()
        window.location.reload(true)
      })
      // this.$nuxt.refresh()
      // this.$forceUpdate()
      // window.location.reload(true)
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
