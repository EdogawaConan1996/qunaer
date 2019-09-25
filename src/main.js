// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueBus from 'vue-bus'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueBus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
