<template>
  <div>
    <page-title>
      <slot name="title"></slot>
    </page-title>
    <div class="page-container relative z-10">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Page',
})
</script>
