// Vue插件库
(function (window) {
  // 需要向外暴露的插件对象
  let MozhiPlugin = {}
  // 插件对象必须有一个install()
  MozhiPlugin.install = (Vue, options) => {
    // 添加全局方法和属性
    Vue.myGlobalMethod = () => {
      console.log('Vue 函数对象的方法myGlobalMethod()')
    }
    // 添加全局资源
    Vue.directive('my-directive', (el, binding) => {
      el.textContent = binding.value.toUpperCase()
    })
    // 添加实例方法
    Vue.prototype.$myMethod = () => {
      console.log('Vue实例对象的方法$myMethod()')
    }
  }
  window.MozhiPlugin = MozhiPlugin
})(window)