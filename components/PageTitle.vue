<template>
  <div class="relative header-bg mt-0 margin-title-bg flex items-center">
    <div class="title-box ml-4 sm:ml-8 xl:ml-16">
      <h1 class="my-0 font-bold text-xl">
        <span class="terminal fira-code">></span
        ><span class="title quicksand mr-3 ml-2"><slot /></span>
      </h1>
    </div>

    <div class="header-line"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageTitle',
})
</script>
<style lang="scss" scoped>
.header-bg {
  margin-top: var(--header-margin-top);

  .default-height {
    margin-top: calc(var(--header-bg-size) / 2);
  }

  .title-box {
    white-space: nowrap;

    h1 {
      .terminal {
        color: rgb(0, 255, 0);
        text-shadow: 0.7px 0px 1px rgb(255, 0, 255),
          -0.7px 0px 1px rgb(0, 255, 255);
      }
    }
  }

  .header-line {
    height: 0.125rem;
    width: 100%;
    background-color: var(--gray-line);
  }
}
</style>
