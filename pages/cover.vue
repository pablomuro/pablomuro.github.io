<template>
  <main :style="containerStyle">
    <div class="overlay">
      <div v-if="coverTitle" class="items-center flex mx-16">
        <div class="block avatar" :style="avatar"></div>
        <div class="ml-10">
          <h1 class="text-theme-100 font-bold text-center mb-10 text-5xl">
            {{ coverTitle }}
          </h1>
          <h2 class="text-theme-100 text-center text-3xl">
            {{ coverSubtitle }}
          </h2>
        </div>
      </div>
      <div v-else-if="mainTag" class="items-center flex">
        <div class="mainTagOverlay p-8 bg-theme-500 mx-auto">
          <h1 class="text-theme-100 font-bold text-center m-0 text-5xl mainTag">
            {{ mainTag }}
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      coverTitle: '',
      coverSubtitle: '',
      // coverTitle: "Hello World - Why I'm starting blogging",
      // coverSubtitle: 'The motives that drive me to start blogging',
      mainTag: 'JS',

      containerStyle: {
        width: `1200px`,
        height: `630px`,
        // backgroundImage: 'url(../assets/images/tag-bg-template/programing-life.jpg)',
        backgroundImage: `url(${require('@/assets/images/bg-templates/programing-life.jpg')})`,
      },
      avatar: {
        backgroundImage: `url(${require('@/assets/images/avatar.png')})`,
      },
    }
  },
})
</script>

<style lang="postcss" scoped>
main {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    height: 100%;
    & > div {
      height: 100%;
    }
  }

  .avatar {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 290px;
    width: 28%;
  }

  h1,
  h2 {
    line-height: 1.25;
  }

  .mainTagOverlay {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .mainTag {
    font-size: 5rem;
    text-decoration: underline red;
  }
}
</style>
