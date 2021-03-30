<template>
  <page :page-title="$t('blog-title')">
    <blog-posts :blog-posts="blogPosts" :lang="lang" class="mt-8" />
    <infinite-loading-slot @posts="appendPosts" :getPosts="getBlogPosts" />
  </page>
</template>

<script lang="ts">
import Vue from 'vue'

import { getHtmlHead } from '@/utils/headUtils'
import { getBlogPosts } from '@/utils/getPosts'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  data() {
    return {
      blogPosts: [],
    }
  },
  async asyncData({ $content, error, app: { $i18nGuard } }) {
    const lang: string = $i18nGuard.getLocale()

    try {
      const { blogPosts } = await getBlogPosts(lang, $content)
      return {
        blogPosts,
        lang,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods: {
    getBlogPosts(): Promise<{ blogPosts: IContentDocument[] }> {
      const lang: string = this.$i18nGuard.getLocale()
      return getBlogPosts(lang, this.$content, this.$data.blogPosts.length)
    },
    appendPosts(blogPosts: IContentDocument[]) {
      if (!blogPosts.length) return
      this.$data.blogPosts = [...this.$data.blogPosts, ...blogPosts]
    },
  },
  head() {
    return { ...getHtmlHead.call(this) }
  },
})
</script>

<style lang="scss" scoped></style>
