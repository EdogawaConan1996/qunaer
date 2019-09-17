<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>
  export default {
    name: "search-component",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .search
    position: fixed
    top: 0.86rem
    left: 0
    width: 100%
    z-index: 10
    padding: 0 0.1rem
    height: 0.72rem
    background-color: $primary-color
    .search-input
      box-sizing: border-box
      padding: 0 0.1rem
      height: 0.62rem
      width: 97%
      line-height: 0.62rem
      border-radius: 0.06rem
      text-align: center
      color: #666
</style>
