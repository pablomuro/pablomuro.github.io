<template>
  <article
    class="max-w-md min-h-full rounded overflow-hidden shadow-md flex flex-col hover:shadow-2xl mb-4 bg-white dark:bg-theme-700"
  >
    <figure>
      <picture-wrapper
        :src="`cover-images/${post.coverImage}`"
        alt="Post comer image"
      />
    </figure>
    <div class="px-6 py-4 pb-2 flex-grow">
      <header>
        <h1 class="card-title mt-2">
          {{ post.title }}
        </h1>
      </header>
      <p class="card-description text-theme-400 text-left mt-6 mb-2">
        {{ post.description }}
      </p>
    </div>
    <footer class="px-6 py-4">
      <div class="text-sm">
        <time class="text-center mr-3 border-r pr-3">{{
          i18nFormatDate(post.createdAt)
        }}</time>
        <reading-time :reading-time="post.readingTime"></reading-time>
      </div>
      <div class="pt-3">
        <tags :tags="post.tags" />
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostCard',
  props: {
    lang: {
      type: String,
      required: true,
    },
    post: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
})
</script>
<style lang="postcss" scoped>
.card-title {
  font-size: 22px;
}
.card-description {
  line-height: 20px;
  font-size: 20px;
}

.picture::v-deep .source,
.picture::v-deep .img {
  @apply w-full h-52 object-cover object-center;
}
</style>
