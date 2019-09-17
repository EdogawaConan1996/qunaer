<template>
  <div class="icons">
    <div class="icon" v-for="item in iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl" alt="no pic"/>
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icons-component',
  props: {
    iconList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    margin-top: 0.2rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0.44rem
        box-sizing: border-box
        padding: 0.1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: 0.44rem
        height: 0.44rem
        text-align: center
        font-weight: bold
</style>
