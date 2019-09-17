<template>
	<div class="header">
		<div class="header-left">
      <div class="iconfont iconfanhui back-icon"></div>
    </div>
		<div class="input">
      <i class="iconfont iconsousuo"></i>
      输入城市/景点/游玩主题
    </div>
		<div class="header-right" @click="toCityPage">
      城市
      <i class="iconfont iconjiantouarrow486 arrow-icon"></i>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'header-component',
    methods: {
      toCityPage () {
        this.$router.push({name: 'city'})
      }
    }
	}
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    display: flex
    z-index: 10
    background-color: $primary-color
    line-height: $header-height
    color: #ffffff
    .header-left
      float: left
      width: 0.64rem
      .back-icon
        text-align: center
        font-size: 0.4rem
    .input
      flex: 1
      margin: 0.12rem 0 0.2rem 0
      padding-left: 0.2rem
      height: 0.64rem
      line-height: 0.64rem
      background-color: #ffffff
      border-radius: 0.1rem
      color: #ccc
    .header-right
      float: right
      width: 1.28rem
      text-align: center
      .arrow-icon
        margin-left: -0.04rem
        font-size: 0.24rem
</style>
