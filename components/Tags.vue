<template>
  <div>
    <client-only>
      <NuxtLink
        v-for="tag of tags"
        :key="tag"
        :to="localePath(`/blog/tag/${tag}`)"
        class="mr-2 inline-block bg-gray-300 rounded-full px-2 py-px text-xs font-semibold text-gray-600 hover:bg-default-tag hover:text-gray-100"
        >#{{ tag }}</NuxtLink
      >
    </client-only>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    // link(tag: string) {
    //   this.$router.push(`/blog/tags/${tag}`)
    // },
  },
}
</script>
