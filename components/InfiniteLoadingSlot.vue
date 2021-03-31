<template>
  <div class="pt-10">
    <client-only>
      <template slot="placeholder">
        <div slot="spinner"></div>
        <div slot="no-more"></div>
        <div slot="no-results"></div>
        <div slot="error"></div>
      </template>
      <infinite-loading @infinite="infiniteHandler">
        <p slot="no-more">{{ $t('infinite-no-more') }}</p>
        <p slot="no-results">{{ $t('infinite-no-results') }}</p>
        <template slot="error" slot-scope="{ trigger }">
          <p class="mb-0">{{ $t('infinite-error') }}</p>
          <br />
          <button class="btn-try-infinite" @click="trigger">
            {{ $t('infinite-error-btn') }}
          </button>
        </template>
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
    },
  },
})
</script>
<style lang="postcss" scoped>
.btn-try-infinite {
  @apply text-base !important;
}
</style>
