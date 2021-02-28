<template>
  <picture class="picture">
    <source
      :data-srcset="require(`@/assets/images/${src}?webp`)"
      type="image/webp"
      class="source"
    />
    <source
      :data-srcset="require(`@/assets/images/${src}`)"
      :type="`image/${imgtype}`"
      class="source"
    />
    <img
      :data-src="require(`@/assets/images/${src}`)"
      :alt="alt"
      class="img lazyload"
      :class="imgClass"
    />
    <slot></slot>
  </picture>
</template>
<script lang="ts">
import Vue from 'vue'
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
  },
})
</script>
<style lang="sass"></style>
