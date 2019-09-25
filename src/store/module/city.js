import {getCity} from "../../api/data";

export default {
  namespaced: true,
  state: {
    cityList: {},
    hotCities: [],
    city: {}
  },
  getters: {
    getCityList: state => state.cityList,
    getHotCities: state => state.hotCities,
    getCity: state => state.city
  },
  mutations: {
    setCityList(state, cityList) {
      state.cityList = cityList
    },
    setHotCities (state, hotCities) {
      state.hotCities = hotCities
    },
    setCity (state, city) {
      state.city = city
    }
  },
  actions: {
    getCitiesInfo({commit}) {
      getCity().then(resp => {
        if (resp.cities) {
          commit('setCityList', resp.cities)
        } else {
          commit('setCityList', [])
        }
        if (resp.hotCities) {
          commit('setHotCities', resp.hotCities)
        } else {
          commit('setHotCities', [])
        }
      }).catch(err => {
        console.log(err)
        commit('setCityList', [])
        commit('setHotCities', [])
      })
    }
  }
}
