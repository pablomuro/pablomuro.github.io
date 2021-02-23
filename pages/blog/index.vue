<template>
  <page>
    <template #title> {{ $t('blog-title') }}</template>
    <blog-posts :blog-posts="blogPosts" :lang="lang" class="mt-8" />
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc, IContentDocument } from '@nuxt/content/types/content'
import { NuxtAppOptions } from '@nuxt/types'
import { getHtmlHead } from '@/utils/headUtils'

export default Vue.extend({
  async asyncData({
    $content,
    app,
  }: {
    $content: contentFunc
    app: NuxtAppOptions
  }) {
    const lang = app.i18n.locale ?? app.i18n.defaultLocale

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
    return { ...getHtmlHead.bind(this) }
  },
})
</script>

<style lang="scss" scoped></style>
