<template>
  <section>
    <page-title>
      <slot name="title"></slot>
    </page-title>
    <div class="page-container relative z-10">
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
