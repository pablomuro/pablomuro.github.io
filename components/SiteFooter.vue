<template>
  <footer class="relative mt-32 bg-theme-100">
    <div
      class="created-by bg-theme-600 relative -mt-8 p-5 w-1/3 mx-auto text-center rounded-md"
    >
      <code class="language-html"
        ><span class="token tag"
          ><span class="token tag"
            ><span class="token punctuation">&lt;</span>created-by</span
          >
          <span class="token attr-name">me</span
          ><span class="token attr-value"
            ><span class="token punctuation attr-equals">=</span
            ><span class="token punctuation">"</span
            ><span class="text-theme-100 quicksand font-bold">{{ name }}</span
            ><span class="token punctuation">"</span></span
          ><span class="token punctuation">/&gt;</span></span
        >
      </code>
    </div>
    <div class="flex items-center justify-center mt-2">
      <div class="container flex flex-col items-center mt-3 space-y-3">
        <div class="social space-x-2 text-black">
          <a :href="emailLink" target="_blank" rel="noopener noreferrer">
            <fa :icon="['fas', 'envelope']" />
          </a>
          <a :href="githubLink" target="_blank" rel="noopener noreferrer">
            <fa :icon="['fab', 'github']" />
          </a>
          <a :href="linkedinLink" target="_blank" rel="noopener noreferrer">
            <fa :icon="['fab', 'linkedin']" />
          </a>
          <a :href="instagramLink" target="_blank" rel="noopener noreferrer">
            <fa :icon="['fab', 'instagram']" />
          </a>
          <a :href="twitterLink" target="_blank" rel="noopener noreferrer">
            <fa :icon="['fab', 'twitter']" />
          </a>
          <a :href="resumeLink" target="_blank" rel="noopener noreferrer">
            <fa :icon="['fas', 'file']" />
          </a>
        </div>
        <div class="my-2">Copyright © {{ year }} {{ brand }}</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import NuxtJs from '~/assets/icons/nuxt-js.svg?inline'

export default Vue.extend({
  name: 'SiteFooter',
  components: { NuxtJs },
  data() {
    return {
      name: this.$config.myData.fullName,
      brand: this.$config.myData.brand,
      emailLink: `mailto:${this.$config.myData.email}`,
      linkedinLink: this.$config.myData.linkedin,
      githubLink: this.$config.myData.github,
      instagramLink: this.$config.myData.instagram,
      twitterLink: this.$config.myData.twitter,
      year: new Date().getFullYear(),
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
footer {
  height: 150px;

  code {
    background-color: inherit;
  }

  .social {
    svg {
      width: 1.25rem;
      height: 1.25rem;
      path {
        @apply fill-current text-theme-600;
      }
    }

    svg:hover path {
      @apply fill-current text-theme-400;
    }
  }
}
</style>
