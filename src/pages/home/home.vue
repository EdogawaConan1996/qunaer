<template>
  <div class="home">
    <header-component></header-component>
    <swiper-component :swiper-list="swiperList"></swiper-component>
    <icons-component :icon-list="iconList"></icons-component>
    <recommend-component :recommend-list="recommendList"></recommend-component>
    <weekend-component :weekend-list="weekendList"></weekend-component>
  </div>
</template>

<script type="text/javascript">
  import HeaderComponent from '@/pages/home/components/header/header'
  import SwiperComponent from '@/pages/home/components/swiper/swiper'
  import IconsComponent from '@/pages/home/components/icons/icons'
  import RecommendComponent from '@/pages/home/components/recommend/recommend'
  import WeekendComponent from "@/pages/home/components/weekend/weekend"
  import {getIndex} from "@/api/data"

  export default {
    name: "home",
    components: {
      WeekendComponent,
      HeaderComponent,
      SwiperComponent,
      IconsComponent,
      RecommendComponent
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {},
    created() {
      getIndex().then(resp => {
        if (resp) {
          this.swiperList = resp.swiperList
          this.iconList = resp.iconList
          this.recommendList = resp.recommendList
          this.weekendList = resp.weekendList
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped lang="stylus">

</style>
