<template>
  <article
    class="container mt-6 mx-auto max-w-md min-h-full rounded overflow-hidden flex flex-col"
  >
    <img
      v-if="post.cover_image"
      :src="post.cover_image"
      alt="post-cover-image"
      class="w-full post-cover"
    />

    <div class="px-10 pb-2 flex-grow">
      <h1 class="post-title mb-2">{{ post.title }}</h1>
      <div class="post-info text-sm mb-8">
        <time class="text-center">{{ formatDate(post.createdAt) }}</time>
        •
        <reading-time :reading-time="post.readingTime"></reading-time>
      </div>
      <nuxt-content :document="post" />
      <!-- <button @click="changeLang">TROCA -- {{ lang }}</button> -->
      <div>
        {{ post.tags ? post.tags.toString() : '' }}
      </div>
    </div>
  </article>
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
<style lang="scss" scoped>
.post-title {
  margin-top: 30px;
}
.post-info {
  font-style: italic;
}

.post-cover {
  max-width: calc(100% + 60px);
  max-height: 432px;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 960px;

  box-shadow: 2px 2px 10px 0 hsla(0, 0%, 40%, 0.5);
}

.logo {
  width: 50px;
  height: 100%;
  margin-left: 2%;
  margin-top: 2%;
}
</style>
