(function (window) {
  window.mozhi = {}
  window.mozhi.css = function css (node, type, value) {
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

  window.mozhi.carousel = function carousel (arr) {
        
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
      // 手指一开始的位置
      var startX = 0
      // 元素一开始的位置
      var elementX = 0

      var index = 0

      carouselWrap.addEventListener('touchstart', function (ev) {
        ev = ev || event
        var TouchC = ev.changedTouches[0]
        ulNode.style.transition = 'none'

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
        // elementX = ulNode.offsetLeft
        elementX = mozhi.css(ulNode, 'translateX')
      })
      carouselWrap.addEventListener('touchmove', function (ev) {
        ev = ev || event
        var TouchC = ev.changedTouches[0]
        var nowX = TouchC.clientX
        var disX = nowX - startX

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
})(window)