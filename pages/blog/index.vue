<template>
  <page :page-title="$t('blog-title')">
    <blog-posts :blog-posts="blogPosts" :lang="lang" class="mt-8" />
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { getHtmlHead } from '@/utils/headUtils'

export default Vue.extend({
  async asyncData({ $content, app: { $i18nGuard } }) {
    const lang: string = $i18nGuard.getLocale()

    let blogPosts: IContentDocument | IContentDocument[] = await $content(lang)
      .only([
        'title',
        'description',
        'coverImage',
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
    return { ...getHtmlHead.call(this) }
  },
})
</script>

<style lang="scss" scoped></style>
