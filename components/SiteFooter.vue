<template>
  <footer class="relative mt-24 sm:mt-32 bg-theme-100 dark:bg-theme-700">
    <div
      class="created-by bg-theme-600 relative -mt-4 sm:-mt-8 mx-auto text-center rounded-md p-2 sm:p-5 w-4/5 sm:w-1/3 text-xs sm:text-inherit"
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

    <div class="flex flex-col items-center justify-center mt-2">
      <div class="social space-x-2 text-black mt-2 sm:mt-4">
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
          <fa :icon="['fab', 'twitter']" alt="twitter link" />
        </a>
        <!-- <a :href="resumeLink" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fas', 'file']" />
        </a> -->
      </div>
      <div class="my-2 sm:mt-4">Copyright © {{ year }} {{ brand }}</div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteFooter',
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

<style lang="postcss" scoped>
footer {
  height: 100px;

  code {
    background-color: inherit;
  }

  .social {
    svg {
      @apply w-4 h-4;

      path {
        @apply fill-current text-theme-600 dark:text-theme-300;
      }
    }

    svg:hover path {
      @apply fill-current text-theme-400 dark:text-theme-200;
    }
  }
}

@screen sm {
  footer {
    height: 150px;
    .social {
      svg {
        @apply w-5 h-5;
      }
    }
  }
}
</style>
