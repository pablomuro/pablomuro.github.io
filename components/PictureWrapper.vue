<template>
  <picture class="picture">
    <source
      :data-srcset="imgWebp.srcSet"
      type="image/webp"
      class="source"
      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 448px, 960px"
    />
    <source
      :data-srcset="defaultImg.srcSet"
      :type="`image/${imgtype}`"
      class="source"
      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 448px, 960px"
    />
    <img
      :data-src="defaultImg.src"
      :alt="alt"
      class="img lazyload"
      :class="imgClass"
      :height="defaultImg.height"
      :width="defaultImg.width"
      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 448px, 960px"
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
  name: 'PictureWrapper',
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
      return require(`@/assets/images/${this.src}?resize&sizes[]=375&sizes[]=448&sizes[]=600&sizes[]=960&format=webp`) as Img
    },
    defaultImg(): Img {
      return require(`@/assets/images/${this.src}?resize&sizes[]=375&sizes[]=448&sizes[]=600&sizes[]=960`) as Img
    },
  },
})
</script>
<style lang="sass"></style>
