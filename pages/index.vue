<template>
  <div>
    <div>
      <div>Pablo Muro Dev - {{ year }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  min-height: 80vh;
}
</style>
