<template>
    <div>
      <div class="banner">
        <img class="banner-img" :src="detail.bannerImg" alt="no pic" @click="showGalleries"/>
        <div class="banner-info">
          <div class="banner-title">{{detail.sightName}}</div>
          <div class="banner-number">
            <i class="iconfont icontupian banner-icon"></i>
            39
          </div>
        </div>
      </div>
      <fade-animation>
        <gallery :img-list="detail.gallaryImgs" v-show="showGallery" @close="showGallery = false"/>
      </fade-animation>
    </div>
</template>

<script>
  import Gallery from "../../../components/gallery";
  import FadeAnimation from "../../../components/fade-animation";
  export default {
    name: "banner",
    components: {FadeAnimation, Gallery},
    props: {
      detail: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        showGallery: false
      }
    },
    methods: {
      showGalleries () {
        this.showGallery = true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    overflow: hidden
    position: relative
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 0.6rem
      color: #fff
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: 0.32rem
        padding: 0 0.2rem
      .banner-number
        margin-top: 0.14rem
        padding: 0 0.4rem
        line-height: 0.4rem
        height: 0.32rem
        border-radius: 0.2rem
        background-color: rgba(0,0,0,.8)
        font-size: 0.24rem
        .banner-icon
          font-size: 0.24rem
</style>
