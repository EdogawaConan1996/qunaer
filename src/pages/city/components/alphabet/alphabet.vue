<template>
  <ul class="alphabet">
    <li
      class="item"
      v-for="item in alphabetList"
      @touchstart="handleTouchStart(item)"
      @touchmove="handleTouchMove(item, $event)"
      @touchend="handleTouchEnd(item)"
      @click="handleLetterClick(item)"
      :ref="item">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "alphabet-component",
    props: {
      cityList: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0
      }
    },
    computed: {
      alphabetList () {
        const list = []
        for (const key in this.cityList) {
          list.push(key)
        }
        return list
      }
    },
    methods: {
      handleLetterClick (item) {
        this.$bus.emit('letter-click',item)
      },
      handleTouchStart (item) {
        this.touchStatus = true
      },
      handleTouchMove (item, event) {
        if (this.touchStatus) {
          const touchY = event.touches[0].clientY - 79
          let index = Math.floor((touchY - this.startY) / 20)
          if (index < 0) {
            index = 0
          } else if (index > this.alphabetList.length) {
            index = this.alphabetList.length - 1
          }
          this.$bus.emit('letter-click', this.alphabetList[index])
        }
      },
      handleTouchEnd (item) {
        this.touchStatus = false
      }
    },
    updated() {
      if (this.alphabetList.length > 0) {
        this.startY = this.$refs[this.alphabetList[0]][0].offsetTop
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .alphabet
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 1.58rem
    right: 0
    bottom: 0
    width: 0.4rem
    background-color: #eee
    .item
      color: $primary-color
      text-align: center
      margin-bottom: 0.1rem
      &:last-child
        margin: 0
</style>
