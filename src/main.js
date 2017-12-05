import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview'
import './components/common/css/iview.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(iView)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
