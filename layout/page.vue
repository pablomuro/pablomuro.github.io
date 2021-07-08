<template>
  <section class="page-container relative z-10">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Page',
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  created() {
    this.changeTitle(this.pageTitle)
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (newTitle !== oldTitle) {
        this.changeTitle(newTitle)
      }
    },
  },
  methods: {
    changeTitle(title: string) {
      this.$store.commit('pages/changeTitle', title)
    },
  },
})
</script>
<style lang="scss" scoped>
.page-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  height: 100%;
}
</style>
