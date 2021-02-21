<template>
  <span>
    <span
      v-for="tag of tags"
      :key="tag"
      class="mr-2 inline-block bg-gray-300 rounded-full px-2 py-px text-xs font-semibold text-gray-600 hover:bg-default-tag hover:text-gray-100"
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
