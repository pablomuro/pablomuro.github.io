<template>
  <div
    class="max-w-md min-h-full rounded overflow-hidden shadow-md flex flex-col hover:shadow-2xl mb-4"
  >
    <img
      v-if="post.coverImage"
      :src="post.coverImage"
      alt="post-cover-image"
      class="w-full h-52 object-cover object-center"
    />
    <div class="px-6 py-4 pb-2 flex-grow">
      <h1 class="card-title mt-2">
        {{ post.title }}
      </h1>
      <p class="card-description text-left mt-6 mb-2">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostCard',
  props: {
    lang: {
      type: String,
      default: 'en',
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
<style lang="scss" scoped>
.card-title {
  font-size: 22px;
}
.card-description {
  color: rgb(117, 117, 117);
  line-height: 20px;
  font-size: 20px;
}
</style>
