<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="no pic" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
    <button type="button" class="all-weekend-button">查看所有产品</button>
  </div>
</template>

<script>
  export default {
    name: "weekend-component",
    props: {
      weekendList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        weekendList: []
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/mixins.styl"
  @import "~@/assets/styles/varibles.styl"
  .weekend
    .weekend-title
      margin-top: 0.2rem
      line-height: 0.8rem
      background-color: #eee
      text-indent: 0.2rem
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
      .item-img
        width: 100%
    .item-info
      padding: 0.1rem
      min-width: 0
      .item-title
        line-height: 0.54rem
        font-size: 0.32rem
        ellipsis()
      .item-desc
        line-height: 0.4rem
        color: #aaa
        ellipsis()
      .item-button
        margin-top: 0.16rem
        background-color: #ff9300
        padding: 0 0.1rem
        border-radius: 0.06rem
        line-height: 0.44rem
        color: #ffffff
</style>
