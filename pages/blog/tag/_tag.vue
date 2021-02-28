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
    </template>
    <template v-else>
      <h2 class="mt-4">{{ $t('tag-posts-not-found') }}</h2>
    </template>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { getHtmlHead } from '@/utils/headUtils'

export default Vue.extend({
  async asyncData({ $content, params, app: { $i18nGuard }, error }) {
    const lang: string = $i18nGuard.getLocale()
    const tag = params.tag

    try {
      if (!tag) throw new Error('No tag')

      let blogPosts: IContentDocument | IContentDocument[] = await $content(
        lang
      )
        .where({ tags: { $contains: tag } })
        .sortBy('createdAt', 'desc')
        .fetch()

      if (!Array.isArray(blogPosts)) {
        blogPosts = [blogPosts]
      }

      return {
        blogPosts,
        tag,
        lang,
      }
    } catch (err) {
      return error({ statusCode: 404, message: err.message })
    }
  },
  head() {
    return { ...getHtmlHead.call(this) }
  },
})
</script>
