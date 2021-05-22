import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import dateFilter from '@/filters/date.filter.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.prototype.$axios = axios

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
