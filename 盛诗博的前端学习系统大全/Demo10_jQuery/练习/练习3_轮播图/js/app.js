$(function () {
  var $container = $('#container')
  var $list = $('#list')
  var $points = $('#pointsDiv>span')
  var $prev = $('#prev')
  var $next = $('#next')
  var PAGE_WIDTH = 600
  var TIME = 400
  var ITEM_TIME = 20
  var imgCount = $points.length
  var index = 0
  var moving = false
  
  $next.click(function () {
    nextPage(true)
  })
  $prev.click(function () {
    nextPage(false)
  })
  
  var intervalId = setInterval(function () {
    nextPage(true)
  }, 1000)
  
  $container.hover(function () {
    clearInterval(intervalId)
  }, function () {
    intervalId = setInterval(function () {
      nextPage(true)
    }, 1000)
  })
  
  $points.click(function () {
    var targetIndex = $(this).index()
    if (targetIndex != index) {
      nextPage(targetIndex)
    }
  })
  
  function nextPage (next) {
    if (moving) {
      return false
    }
    moving = true
    // 需要移动的距离
    var offset = 0
    if (typeof next === 'boolean') {
      offset = next ? -PAGE_WIDTH : PAGE_WIDTH
    } else {
      offset = (next - index) * -PAGE_WIDTH
    }
    // 每帧需要移动的距离
    var itemOffset = offset / (TIME / ITEM_TIME)
    // 当前元素相对父元素偏移量
    var currentLeft = $list.position().left
    // 一共需要偏移多少
    var targetLeft = currentLeft + offset
    var intervalId = setInterval(function () {
      currentLeft += itemOffset
      if (currentLeft === targetLeft) {
        clearInterval(intervalId)
        moving = false
        if (currentLeft === (imgCount + 1) * -PAGE_WIDTH) {
          currentLeft = -PAGE_WIDTH
        } else if (currentLeft === 0) {
          currentLeft = imgCount * -PAGE_WIDTH
        }
      }
      $list.css('left', currentLeft)
    }, ITEM_TIME)
    updatePoints(next)
  }
  function updatePoints(next) {
    var targetIndex = 0
    if (typeof next === 'boolean') {
      targetIndex = next ? (index + 1) == imgCount ? 0 : index + 1 : (index - 1) < 0 ? imgCount - 1 : index - 1
    } else {
      targetIndex = next
    }
    // $points.eq(index).removeClass('on')
    $points[index].className = ''
    // $points.eq(targetIndex).addClass('on')
    $points[targetIndex].className = 'on'
    index = targetIndex
  }
})