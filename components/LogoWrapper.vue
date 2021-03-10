<template>
  <picture class="picture">
    <source :data-srcset="imgWebp.srcSet" type="image/webp" class="source" />
    <source
      :data-srcset="defaultImg.srcSet"
      :type="`image/${imgtype}`"
      class="source"
    />
    <img
      :data-src="defaultImg.src"
      :alt="alt"
      class="img lazyload"
      :class="imgClass"
      :height="defaultImg.height"
      :width="defaultImg.width"
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
      return require(`@/assets/images/${this.src}?resize&sizes[]=90&format=webp`) as Img
    },
    defaultImg(): Img {
      return require(`@/assets/images/${this.src}?resize&sizes[]=90`) as Img
    },
  },
})
</script>
<style lang="sass"></style>
