<template>
  <div>
    <transition name="page">
      <header
        class="
          flex flex-col
          sm:flex-row
          justify-between
          p-4
          sm:p-8
          xl:pl-16 xl:pr-64
        "
      >
        <div class="flex items-center">
          <nuxt-link
            :to="localePath('/')"
            class="inline-flex mr-3 items-center hover:underline"
          >
            <div class="logo">
              <logo-wrapper alt="logo" />
            </div>
          </nuxt-link>
          <span class="py-1 ml-3 border-l border-black dark:border-gray-600">
            <nav class="inline-flex space-x-3 items-center ml-3">
              <nuxt-link :to="localePath('/')" class="hover:underline"
                >Home</nuxt-link
              >
            </nav>
            <nav class="inline-flex space-x-3 items-center ml-3">
              <nuxt-link :to="localePath('/blog')" class="hover:underline"
                >Blog</nuxt-link
              >
            </nav>
          </span>
        </div>
        <div
          class="
            flex
            justify-between
            items-center
            flex-row
            w-full
            sm:w-auto sm:space-x-3
            mt-4
            mb-2
            sm:my-0
          "
        >
          <lazy-hydrate when-idle>
            <lazy-blog-search-input :lang="this.$i18n.locale" class="" />
          </lazy-hydrate>
          <div class="flex items-center flex-row space-x-1">
            <lazy-hydrate when-idle>
              <lazy-language-switcher class="" />
            </lazy-hydrate>
            <lazy-hydrate when-idle>
              <dark-mode-toogle />
            </lazy-hydrate>
          </div>
        </div>
      </header>
    </transition>
    <client-only>
      <page-title />
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteHeader',
})
</script>

<style lang="scss" scoped>
header {
  .logo {
    // width: 50%;
    margin-left: 2%;
    margin-top: 2%;
  }
  .nuxt-link-exact-active {
    text-decoration: underline;
  }
}
</style>
