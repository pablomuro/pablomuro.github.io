<template>
  <span
    v-if="iso"
    class="flag-icon"
    :class="flagIconClass"
    :title="title || iso"
  >
  </span>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'flag',
  props: {
    iso: { type: String, default: null },
    title: { type: String, default: null },
    squared: { type: Boolean, default: true },
  },
  computed: {
    flagIconClass: function (): String {
      return (
        (!!this.squared ? 'flag-icon-squared ' : '') +
        'flag-icon-' +
        this.iso.toLowerCase()
      )
    },
  },
})
</script>
