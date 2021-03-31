<template>
  <div class="pt-10">
    <client-only>
      <template slot="placeholder">
        <div slot="loading-default"></div>
        <div slot="no-more"></div>
        <div slot="no-results"></div>
        <div slot="error"></div>
      </template>
      <infinite-loading @infinite="infiniteHandler">
        <p slot="no-more">{{ $t('no-more') }}</p>
        <p slot="no-results">{{ $t('no-results') }}</p>
      </infinite-loading>
    </client-only>
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'
import InfiniteLoading, { StateChanger } from 'vue-infinite-loading'

export default Vue.extend({
  name: 'InfiniteLoadingSlot',
  components: { InfiniteLoading },
  props: {
    getPosts: { type: Function, required: true },
  },
  methods: {
    infiniteHandler($state: StateChanger) {
      this.getPosts()
        .then(({ blogPosts }: { blogPosts: IContentDocument[] }) => {
          if (blogPosts.length) {
            this.$emit('posts', blogPosts)
          }
          $state.loaded()
          $state.complete()
        })
        .catch(() => $state.error())
        .finally(() => $state.complete())
    },
  },
})
</script>
