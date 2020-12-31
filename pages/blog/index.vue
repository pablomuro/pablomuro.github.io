<template>
  <div class="m-8">
    <!-- <TheHeader /> -->

    <h1 class="">Blog Posts</h1>
    <ul class="flex flex-wrap">
      <li v-for="article of articles" :key="article.slug" class="a"></li>
    </ul>

    <footer class="flex justify-center border-gray-500 border-t-2">
      <p class="mt-4">
        Created by
        <a
          href="https://twitter.com/debs_obrien"
          class="font-bold hover:underline"
          >Debbie O'Brien</a
        >
        at NuxtJS. See the
        <a
          href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
          class="font-bold hover:underline"
          >tutorial</a
        >
        for how to build it.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc } from '@nuxt/content/types/content'
import { NuxtAppOptions } from '@nuxt/types'
import {
  getHeadMetaTags,
  BLOG_TITLE,
  BLOG_DESCRIPTION,
} from '@/utils/headUtils'

export default Vue.extend({
  async asyncData({
    $content,
    app,
  }: {
    $content: contentFunc
    app: NuxtAppOptions
  }) {
    const articles = await $content(app.i18n.locale)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  head() {
    return {
      title: BLOG_TITLE,
      meta: [
        ...getHeadMetaTags({
          description: BLOG_DESCRIPTION,
          tile: BLOG_TITLE,
          path: this.$route.path,
        }),
      ],
    }
  },
})
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
