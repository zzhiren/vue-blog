import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview'
import Vuex from 'vuex'
import store from './store'
import './components/common/css/iview.css'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(iView);
Vue.use(VueParticles);
Vue.use(Vuex);

Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
