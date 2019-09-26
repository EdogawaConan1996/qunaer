<template>
  <div class="list">
    <ul>
      <li class="item" v-for="item in listContent" :key="item.title">
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div v-if="item.children && item.children.length > 0" class="item-children">
          <list :list-content="item.children" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list",
    props: {
      listContent: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {}
    },
    methods: {},
    watch: {
      'listContent': function(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped lang="stylus">
  .list
    .item
      .item-title
        line-height: 0.8rem
        font-size: 0.32rem
        padding: 0 0.2rem
        .item-title-icon
          position: relative
          left: .06rem
          top: .06rem
          display: inline-block
          width: .36rem
          height: .36rem
          background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
          margin-right: .1rem
          background-size: .4rem 3rem
      .item-children
        padding: 0 0.2rem
</style>
