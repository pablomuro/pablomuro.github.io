<template>
  <div>
    <site-header />
    <Nuxt class="container" />
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default Vue.extend({
  components: { SiteHeader, SiteFooter },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>

<style lang="scss" scoped></style>
