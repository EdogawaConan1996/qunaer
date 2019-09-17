<template>
  <div class="city">
    <header-component></header-component>
    <search-component></search-component>
    <city-list-component :city-list="cityList"></city-list-component>
    <alphabet-component :city-list="cityList.cities"></alphabet-component>
  </div>
</template>

<script>
  import HeaderComponent from "./components/header/header"
  import SearchComponent from "./components/search/search"
  import {getCity} from "../../api/data";
  import CityListComponent from "./components/list/list";
  import AlphabetComponent from "./components/alphabet/alphabet";
  export default {
    name: "city",
    components: {AlphabetComponent, CityListComponent, SearchComponent, HeaderComponent},
    data() {
      return {
        cityList: {
          hotCities: [],
          cities: {}
        }
      }
    },
    computed: {

    },
    methods: {},
    created() {
      getCity().then(resp => {
        if (resp) {
          this.cityList = resp
        } else {
          this.cityList = []
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .city {
  }
</style>
