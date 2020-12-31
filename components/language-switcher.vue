<template>
  <div>
    <a
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
      >{{ locale.name }}
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    availableLocales(): any {
      return this.$i18n.locales
    },
  },
})
</script>

<style></style>
