<template>
  <span>{{ readingTimeFn }} {{ $t('min-read') }}</span>
</template>

<script>
export default {
  name: 'ReadingTime',
  props: {
    readingTime: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    readingTimeFn() {
      let minutes = 1
      minutes = this.readingTime > 1 ? this.readingTime : 1
      return Math.round(minutes)
    },
  },
}
</script>
