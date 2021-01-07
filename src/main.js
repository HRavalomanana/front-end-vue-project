import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'


import './app.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
