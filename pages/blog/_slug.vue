<template>
  <page page-title="">
    <LazyHydrate ssr-only>
      <article
        class="
          -mt-8
          mx-auto
          max-w-full
          min-h-full
          rounded
          overflow-hidden
          flex flex-col
          card-shadow
          bg-white
          dark:bg-theme-700
        "
      >
        <figure>
          <picture-wrapper
            :src="`cover-images/${post.coverImage}`"
            alt="Post comer image"
            :lazyload="false"
          />
        </figure>

        <div class="px-4 sm:px-10 pb-8 flex-grow w-full">
          <header>
            <h1 class="post-title mb-2 mt-8">{{ post.title }}</h1>

            <div
              class="
                post-info
                text-sm
                mb-4
                flex flex-col
                sm:flex-row
                flex-wrap
                justify-between
              "
            >
              <div>
                <time class="text-center" :datetime="post.createdAt">{{
                  i18nFormatDate(post.createdAt)
                }}</time>
                •
                <reading-time :reading-time="post.readingTime"></reading-time>
              </div>
              <tags :tags="post.tags" class="mt-2 sm:mt-0"></tags>
            </div>
            <div class="post-info text-sm mb-8 flex flex-wrap justify-between">
              Posted from: {{ post.postedFrom }}
            </div>
          </header>
          <nuxt-content :document="post" />
        </div>
      </article>
    </LazyHydrate>

    <prev-next :prev="prev" :next="next" :lang="lang" />
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { getHtmlHead } from '@/utils/headUtils'

export default Vue.extend({
  async asyncData({ $content, params, error, app: { $i18nGuard, i18n } }) {
    let lang: string = $i18nGuard.getLocale()
    let post: IContentDocument

    post = (await $content(lang, params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })) as IContentDocument

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
    this.$data.post.ogImage = require(`@/assets/images/cover-images/${this.$data.post.openGraphImage}`)
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
