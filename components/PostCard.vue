<template>
  <div
    class="max-w-md min-h-full rounded overflow-hidden shadow-md flex flex-col hover:shadow-2xl mb-4"
  >
    <img
      v-if="post.cover_image"
      :src="post.cover_image"
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
          formatDate(post.createdAt)
        }}</time>
        <reading-time :reading-time="post.readingTime"></reading-time>
      </div>
      <div class="pt-3">
        <tags :tags="post.tags"></tags>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ReadingTime from '~/components/ReadingTime.vue'
import Tags from '~/components/Tags.vue'

export default Vue.extend({
  name: 'PostCard',
  components: { ReadingTime, Tags },
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
  methods: {
    formatDate(dateString: string | undefined): string {
      if (dateString === undefined) return ''

      const options = { year: 'numeric', month: 'long', day: 'numeric' }

      if (dateString.includes('/')) {
        const [day, month, year] = dateString.split('/').map((el) => Number(el))

        return new Date(year, month, day).toLocaleDateString(this.lang, options)
      }

      return new Date(dateString).toLocaleDateString(this.lang, options)
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
