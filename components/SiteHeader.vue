<template>
  <div>
    <transition name="page">
      <header
        class="flex flex-col sm:flex-row justify-between m-8 xl:ml-16 xl:mr-64 items-center"
      >
        <div class="flex items-center">
          <nuxt-link
            :to="localePath('/')"
            class="inline-flex pr-3 border-r border-black mr-3 items-center"
          >
            <div class="logo">
              <img src="/icon.png" alt="logo" />
            </div>
            <p class="m-0 ml-3">PabloMuro</p>
          </nuxt-link>
          <nav class="inline-flex space-x-3">
            <nuxt-link :to="localePath('/blog')">Blog</nuxt-link>
            <a href="http://www.google.com" target="_blank">Curriclo</a>
          </nav>
        </div>
        <div
          class="flex flex-wrap justify-between items-end flex-col sm:flex-row w-full sm:w-auto sm:space-x-3"
        >
          <blog-search-input :lang="this.$i18n.locale" class="mt-5 sm:mt-0" />

          <language-switcher class="mt-5 sm:mt-0" />
        </div>
      </header>
    </transition>
    <div class="header-border"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import BlogSearchInput from './BlogSearchInput.vue'

export default Vue.extend({
  name: 'SiteHeader',
  components: { LanguageSwitcher, BlogSearchInput },
  data() {
    return {
      lang: 'en',
      cvHref: '',
    }
  },
  created() {
    this.lang = this.$i18n.locale ?? 'en'
  },
})
</script>

<style lang="scss" scoped>
header {
  .logo {
    width: 50px;
    margin-left: 2%;
    margin-top: 2%;
  }
  .nuxt-link-exact-active {
    text-decoration: underline;
  }
}
.header-border {
  border-bottom: 50px solid black;
}
</style>
