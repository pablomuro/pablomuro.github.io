<template>
  <div class="site-body min-h-screen flex flex-col justify-between">
    <site-header />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['i18nMiddleware'],
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true, addDirAttribute: true })
  },
})
</script>

<style lang="scss" scoped></style>
