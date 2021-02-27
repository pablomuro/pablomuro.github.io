<template>
  <div>
    <client-only>
      <NuxtLink
        v-for="tag of tags"
        :key="tag"
        :to="localePath(`/blog/tag/${tag}`)"
        class="mr-2 inline-block bg-theme-200 rounded-full px-2 py-px text-xs font-semibold text-theme-500 hover:bg-theme-500 hover:text-theme-100"
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
}
</script>
