<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input" />
    </div>
    <div ref="search" class="search-content" v-show="showList">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleClickCity(item)">{{item.name}}</li>
        <li class="search-item border-bottom no-content" v-show="list.length === 0">没有找到匹配内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapGetters, mapMutations} from "vuex";
  export default {
    name: "search-component",
    data() {
      return {
        keyword: '',
        list: [],
        timer: null,
        scroll: null,
        showList: false
      }
    },
    computed: {
      ...mapGetters({
        'getCityList': 'city/getCityList'
      }),
      cityList () {
        return this.getCityList
      },
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
      keyword () {
        console.log(this.keyword);
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.showList = false
          this.list = []
          return
        }
        this.showList = true
        this.timer = setTimeout(() => {
          const result = []
          console.log(this.cityList);
          for (let key in this.cityList.cities) {
            this.cityList.cities[key].forEach(value => {
              if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          console.log(this.list);
          this.list = result
        }, 300)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .search
    position: fixed
    top: 0.86rem
    left: 0
    width: 100%
    z-index: 10
    padding: 0 0.1rem
    height: 0.72rem
    background-color: $primary-color
    .search-input
      box-sizing: border-box
      padding: 0 0.1rem
      height: 0.62rem
      width: 97%
      line-height: 0.62rem
      border-radius: 0.06rem
      text-align: center
      color: #666
  .search-content
    z-index: 1
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    overflow: hidden
    background-color: #eee
    .search-item
      line-height: 0.62rem
      padding-left: 0.2rem
      background-color: #fff
      color: #666
      &.no-content
        padding: 0.2rem 0
        text-align: center
        background-color: transparent
</style>
