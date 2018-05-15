import Vue from 'vue'
import App from './app.vue'
import VueDisclosure from '../src'

Vue.config.debug = true

Vue.use(VueDisclosure)

new Vue({
  el: '#app',
  render: h => h(App),
})