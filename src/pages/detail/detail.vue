<template>
  <div class="detail">
    <header-component :title="detail.sightName"/>
    <banner v-if="detail" :detail="detail"/>
    <div class="content">
      <list :list-content="detail.categoryList"/>
    </div>
  </div>
</template>

<script>
  import {getDetail} from "../../api/data";
  import Banner from "./components/banner";
  import HeaderComponent from "./components/header";
  import List from "./components/list";

  export default {
    name: "detail",
    components: {List, HeaderComponent, Banner},
    data () {
      return {
        detail: {}
      }
    },
    created() {
      getDetail().then(resp => {
        this.detail = resp
        console.log(this.detail);
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
