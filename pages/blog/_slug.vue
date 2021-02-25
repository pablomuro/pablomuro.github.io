<template>
  <page>
    <article
      class="-mt-8 mx-auto max-w-full min-h-full rounded overflow-hidden flex flex-col card-shadow bg-white"
    >
      <figure>
        <picture-wrapper
          :src="`cover-images/${post.coverImage}`"
          alt="Post comer image"
        />
      </figure>

      <div class="px-4 sm:px-10 pb-8 flex-grow w-full">
        <header>
          <h1 class="post-title mb-2 mt-8">{{ post.title }}</h1>

          <div class="post-info text-sm mb-4 flex flex-wrap justify-between">
            <div>
              <time class="text-center" :datetime="post.createdAt">{{
                i18nFormatDate(post.createdAt)
              }}</time>
              •
              <reading-time :reading-time="post.readingTime"></reading-time>
            </div>
            <tags :tags="post.tags"></tags>
          </div>
          <div class="post-info text-sm mb-8 flex flex-wrap justify-between">
            Posted from: {{ post.postedFrom }}
          </div>
        </header>
        <nuxt-content :document="post" />
      </div>
    </article>

    <prev-next :prev="prev" :next="next" :lang="lang" />
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentFunc, IContentDocument } from '@nuxt/content/types/content'
import { NuxtAppOptions } from '@nuxt/types'
import { getHtmlHead } from '@/utils/headUtils'

import Tags from '~/components/Tags.vue'

type Dictionary<T> = { [key: string]: T }

export default Vue.extend({
  components: { Tags },
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
    let lang = app.i18n.locale
    try {
      post = await $content(lang, params.slug).fetch()
    } catch (error) {
      lang = app.i18n.defaultLocale as string
      post = await $content(lang, params.slug).fetch()
    }

    const [prev = null, next = null] = (await $content(lang)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()) as Array<IContentDocument>

    return {
      post,
      prev,
      next,
      lang,
    }
  },

  head() {
    return { ...getHtmlHead.call(this) }
  },
})
</script>
<style lang="postcss" scoped>
.post-info {
  font-style: italic;
}

.post-cover {
  max-height: 432px;
}
.card-shadow {
  min-height: 100vh;

  box-shadow: 2px 2px 10px 0 hsla(0, 0%, 40%, 0.5);
}

.picture::v-deep .source,
.picture::v-deep .img {
  @apply w-full max-h-96 object-cover object-center;
}
</style>
