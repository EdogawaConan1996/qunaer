<template>
  <div class="header">
    <div class="header-abs" @click="backPage" v-show="showAbs">
      <i class="iconfont iconfanhui icon-back" />
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="header-left" @click="backPage">
        <div class="iconfont iconfanhui back-icon"></div>
      </div>
      <div class="title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'header-component',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showAbs: true,
        opacityStyle: {opacity: 0}
      }
    },
    methods: {
      backPage () {
        this.$router.back()
      },
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .header
    .header-abs
      z-index: 1
      position: absolute
      left: 0.2rem
      top: 0.2rem
      width: 0.8rem
      height: 0.8rem
      border-radius: 0.4rem
      background-color: rgba(0,0,0,0.8)
      line-height: 0.8rem
      text-align: center
      .icon-back
        color: #fff
    .header-fixed
      position: fixed
      top: 0
      left: 0
      width: 100%
      display: flex
      z-index: 10
      background-color: $primary-color
      line-height: $header-height
      color: #ffffff
      text-align: center
      .header-left
        float: left
        width: 0.64rem
        .back-icon
          text-align: center
          font-size: 0.4rem
      .title
        flex: 1
        margin: 0.12rem 0 0.2rem 0
        padding-left: 0.2rem
        height: 0.64rem
        line-height: 0.64rem
        color: #fff
</style>
