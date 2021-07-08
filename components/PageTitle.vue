<template>
  <div
    class="
      relative
      header-bg
      bg-theme-100
      dark:bg-theme-700
      mt-0
      margin-title-bg
      flex
      items-center
    "
  >
    <div class="title-box ml-4 sm:ml-8 xl:ml-16">
      <h1 class="my-0 font-bold text-xl">
        <span class="terminal fira-code">></span
        ><span class="title quicksand mr-3 ml-2"
          ><transition name="page"
            ><span v-show="title">{{ title }}</span></transition
          ></span
        >
      </h1>
    </div>

    <transition name="page">
      <div
        v-show="title !== null"
        class="header-line bg-theme-500 dark:bg-theme-100 opacity-10"
      ></div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'PageTitle',
  computed: {
    ...mapState({ title: (state: any) => state.pages.title }),
  },
})
</script>
<style lang="scss" scoped>
.header-bg {
  .title-box {
    white-space: nowrap;

    h1 {
      .terminal {
        color: rgb(255, 255, 255);
        text-shadow: 0.7px 0px 1px rgb(255, 0, 255),
          -0.7px 0px 1px rgb(0, 255, 255);
      }
    }
  }

  .header-line {
    height: 0.125rem;
    width: 100%;
  }
}
</style>
