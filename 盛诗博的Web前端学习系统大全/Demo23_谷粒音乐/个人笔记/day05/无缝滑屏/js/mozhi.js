(function (window) {
  window.mozhi = {}
  window.mozhi.css = function (node, type, value) {
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

  window.mozhi.carousel = function (arr) {
        
    var carouselWrap = document.querySelector('.carousel-wrap')
    if (carouselWrap) {
      var pointsLength = arr.length

      // 无缝
      var needCarousel = carouselWrap.getAttribute('needCarousel')
      needCarousel = needCarousel === null ? false : true
      if (needCarousel) {
        arr = arr.concat(arr)
      }
      // 布局
      var ulNode = document.createElement('ul')
      var styleNode = document.createElement('style')
      ulNode.classList.add('list')
      for (var i = 0; i < arr.length; i++) {
        ulNode.innerHTML += '<li><a href="javascript:;"><img src="' + arr[i] + '"></a></li>'
      }
      styleNode.innerHTML = '.carousel-wrap > .list {width: ' + arr.length + '00%;}.carousel-wrap > .list > li {width: ' + 1 / arr.length * 100 + '%;}'
      carouselWrap.appendChild(ulNode)
      document.head.appendChild(styleNode)

      var imgNode = document.querySelector('.carousel-wrap > .list > li > a > img')
      setTimeout(function () {
        carouselWrap.style.height = imgNode.offsetHeight + 'px'
      }, 100)

      var pointsWrap = document.querySelector('.carousel-wrap > .points-wrap')
      if (pointsWrap) {
        for (var i = 0; i < pointsLength; i++) {
          if (i === 0) {
            pointsWrap.innerHTML += '<span class="active"></span>'
          } else {
            pointsWrap.innerHTML += '<span></span>'
          }
        }
        var pointsSpan = document.querySelectorAll('.carousel-wrap > .points-wrap > span')
      }

      /*
        滑屏
        1. 得到元素一开始的位置
        2. 得到手指一开始的位置
        3. 得到手指move的实时距离
        4. 将手指移动的距离加给元素
      */
      /*
        防抖动
        1. 判断用户首次滑屏的方向
        2. 如果是X轴，以后不管用户怎么划都会抖动
        3. 如果是y轴，以后不管用户怎么划都不会抖动
      */
      // 手指一开始的位置
      var startX = 0
      var startY = 0
      // 元素一开始的位置
      var elementX = 0
      var elementY = 0

      var index = 0

      // 首次滑屏的方向
      var isX = true
      var isFirst = true

      carouselWrap.addEventListener('touchstart', function (ev) {
        ev = ev || event
        var TouchC = ev.changedTouches[0]
        ulNode.style.transition = 'none'

        isX = true
        isFirst = true

        // 清除定时器
        clearInterval(timer)

        if (needCarousel) {
          // 无缝
          /*
            点击第一组的第一张时，瞬间跳转到第二组的第一张
            点击第二组的最后一张时，瞬间跳转到第一组的最后一张
          */
          // index 代表ul的位置
          var index = mozhi.css(ulNode, 'translateX') / document.documentElement.clientWidth
          if (-index === 0) {
            index = -pointsLength
          } else if (-index === arr.length - 1) {
            index = -pointsLength + 1
          }

          mozhi.css(ulNode, 'translateX', index * document.documentElement.clientWidth)
        }

        startX = TouchC.clientX
        startY = TouchC.clientY
        // elementX = ulNode.offsetLeft
        elementX = mozhi.css(ulNode, 'translateX')
        elementY = mozhi.css(ulNode, 'translateY')
      })
      carouselWrap.addEventListener('touchmove', function (ev) {
        if (!isX) {
          // 二次以后的防抖动
          return
        }
        ev = ev || event
        var TouchC = ev.changedTouches[0]
        var nowX = TouchC.clientX
        var nowY = TouchC.clientY
        var disX = nowX - startX
        var disY = nowY - startY

        if (isFirst) {
          isFirst = !isFirst
          if (Math.abs(disY) > Math.abs(disX)) { // y轴滑动
            isX = false
            // 首次防抖动
            return
          }
        }

        mozhi.css(ulNode, 'translateX', elementX + disX)
      })
      carouselWrap.addEventListener('touchend', function (ev) {
        ev = ev || event
        // index 抽象了ul的实时位置
        index = mozhi.css(ulNode, 'translateX') / document.documentElement.clientWidth
        index = Math.round(index)
        // 对超出进行控制
        if (index > 0) {
          index = 0
        } else if (index < 1 - arr.length) {
          index = 1 - arr.length
        }
        littlePoint(index)
        ulNode.style.transition = '.5s transform'
        mozhi.css(ulNode, 'translateX', index * (document.documentElement.clientWidth))

        // 开启自动轮播定时器
        if (needAuto) {
          auto()
        }
      })

      // 自动轮播
      var timer = 0
      var needAuto = carouselWrap.getAttribute('needAuto')
      needAuto = needAuto === null ? false : true
      if (needAuto) {
        auto()
      }
      
      function auto () {
        clearInterval(timer)
        timer = setInterval(function () {
          if (index === 1 - arr.length) {
            ulNode.style.transition = 'none'
            index = 1 - arr.length / 2
            mozhi.css(ulNode, 'translateX', index * document.documentElement.clientWidth)
          }
          setTimeout(function () {
            index--
            littlePoint(index)
            ulNode.style.transition = '.5s transform'
            mozhi.css(ulNode, 'translateX', index * document.documentElement.clientWidth)
          }, 50)
        }, 2000)
      }

      function littlePoint (index) {
        if (pointsSpan) {
          for (let i = 0; i < pointsSpan.length; i++) {
            pointsSpan[i].classList.remove('active')
          }
          pointsSpan[-index % pointsLength].classList.add('active')
        }
      }
    }
  }

  window.mozhi.dragNav = function () {
    // 滑屏区域
    var wrap = document.querySelector('.mozhi-nav-drag-wrapper')
    // 滑屏元素
    var item = document.querySelector('.mozhi-nav-drag-wrapper .list')

    // 元素的初始位置
    var elementX = 0
    // 手指的初始位置
    var startX = 0
    var minX = wrap.clientWidth - item.offsetWidth
    // 快速滑屏的必要参数
    var lastTime = 0
    var lastPoint = 0
    var timeDis = 1
    var pointDis = 0
    wrap.addEventListener('touchstart', function (ev) {
      ev = ev || event
      var touchC = ev.changedTouches[0]

      item.style.transition = 'none'
      startX = touchC.clientX
      elementX = mozhi.css(item, 'translateX')

      lastTime = new Date().getTime()
      lastPoint = touchC.clientX

      // 清除速度的残留
      pointDis = 0

      item.handMove = false
    })
    wrap.addEventListener('touchmove', function (ev) {
      ev = ev || event
      var touchC = ev.changedTouches[0]
      var nowX = touchC.clientX
      var disX = nowX - startX
      var translateX = elementX + disX

      var nowTime = new Date().getTime()
      var nowPoint = touchC.clientX
      // var nowPoint = mozhi.css(item, 'translateX')
      timeDis = nowTime - lastTime
      pointDis = nowPoint - lastPoint

      lastTime = nowTime
      lastPoint = nowPoint

      /*
        橡皮筋效果

        translateX = mozhi.css(item, 'translateX') + pointDis * scale
      */
      if (translateX > 0) {
        item.handMove = true
        var scale = document.documentElement.clientWidth / (document.documentElement.clientWidth + translateX)
        translateX = mozhi.css(item, 'translateX') + pointDis * scale
      } else if (translateX < minX) {
        item.handMove = true
        var over = minX - translateX
        var scale = document.documentElement.clientWidth / (document.documentElement.clientWidth + over)
        translateX = mozhi.css(item, 'translateX') + pointDis * scale
      }
      mozhi.css(item, 'translateX', translateX)
    })
    wrap.addEventListener('touchend', function () {
      var translateX = mozhi.css(item, 'translateX')
      if (!item.handMove) {
        // 速度越大 位移越远
        var speed = pointDis / timeDis
        speed = Math.abs(speed) < 0.5 ? 0 : speed
        var targetX = translateX + speed * 200

        var time = Math.abs(speed) * 0.1
        time = time < 0.8 ? 0.8 : time
        time = time > 2 ? 2 : time

        // 快速滑屏的橡皮筋效果
        var bsr = ''
        if (targetX > 0) {
          targetX = 0
          bsr = 'cubic-bezier(.17,1.37,.96,1.59)'
        } else if (targetX < minX) {
          targetX = minX
          bsr = 'cubic-bezier(.17,1.37,.96,1.59)'
        }

        item.style.transition = time + 's ' + bsr + ' transform'
        mozhi.css(item, 'translateX', targetX)
      } else {
        // 手动橡皮筋回弹效果
        item.style.transition = '1s transform'
        if (translateX > 0) {
          translateX = 0
          mozhi.css(item, 'translateX', translateX)
        } else if (translateX < minX) {
          translateX = minX
          mozhi.css(item, 'translateX', translateX)
        }
      }
    })
  }
})(window)