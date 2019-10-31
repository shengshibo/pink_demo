(function (window) {
  window.css = function css (node, type, value) {
    if (typeof node === 'object' && typeof node['transform'] === 'undefined') {
      node['transform'] = {}
    }
  
    if (arguments.length >= 3) {
      // 设置
      var text = ''
      node['transform'][type] = value
      for (item in node['transform']) {
        if (node['transform'].hasOwnProperty(item)) {
          switch (item) {
            case 'translateX':
            case 'translateY':
              text += item + '(' + node['transform'][item] + 'px)'
              break
            case 'scale':
              text += item + '(' + node['transform'][item] + ')'
              break
            case 'rotate':
              text += item + '(' + node['transform'][item] + 'deg)'
              break
          }
        }
      }
      node.style.transform = node.style.webkitTransform = text
    } else if (arguments.length === 2) {
      // 读取
      value = node['transform'][type] // 在写库，能省则省，这里省一个变量
      if (typeof value === 'undefined') {
        switch (type) {
          case 'translateX':
          case 'translateY':
          case 'rotate':
            value = 0
            break
          case 'scale':
            value = 1
            break
        }
      }
      return value
    }
  }
})(window)