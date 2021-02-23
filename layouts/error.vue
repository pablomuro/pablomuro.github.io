<template>
  <div>
    <div class="container mx-auto px-4 pt-20">
      <div class="flex flex-wrap items-center justify-between">
        <icon-404 v-if="error.statusCode === 404" />
        <h1
          class="w-full text-3xl xl:text-4xltext-center font-medium leading-normal"
        >
          <span v-if="error.statusCode === 404">Page not found</span>
          <span v-else>An error occurred</span>
        </h1>
        <div class="w-full lg:w-2/3 mx-auto">Cara</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// @ts-ignore
import Icon404 from '~/assets/icons/404.svg?inline'

export default Vue.extend({
  components: { Icon404 },
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
})
</script>
