<template>
  <span>
    <span
      v-for="tag of tags"
      :key="tag"
      class="mr-2 inline-block bg-indigo-200 rounded-full px-2 py-px text-xs font-semibold text-gray-700 text-white hover:bg-indigo-300"
      >#{{ tag }}</span
    >
  </span>
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
