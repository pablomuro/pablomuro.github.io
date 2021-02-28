<template>
  <page>
    <template #title>Home</template>
    <div class="flex flex-col items-center justify-center">
      <section
        class="section-hi flex flex-col sm:flex-row items-center my-auto px-4 sm:px-0"
      >
        <div class="relative flex -ml-8 sm:mr-20">
          <div
            class="block avatar"
            :style="{
              backgroundImage: `url(${require('@/assets/images/avatar.png')})`,
            }"
          ></div>
          <div class="hi-box absolute">
            <fa
              :icon="['far', 'comment']"
              class="absolute fill-current text-theme-500 hi-bubble text-6xl sm:text-7xl"
            />
            <h1 class="absolute hi hi-text text-xl sm:text-3xl">Hi!</h1>
          </div>
        </div>
        <div class="text-center text-lg">
          <h1>My name is Pablo and I'm a Fullstack Developer</h1>
        </div>
      </section>
    </div>
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
.section-hi {
  margin-top: 8vh;
  .hi-box {
    left: 4.9rem;
    top: 1.5rem;

    .hi-bubble {
      transform: rotate(8deg);
    }

    .hi-text {
      left: 1rem;
      margin: 0.9rem 0 0 0;
    }
  }

  .avatar {
    background-color: #fff;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto 90%;

    height: 100px;
    width: 100px;
  }
}

@screen sm {
  .section-hi {
    margin-top: 20vh;
    .avatar {
      height: 130px;
      width: 130px;
    }
    .hi-box {
      left: 6.5rem;

      .hi-bubble {
      }

      .hi-text {
      }
    }
  }
}
</style>
