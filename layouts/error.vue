<template>
  <div>
    <div
      class="container mx-auto px-4 flex flex-wrap items-center justify-evenly"
    >
      <div class="">
        <span v-if="error.statusCode === 404">
          <icon-404
            class="error-svg fill-current text-theme-600 dark:text-theme-200"
          />
        </span>
        <h1
          class="
            w-full
            text-3xl
            xl:text-4xl
            text-center
            font-medium
            leading-normal
            mt-0
          "
        >
          <span v-if="error.statusCode === 404" class="block -mt-5"
            >Page not found</span
          >
          <span v-else>Server ERROR</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// @ts-ignore
const Icon404 = () => import('~/assets/icons/404.svg?inline')
import { getHtmlHead } from '@/utils/headUtils'

export default Vue.extend({
  components: { Icon404 },
  props: ['error'],
  layout: 'error',
  head() {
    return { ...getHtmlHead.call(this) }
  },
})
</script>
<style lang="postcss" scoped>
.error-svg {
  width: 25rem;
}
</style>
