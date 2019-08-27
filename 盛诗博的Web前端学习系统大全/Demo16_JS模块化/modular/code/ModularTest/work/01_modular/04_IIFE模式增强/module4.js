/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

(function (window, $) {
  let msg = "mozhi"
  function foo () {
    console.log("foo", msg)
    $('body').css('backgroundColor', 'red')
  }
  window.mozhi = foo
})(window, jQuery)
