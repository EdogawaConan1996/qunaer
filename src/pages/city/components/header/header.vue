<template>
  <div style="position: fixed; top: 0; left: 0; width: 100%;z-index: 10">
    <div class="header">
      <div class="header-back" @click="backPage">
        <div class="iconfont iconfanhui back-icon"></div>
      </div>
      城市选择
    </div>
  </div>
</template>

<script>
  export default {
    name: "header-component",
    data() {
      return {}
    },
    methods: {
      backPage () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .header
    position: relative
    overflow: hidden
    height: $header-height
    line-height: $header-height
    background-color: $primary-color
    text-align: center
    color: #ffffff
    .header-back
      position: absolute
      top: 0
      left: 0
      width: 0.64rem
      text-align: center
      font-size: 0.4rem
</style>
