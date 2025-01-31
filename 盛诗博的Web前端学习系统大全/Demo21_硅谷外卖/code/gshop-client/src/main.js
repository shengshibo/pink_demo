/*
  入口JS
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'
import store from './store'
import loading from './common/imgs/loading.gif'

import './mock/mockServer' // 加载mockServer即可
import './filters'

Vue.use(VueLazyload, {
  loading
})

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上vue-router
  store // 使用上vuex
})
