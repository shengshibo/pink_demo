// 入口js：创建Vue实例
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>' // 从今天开始标签结尾的/必须要写，不写会出现一些莫名奇妙的错误
})
