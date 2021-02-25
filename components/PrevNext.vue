<template>
  <div class="mt-10 mx-2 sm:mx-0 flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: `blog-slug___${lang}`, params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      &lt;&lt; {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: `blog-slug___${lang}`, params: { slug: next.slug } }"
      class="font-bold hover:underline text-right"
    >
      {{ next.title }} &gt;&gt;
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    lang: {
      type: String,
      required: true,
    },
  },
})
</script>
