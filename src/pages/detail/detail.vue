<template>
    <div class="detail">
      <banner v-if="detail" :detail="detail"/>
    </div>
</template>

<script>
  import {getDetail} from "../../api/data";
  import Banner from "./components/banner";

  export default {
    name: "detail",
    components: {Banner},
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

</style>
