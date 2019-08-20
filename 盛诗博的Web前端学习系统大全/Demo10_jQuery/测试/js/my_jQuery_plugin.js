(function () {
  // 扩展 $ 的方法
  $.extend({
    min: function (a, b) {
      return a < b ? a : b
    },
    max: function (c, d) {
      return c > d ? c : d
    },
    leftTrim: function (str) {
      return str.replace(/^\s+/, '')
    },
    rightTrim: function (str) {
      return str.replace(/\s+$/, '')
    }
  })
  // 扩展jQuery对象方法
  $.fn.extend({
    checkAll: function () {
      this.prop('checked', true) // 这里this本身是jQuery对象
    },
    uncheckAll: function () {
      this.prop('checked', false)
    },
    reverseCheck: function () {
      this.each(function () {
        this.checked = !this.checked
      })
    }
  })
})()