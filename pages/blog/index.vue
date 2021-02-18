<template>
  <div>
    <main>
      <blog-posts :blog-posts="blogPosts" :lang="lang"></blog-posts>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc, IContentDocument } from '@nuxt/content/types/content'
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

    let blogPosts: IContentDocument | IContentDocument[] = await $content(lang)
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
    if (!Array.isArray(blogPosts)) {
      blogPosts = [blogPosts]
    }
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

<style lang="scss" scoped></style>
