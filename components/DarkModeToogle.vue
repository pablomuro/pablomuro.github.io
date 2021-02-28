<template>
  <div>
    <div @click="switchColorMode" class="cursor-pointer custom-select">
      <transition name="page">
        <sun v-if="mode == 'light'" />
        <moon v-if="mode == 'dark'" class="fill-current text-theme-200" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Sun from '~/assets/icons/sun.svg?inline'
// @ts-ignore
import Moon from '~/assets/icons/moon.svg?inline'

export default Vue.extend({
  name: 'DarkModeToogle',
  components: { Sun, Moon },
  data() {
    return {
      mode: this.$colorMode.preference,
    }
  },
  methods: {
    switchColorMode() {
      this.mode = this.mode == 'light' ? 'dark' : 'light'
      this.$colorMode.preference = this.mode
    },
  },
})
</script>
<style lang="postcss" scoped>
.custom-select {
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  padding-left: 0.45rem;
  padding-right: 0.45rem;
  svg {
    width: 1.55rem;
    height: 1.55rem;
  }
}
</style>
