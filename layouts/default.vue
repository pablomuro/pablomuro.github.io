<template>
  <div class="site-body min-h-screen flex flex-col justify-between">
    <lazy-hydrate when-idle>
      <site-header />
    </lazy-hydrate>
    <main class="items-stretch">
      <Nuxt />
    </main>
    <lazy-hydrate when-visible>
      <site-footer />
    </lazy-hydrate>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['custom-middleware'],
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true, addDirAttribute: true })
  },
})
</script>

<style lang="scss" scoped></style>
