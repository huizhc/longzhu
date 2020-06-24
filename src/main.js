import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import 'lib-flexible'
window.$ = window.jQuery = require('./assets/js/jquery.min.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
