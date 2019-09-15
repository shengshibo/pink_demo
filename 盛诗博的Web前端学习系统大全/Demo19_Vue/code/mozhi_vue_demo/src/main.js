import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* eslint-disable no-new */
new Vue({ // 配置对象的属性名都是一些确定的属性名
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
