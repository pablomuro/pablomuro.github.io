<template>
  <section class="">
    <page-title>
      <slot name="title"></slot>
    </page-title>
    <div class="page-container relative z-10 flex-grow">
      <slot></slot>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Page',
})
</script>
<style lang="scss" scoped>
.page-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  height: 100%;
}
</style>
