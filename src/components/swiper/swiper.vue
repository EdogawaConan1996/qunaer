<template>
  <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="no pic" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiper-component',
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        initialSlide: 0,
        direction: 'horizontal',
        speed: 300,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
  .swiper >>> .swiper-pagination-bullet-active
    background-color: #ffffff
</style>
