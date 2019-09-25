<template>
  <div class="city">
    <header-component></header-component>
    <search-component></search-component>
    <city-list-component></city-list-component>
    <alphabet-component></alphabet-component>
  </div>
</template>

<script>
  import HeaderComponent from "./components/header/header"
  import SearchComponent from "./components/search/search"
  import CityListComponent from "./components/list/list";
  import AlphabetComponent from "./components/alphabet/alphabet";
  import {mapActions} from 'vuex'
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
    methods: {
      ...mapActions({
        'getCitiesInfo': 'city/getCitiesInfo'
      })
    },
    created() {
      this.getCitiesInfo()
    }
  }
</script>

<style scoped>
  .city {
  }
</style>
