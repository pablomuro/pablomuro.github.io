<template>
  <div class="container">
    <language-switcher />
    <nuxt-content :document="post" />
    <button @click="changeLang">TROCA -- {{ lang }}</button>
    <div>
      {{ post.tags ? post.tags.toString() : '' }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc } from '@nuxt/content/types/content'
import { NuxtAppOptions } from '@nuxt/types'
import { getHeadMetaTags } from '@/utils/headUtils'
import languageSwitcher from '~/components/language-switcher.vue'

type Dictionary<T> = { [key: string]: T }

export default Vue.extend({
  components: { languageSwitcher },
  async asyncData({
    $content,
    params,
    app,
  }: {
    $content: contentFunc
    params: Dictionary<string>
    app: NuxtAppOptions
  }) {
    let post
    const lang = app.i18n.locale
    try {
      post = await $content(app.i18n.locale, params.slug).fetch()
    } catch (error) {
      post = await $content('en', params.slug).fetch()
    }

    return {
      post,
      lang,
    }
  },

  head() {
    return {
      title: this.$data.post.tile,
      meta: [
        ...getHeadMetaTags({
          description: this.$data.post.description,
          tile: this.$data.post.tile,
          path: this.$route.path,
          image: this.$data.post.cover_image,
          tags: this.$data.post.tags,
        }),
      ],
    }
  },
  methods: {
    formatDate(date: string): string {
      // new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    async changeLang(): Promise<void> {
      const lang = this.$i18n.locale
      const locale = lang === 'en' ? 'pt-br' : 'en'
      await this.$i18n.setLocale(locale).then(async () => {
        await this.$nuxt.refresh()
        // window.location.reload(true)
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
