<template>
  <div class="gallery" @click.stop="closeGallery">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in imgList" :key="item">
          <img class="swiper-img" :src="item" alt="no pic" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "gallery",
    components: {swiper, swiperSlide},
    props: {
      imgList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          initialSlide: 0,
          direction: 'horizontal',
          speed: 300,
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true
        }
      }
    },
    methods: {
      closeGallery () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .gallery
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    left: 0
    bottom: 0
    left: 0
    width: 100%
    background-color: #000
    .wrapper
      overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 100%
      .swiper-img
        width: 100%
      & >>> .swiper-pagination-fraction
        color: #ffffff
</style>
