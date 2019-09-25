<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id" @click="turnToDetail(item)">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="no pic" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button type="button" class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <button type="button" class="all-recommend-button">查看所有产品</button>
  </div>
</template>

<script>
  export default {
    name: "recommend-component",
    props: {
      recommendList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      turnToDetail(item) {
        this.$router.push({
          name: 'detail',
          params: {
            id: item.id
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/mixins.styl"
  @import "~@/assets/styles/varibles.styl"
  .recommend
    .recommend-title
      margin-top: 0.2rem
      line-height: 0.8rem
      background-color: #eee
      text-indent: 0.2rem
    .item
      overflow: hidden
      display: flex
      height: 1.9rem
      .item-img
        width: 1.7rem
        height: 1.7rem
        padding: 0.1rem
      .item-info
        flex: 1
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
    .all-recommend-button
      width: 100%
      height: 0.8rem
      line-height: 0.8rem
      background-color: #ffffff
      font-size: 0.3rem
      color: $primary-color
      text-align: center
</style>
