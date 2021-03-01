<template>
  <page page-title="Home">
    <div class="flex flex-col items-center justify-center">
      <section
        class="section-hi flex flex-col sm:flex-row items-center my-auto px-4 sm:px-0 mt-14"
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
      <div class="mt-14">
        <pre
          class="language-js"
        ><code><span class="token keyword">const</span> <span class="token function-variable function">developBlog</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow">await</span> <span class="token keyword">new</span> <span class="token class-name">Blog</span><span class="token punctuation">(</span><span class="token punctuation">{</span><fa icon="heart" :style="{ color: 'red' }" /><span class="token punctuation"
    >, </span><fa :icon="['fab', 'js-square']" :style="{ color: '#F7DF1E' }" /><span
    class="token punctuation"
    >, </span><fa :icon="['fab', 'node']" :style="{ color: '#339933' }" /><span
    class="token punctuation"
    >, </span
  ><fa :icon="['fab', 'vuejs']" :style="{ color: '#4FC08D' }" /><span
    class="token punctuation"
    >, </span><nuxt-js
    class="svg-inline--fa"
    :style="{ fill: '#00C58E', width: '1rem', height: '1rem' }"
  /><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
      </div>
    </div>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import NuxtJs from '~/assets/icons/nuxt-js.svg?inline'

import { getHtmlHead } from '~/utils/headUtils'

export default Vue.extend({
  components: { NuxtJs },
  head() {
    return { ...getHtmlHead.call(this) }
  },
})
</script>

<style lang="scss" scoped>
.section-hi {
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
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto 90%;

    height: 100px;
    width: 100px;
  }
}

@screen sm {
  .section-hi {
    .avatar {
      height: 130px;
      width: 130px;
    }
    .hi-box {
      left: 6.5rem;
    }
  }
}
</style>
