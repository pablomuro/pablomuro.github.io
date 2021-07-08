<template>
  <picture class="picture">
    <source
      :srcset="require(`@/assets/images/${logo}.png?webp`)"
      type="image/webp"
      class="source"
    />
    <source
      :srcset="require(`@/assets/images/${logo}.png`)"
      :type="`image/png`"
      class="source"
    />
    <img
      :src="require(`@/assets/images/${logo}.png`)"
      :alt="alt"
      class="img lazyload"
      :class="imgClass"
      :width="LOGO_SIZE"
    />
    <slot></slot>
  </picture>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LogoWrapper',
  props: {
    alt: {
      type: String,
      default: '',
    },
    'img-class': {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      logo: 'logo',
      // @ts-ignore
      colorMode: this.$colorMode.$data,
      LOGO_SIZE: 150,
    }
  },
  mounted() {
    // @ts-ignore
    this.logo =
      // @ts-ignore
      (this.$colorMode as any).value == 'light' ? 'logo' : 'logo-invert'
  },
  watch: {
    colorMode: {
      handler: function (newValue, oldValue) {
        // @ts-ignore
        this.logo =
          // @ts-ignore
          (this.$colorMode as any).value == 'light' ? 'logo' : 'logo-invert'
      },
      deep: true,
    },
  },
})
</script>
<style lang="sass"></style>
