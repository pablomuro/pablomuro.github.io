<template>
  <div>
    <div class="logo">
      <img src="/icon.png" alt="logo" />
    </div>
    <div class="container">
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
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 90vh;
}

.logo {
  width: 50px;
  height: 5vh;
  margin-left: 2%;
  margin-top: 2%;
}
</style>
