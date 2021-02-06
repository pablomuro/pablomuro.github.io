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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.logo {
  width: 50px;
  height: 100%;
  margin-left: 2%;
  margin-top: 2%;
}
</style>
