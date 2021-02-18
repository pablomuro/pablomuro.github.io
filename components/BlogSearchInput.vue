<template>
  <div v-if="isBlogPage" class="relative">
    <span class="inline-block w-full rounded-md shadow-sm">
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search Posts"
        class="custom-select"
      />
    </span>

    <div
      v-show="hasData"
      class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
    >
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
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
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

interface IData {
  searchQuery: string
  blogPosts: IContentDocument[]
  isBlogPage: boolean
  hasData: boolean
}

export default Vue.extend({
  name: 'BlogSearchInput',
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
      isBlogPage: false,
      hasData: false,
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.blogPosts = []
        this.hasData = false
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
      this.hasData = blogPosts.length >= 1
    },
  },
  created() {
    let lang = this.lang
    lang = lang !== 'en' ? `${lang}/` : ''
    this.isBlogPage = this.$route.fullPath === `/${lang}blog`
  },
})
</script>
