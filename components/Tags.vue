<template>
  <div>
    <client-only>
      <NuxtLink
        v-for="tag of tags"
        :key="tag"
        :to="localePath(`/blog/tag/${tag}`)"
        class="inline-block rounded-full px-2 py-px text-xs font-semibold bg-theme-200 text-theme-500 hover:bg-theme-500 hover:text-theme-100 dark:bg-theme-500 dark:text-theme-100 dark-hover:text-theme-500 dark-hover:bg-theme-100"
        :class="{ 'mr-2': tags.length > 1, 'mr-0': tags.length === 1 }"
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
