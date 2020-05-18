// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from '@/store/store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false
import './assets/css/common.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:new Vuex.Store(store),
  components: { App },
  template: '<App/>'
})
