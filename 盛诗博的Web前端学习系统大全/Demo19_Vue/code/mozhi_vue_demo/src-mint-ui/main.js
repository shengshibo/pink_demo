import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

// 注册标签(全局)
Vue.component('mt-button', Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
