<template>
  <div class="list" ref="areaList">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="handleClickCity(item)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <template v-for="(list, key) in cityList">
          <div class="title border-topbottom" :ref="key">{{key}}</div>
          <ul class="item-list">
            <li class="item border-bottom" v-for="item in list" :key="item.id" @click="handleClickCity(item)">{{item.name}}</li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapGetters, mapMutations} from "vuex";
  export default {
    name: "city-list-component",
    data() {
      return {
        areaScroll: null
      }
    },
    computed: {
      ...mapGetters({
        'getCityList': 'city/getCityList',
        'getHotCities': 'city/getHotCities'
      }),
      cityList () {
        return this.getCityList
      },
      hotCities () {
        return this.getHotCities
      }
    },
    methods: {
      ...mapMutations({
        'setCity': 'city/setCity'
      }),
      handleClickCity(item) {
        this.setCity(item)
        this.$router.back()
      }
    },
    watch: {
      cityList () {
        this.$nextTick(() => {
          this.areaScroll = new BScroll(this.$refs.areaList, {
            click: true
          })
        })
      }
    },
    created () {
      this.$bus.on('letter-click', (key) => {
        this.areaScroll.scrollToElement(this.$refs[key][0], 300)
      })
    },
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .area
      .title
        line-height: 0.44rem
        background-color: #eee
        padding-left: 0.2rem
        color: #666
        font-size: 0.26rem
        &.border-topbottom
          &:before, &:after
            border-color: #ccc
      .button-list
        padding: 0.1rem 0.6rem 0.1rem 0.1rem
        overflow: hidden
        .button-wrapper
          float: left
          width: 33.33%
          .button
            margin: 0.1rem
            padding: 0.1rem 0
            text-align: center
            border: 0.02rem solid $primary-color
            border-radius: 0.06rem
            color: #666
      .item-list
        .item
          padding-left: 0.2rem
          line-height: 0.76rem
          color: #666
          .border-bottom
            &:before
              border-color: #ccc
</style>
