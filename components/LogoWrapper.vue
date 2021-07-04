<template>
  <picture class="picture">
    <!-- <source
      :data-srcset="require(`@/assets/images/icon.svg`)"
      type="image/webp"
      class="source"
    /> -->
    <source
      :data-srcset="require(`@/assets/images/icon.svg`)"
      :type="`image/${imgtype}`"
      class="source"
    />
    <img
      :data-src="require(`@/assets/images/icon.svg`)"
      :alt="alt"
      class="img lazyload"
      :class="imgClass"
      :width="150"
    />
    <slot></slot>
  </picture>
</template>
<script lang="ts">
import Vue from 'vue'

interface Img {
  srcSet: any
  src: any
  images: any
  width: number
  height: number
}

export default Vue.extend({
  name: 'LogoWrapper',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    'img-class': {
      type: String,
      default: '',
    },
  },
  computed: {
    imgtype() {
      let extension = this.src.split('.')[1]
      extension = extension === 'jpg' ? 'jpeg' : extension
      return extension
    },
    imgWebp(): Img {
      return require(`@/assets/images/icon.png`) as Img
    },
    defaultImg(): Img {
      return require(`@/assets/images/icon.png`) as Img
    },
  },
})
</script>
<style lang="sass"></style>
