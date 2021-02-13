<template>
  <div class="p-auto">
    <h1 class="font-bold text-xl mb-8 mt-4">Blog Posts</h1>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink
        v-for="post of blogPosts"
        :key="post.slug + Date.now()"
        :to="{ name: `blog-slug___${lang}`, params: { slug: post.slug } }"
        class="has-text-dark"
      >
        <post-card :post="post" :lang="lang"></post-card>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import PostCard from '~/components/PostCard.vue'

export default {
  name: 'BlogPosts',
  components: { PostCard },
  props: {
    lang: {
      type: String,
      default: 'en',
    },
    blogPosts: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
<style class="postcss" scoped>
.card {
}
</style>
