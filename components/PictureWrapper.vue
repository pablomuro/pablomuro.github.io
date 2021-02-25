<template>
  <picture class="picture">
    <source
      :srcset="require(`@/assets/images/${src}?webp`)"
      type="image/webp"
      class="source"
    />
    <source
      :srcset="require(`@/assets/images/${src}`)"
      :type="`image/${imgtype}`"
      class="source"
    />
    <img :src="require(`@/assets/images/${src}`)" :alt="alt" class="img" />
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
