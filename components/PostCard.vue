<template>
  <div
    class="max-w-md min-h-full rounded overflow-hidden shadow-md card flex flex-col"
  >
    <img
      v-if="post.cover_image"
      :src="post.cover_image"
      alt="post-cover-image"
      class="w-full"
    />
    <div class="px-6 py-4 pb-2 flex-grow">
      <h1 class="card-title font-bold mt-2">
        {{ post.title }}
      </h1>
      <h2 class="card-description text-left mt-6">
        {{ post.description }}
      </h2>
    </div>
    <footer class="px-6 py-4">
      <div class="text-sm">
        <time class="text-center mr-3 border-r pr-3">{{
          formatDate(post.createdAt)
        }}</time>
        <reading-time :reading-time="post.readingTime"></reading-time>
      </div>
      <div class="pt-3">
        <span v-for="tag of post.tags" :key="tag" class="badge mr-2"
          >#{{ tag }}</span
        >
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ReadingTime from '~/components/ReadingTime.vue'

export default Vue.extend({
  name: 'PostCard',
  components: { ReadingTime },
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
<style lang="postcss" scoped>
.card {
  &:hover {
    @apply shadow-2xl;
  }
}
.card-title {
  color: rgb(41, 41, 41);
  font-size: 22px;
}
.card-description {
  color: rgb(117, 117, 117);
  line-height: 20px;
}

.badge {
  @apply inline-block bg-indigo-200 rounded-full px-2 py-px text-xs font-semibold text-gray-700 text-white;
  &:hover {
    @apply bg-indigo-300;
  }
}
</style>
