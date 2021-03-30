<template>
  <page :page-title="`${$t('blog-title')} ${tag}`">
    <NuxtLink
      :to="localePath('/blog')"
      class="flex items-baseline space-x-3 hover:underline mt-8"
      ><fa :icon="['fa', 'chevron-left']" class="fill-current text-theme-500" />
      <p class="hover:underline">{{ $t('tag-back-all-posts') }}</p>
    </NuxtLink>
    <template v-if="blogPosts.length">
      <blog-posts :blog-posts="blogPosts" :lang="lang" class="mt-8" />
      <infinite-loading-slot @posts="appendPosts" :getPosts="getTagPosts" />
    </template>
    <template v-else>
      <h2 class="mt-4">{{ $t('tag-posts-not-found') }}</h2>
    </template>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'

import { getHtmlHead } from '@/utils/headUtils'
import { getTagPosts } from '@/utils/getPosts'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  data() {
    return {
      blogPosts: [],
      tag: '',
    }
  },
  async asyncData({ $content, params, app: { $i18nGuard }, error }) {
    const lang: string = $i18nGuard.getLocale()
    const tag = params.tag

    try {
      if (!tag) throw new Error('No tag')
      const { blogPosts } = await getTagPosts(lang, $content, tag)
      return {
        blogPosts,
        tag,
        lang,
      }
    } catch (err) {
      return error({ statusCode: 404, message: err.message })
    }
  },
  methods: {
    getTagPosts(): Promise<{ blogPosts: IContentDocument[] }> {
      const lang: string = this.$i18nGuard.getLocale()
      return getTagPosts(
        lang,
        this.$content,
        this.tag,
        this.$data.blogPosts.length
      )
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
