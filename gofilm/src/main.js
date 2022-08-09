import Vue from 'vue'
import App from './App.vue';
import router from './router'
import Paginate from 'vuejs-paginate'
import axios from 'axios'

// moment().format();
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component('Paginate', Paginate) 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
