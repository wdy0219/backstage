import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./assets/scss/reset.scss"

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import http from './http'
Vue.prototype.$http = http

import './mock'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.commit('addMenu', router)
  }
}).$mount("#app");
