<template>
  <div
    v-show="isBlogPage"
    v-click-outside="closeDropdown"
    class="relative w-full sm:w-auto"
  >
    <span class="inline-block w-full rounded-md shadow-sm">
      <SearchIcon
        class="block absolute z-10 h-4 mt-3 ml-3 fill-current text-default-400 transition-colors duration-300 ease-linear"
      />

      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search Posts"
        class="custom-select w-full pl-10"
      />
    </span>

    <div
      v-show="isOpen"
      class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
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
        >
          <div class="flex items-center space-x-3">
            <NuxtLink
              :to="{ name: `blog-slug___${lang}`, params: { slug: post.slug } }"
            >
              {{ post.title }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
// @ts-ignore
import ClickOutside from 'vue-click-outside'

// @ts-ignore
import SearchIcon from '~/assets/icons/search.svg?inline'

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
      default: 'en',
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
      lang = lang !== 'en' ? `${lang}/` : ''
      return this.$route.fullPath === `/${lang}blog`
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.blogPosts = []
        this.isOpen = false
        return
      }

      const lang = this.$i18n.locale ?? 'en'

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
