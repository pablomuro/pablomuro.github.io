<template>
  <page>
    <template #title>Home</template>
    <div class="name">Pablo Muro Dev - {{ year }}</div>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import { getHtmlHead } from '~/utils/headUtils'

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  head() {
    return { ...getHtmlHead.call(this) }
  },
})
</script>

<style lang="scss" scoped>
.name {
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
