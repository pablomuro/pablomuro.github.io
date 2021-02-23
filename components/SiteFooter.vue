<template>
  <footer
    class="flex items-center justify-center border-gray-500 border-t-2 mt-10"
  >
    <div class="container flex flex-col items-center">
      <div class="space-y-3">
        <div>
          <code class="language-html"
            ><span class="token tag"
              ><span class="token tag"
                ><span class="token punctuation">&lt;</span>created-by</span
              >
              <span class="token attr-name">me</span
              ><span class="token attr-value"
                ><span class="token punctuation attr-equals">=</span
                ><span class="token punctuation">"</span
                ><span class="text-white quicksand font-bold"
                  >Pablo A. Muro Martinez</span
                ><span class="token punctuation">"</span></span
              ><span class="token punctuation">/&gt;</span></span
            >
          </code>
        </div>
        <div>
          <code class="language-js"
            ><span class="token keyword">new</span>
            <span class="token class-name">BlogStack</span
            ><span class="token string">(</span
            ><span class="token punctuation">{</span
            ><fa icon="heart" :style="{ color: 'red' }" /><span
              class="token punctuation"
              >,</span
            >
            <fa
              :icon="['fab', 'js-square']"
              :style="{ color: '#F7DF1E' }"
            /><span class="token punctuation">,</span>
            <fa :icon="['fab', 'node']" :style="{ color: '#339933' }" /><span
              class="token punctuation"
              >,</span
            >
            <fa :icon="['fab', 'vuejs']" :style="{ color: '#4FC08D' }" /><span
              class="token punctuation"
              >,</span
            >
            <nuxt-js
              class="svg-inline--fa"
              :style="{ fill: '#00C58E', width: '1rem', height: '1rem' }"
            /><span class="token punctuation">}</span
            ><span class="token string">)</span>
          </code>
        </div>
        <div class="social">
          <fa :icon="['fas', 'envelope']" />
          <fa :icon="['fab', 'github-square']" />
          <fa :icon="['fab', 'linkedin']" />
          <fa :icon="['fab', 'instagram-square']" />
          <fa :icon="['fab', 'twitter-square']" />
          <fa :icon="['fas', 'file']" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import NuxtJs from '~/assets/icons/nuxt-js.svg?inline'

export default Vue.extend({
  name: 'SiteFooter',
  components: { NuxtJs },
})
</script>

<style lang="scss" scoped>
footer {
  height: 15.625rem;
  background-color: #222;

  code {
    background-color: inherit;
  }

  .social svg path {
    fill: var(--flash-white);
  }

  .social svg:hover path {
    fill: gray;
  }
}
</style>
