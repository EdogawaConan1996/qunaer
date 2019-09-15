<template>
  <div class="home">
    <header-component></header-component>
  </div>
</template>
s
<script type="text/javascript">
  import HeaderComponent from '@/components/header/header'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {getIndex} from "../../api/data";

  export default {
    name: "home",
    components: {
      HeaderComponent,
      swiper,
      swiperSlide
    },
    data() {
      return {}
    },
    methods: {},
    created() {
      getIndex().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped lang="stylus">
  
</style>
