<template>
  <span>{{ readingTime }} {{ $t('min-read') }}</span>
</template>

<script>
export default {
  name: 'ReadingTime',
  props: {
    readingTimeMinutes: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    readingTime() {
      let minutes = 0
      minutes = this.readingTimeMinutes
      return minutes
    },
  },
}
</script>
