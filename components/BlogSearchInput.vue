<template>
  <transition name="page">
    <div
      v-show="isBlogPage"
      v-click-outside="closeDropdown"
      class="search-box relative w-max sm:w-auto"
    >
      <span class="flex items-center w-full rounded-md shadow-sm custom-select">
        <search-icon
          class="block z-10 h-4 m-0.5 sm:m-0 fill-current text-theme-300 transition-colors duration-300 ease-linear"
        />

        <input
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          :placeholder="$t('blog-search-placeholder')"
          class="search-input max-w-0 max-h-0 sm:max-w-full sm:max-h-full sm:ml-3 focus:outline-none placeholder-theme-400 dark:placeholder-theme-200 placeholder-opacity-75"
        />
      </span>

      <div
        v-show="isOpen"
        class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-20"
      >
        <ul
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="max-h-56 rounded-md text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
        >
          <li
            v-for="post of blogPosts"
            :key="post.slug"
            tabindex="0"
            role="option"
            class="custom-select-li"
            @click="closeDropdown"
          >
            <div class="flex items-center space-x-3">
              <NuxtLink
                :to="{
                  name: `blog-slug___${lang}`,
                  params: { slug: post.slug },
                }"
              >
                {{ post.title }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
// @ts-ignore
import ClickOutside from 'vue-click-outside'

// @ts-ignore
const SearchIcon = () => import('~/assets/icons/search.svg?inline')

interface IData {
  searchQuery: string
  blogPosts: IContentDocument[]
  isOpen: boolean
}

export default Vue.extend({
  name: 'BlogSearchInput',
  components: { SearchIcon },
  directives: {
    ClickOutside,
  },
  props: {
    lang: {
      type: String,
      required: true,
    },
  },
  data(): IData {
    return {
      searchQuery: '',
      blogPosts: [],
      isOpen: false,
    }
  },
  computed: {
    isBlogPage(): boolean {
      let lang = this.lang
      lang = lang !== this.$i18n.defaultLocale ? `${lang}/` : ''
      return this.$route.fullPath.includes(`/${lang}blog`)
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.blogPosts = []
        this.isOpen = false
        return
      }

      const lang = this.$i18n.locale ?? this.$i18n.defaultLocale

      let blogPosts:
        | IContentDocument
        | IContentDocument[] = await this.$content(lang)
        .only(['title', 'slug'])
        .limit(6)
        .search(searchQuery)
        .fetch()
      if (!Array.isArray(blogPosts)) {
        blogPosts = [blogPosts]
      }

      blogPosts = blogPosts.filter(
        (post) => post.slug !== this.$route.params.slug
      )

      this.blogPosts = blogPosts
      this.isOpen = blogPosts.length >= 1
    },
  },
  methods: {
    closeDropdown() {
      this.isOpen = false
      this.searchQuery = ''
    },
  },
})
</script>
<style languave="postcss">
.search-box {
  .search-input {
    transition: max-width 0.5s ease-in-out, margin-left 0.6s ease-in-out,
      max-height 0.6s ease-in-out;
    transition-delay: 125ms;
  }
  &:hover {
    .search-input {
      @apply max-h-full ml-3;
      max-width: 25rem;
    }
  }
}
</style>
