<template>
  <main class="container">
    <!-- <TheHeader /> -->
    <blog-posts :blog-posts="blogPosts" :lang="lang"></blog-posts>

    <footer class="flex border-gray-500 border-t-2 mt-8">
      <p class="mt-2">Created by Pablo A. Muro Martinez</p>
    </footer>
  </main>
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
import BlogPosts from '~/components/BlogPosts.vue'

export default Vue.extend({
  components: { BlogPosts },
  async asyncData({
    $content,
    app,
  }: {
    $content: contentFunc
    app: NuxtAppOptions
  }) {
    const lang = app.i18n.locale ?? 'en'

    const blogPosts = await $content(lang)
      .only([
        'title',
        'description',
        'cover_image',
        'slug',
        'tags',
        'publish_date',
        'readingTime',
        'createdAt',
      ])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      blogPosts,
      lang,
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

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 960px;
}
</style>
