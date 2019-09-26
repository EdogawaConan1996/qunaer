<template>
  <transition name="fade">
    <slot />
  </transition>
</template>

<script>
  export default {
    name: "fade-animation",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">
  .fade-enter, .fade-leave-to
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity 0.5s
</style>
