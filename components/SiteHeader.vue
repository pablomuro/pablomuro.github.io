<template>
  <div>
    <transition name="page">
      <header
        class="flex flex-col sm:flex-row justify-between p-4 sm:p-8 xl:pl-16 xl:pr-64"
      >
        <div class="flex items-center">
          <nuxt-link
            :to="localePath('/')"
            class="inline-flex pr-3 border-r border-black mr-3 items-center hover:underline"
          >
            <div class="logo">
              <picture-wrapper src="icon.png" alt="logo" />
            </div>
            <p class="m-0 ml-3">{{ brand }}</p>
          </nuxt-link>
          <nav class="inline-flex space-x-3 items-center">
            <nuxt-link :to="localePath('/blog')" class="hover:underline"
              >Blog</nuxt-link
            >
            <a :href="resumeLink" class="hover:underline" target="_blank">
              {{ $t('resume') }}
            </a>
          </nav>
        </div>
        <div
          class="flex flex-wrap justify-between items-center flex-row w-full sm:w-auto sm:space-x-3 mt-4 mb-2 sm:my-0"
        >
          <blog-search-input :lang="this.$i18n.locale" class="" />

          <language-switcher class="" />
        </div>
      </header>
    </transition>
    <div class="header-bg bg-theme-100"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteHeader',
  data() {
    return {
      brand: this.$config.myData.brand,
      cvHref: '',
    }
  },
  computed: {
    resumeLink(): string {
      return `/resumes/pablo-resume-${this.$i18nGuard.getLocale()}.pdf`
    },
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
.header-bg {
  z-index: -1;
}
</style>
