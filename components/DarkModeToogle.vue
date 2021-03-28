<template>
  <div>
    <div @click="switchColorMode" class="cursor-pointer custom-select">
      <client-only>
        <sun slot="placeholder" />
        <transition name="page">
          <sun v-if="mode.preference == 'light'" />
          <moon
            v-if="mode.preference == 'dark'"
            class="fill-current text-theme-200"
          />
        </transition>
      </client-only>
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
      mode: this.$colorMode,
    }
  },
  methods: {
    switchColorMode() {
      this.mode.preference = this.mode.preference == 'light' ? 'dark' : 'light'
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
