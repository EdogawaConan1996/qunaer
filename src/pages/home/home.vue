<template>
  <div class="home">
    <header-component></header-component>
    <swiper-component :swiper-list="swiperList"></swiper-component>
    <icons-component :icon-list="iconList"></icons-component>
  </div>
</template>

<script type="text/javascript">
  import HeaderComponent from '@/components/header/header'
  import SwiperComponent from '@/components/swiper/swiper'
  import IconsComponent from '@/components/icons/icons'
  import {getIndex} from "@/api/data";

  export default {
    name: "home",
    components: {
      HeaderComponent,
      SwiperComponent,
      IconsComponent
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
