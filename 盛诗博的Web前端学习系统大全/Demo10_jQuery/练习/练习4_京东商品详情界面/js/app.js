$(function () {
  
  function showhide () {
    $('[name=show_hide]').hover(function () {
      $('#' + this.id + '_items').show()
    }, function () {
      $('#' + this.id + '_items').hide()
    })
  }
  
  function hoverSubMenu () {
    $('.cate_item').hover(function () {
      $(this).children('.sub_cate_box').show()
    }, function () {
      $(this).children('.sub_cate_box').hide()
    })
  }
  
  function search () {
    $('#txtSearch').on('focus keyup', function () {
      var txt = this.value.trim()
      if (txt) {
        $('#search_helper').show()
      }
    }).blur(function () {
      $('#search_helper').hide()
    })
  }
  
  function share () {
    var isOpen = false
    var $shareMore = $('#shareMore')
    var $parent = $shareMore.parent()
    var $as = $shareMore.prevAll('a:lt(2)')
    var $b = $shareMore.children('b')
    $shareMore.click(function () {
      if (isOpen) {
        $b.removeClass('backword')
        $parent.css('width', 155)
      } else {
        $b.addClass('backword')
        $parent.css('width', 200)
      }
      $as.toggle()
      isOpen = !isOpen
    })
  }
  
  function address () {
    $('#store_select').hover(function () {
      $(this).children(':gt(0)').show()
    }, function () {
      $(this).children(':gt(0)').hide()
    }).children(':last').click(function () {
      $(this).parent().children(':gt(0)').hide()
    })
  }
  
  function clickTabs () {
    var oldHover = 0
    var $store_tabsLi = $('#store_tabs>li')
    $store_tabsLi.click(function () {
      this.className = 'hover'
      $store_tabsLi.eq(oldHover).removeClass('hover')
      oldHover = $(this).index()
    })
  }
  
  function hoverMiniCart () {
    $('#minicart').hover(function () {
      this.className = 'minicart'
      $(this).children(':last').show()
    }, function () {
      this.className = ''
      $(this).children(':last').hide()
    })
  }
  
  function clickProductTabs () {
    var $lis = $('#product_detail>ul>li')
    var $contents = $('#product_detail>div:gt(0)')
    $lis.click(function () {
      $lis.removeClass('current')
      this.className = 'current'
      $contents.hide()
      var index = $(this).index()
      $contents.eq(index).show()
    })
  }
  
  function moveMiniImg () {
    var $as = $('#preview>h1>a')
    var $backward = $as.first()
    var $forward = $as.last()
    var $ul = $('#icon_list')
    var SHOW_COUNT = 5
    var imgCount = $ul.children('li').length
    var moveCount = 0 // 移动的次数，向右为正，左为负
    var liWidth = $ul.children(':first').width()
    
    // 初始化更新
    if (imgCount > SHOW_COUNT) {
      $forward[0].className = 'forward'
    }
    
    $backward.click(function () {
      if (moveCount === 0) {
        return
      }
      moveCount--
      $forward[0].className = 'forward'
      if (moveCount === 0) {
        $backward[0].className = 'backward_disabled'
      }
      $ul.css({'left': -moveCount * liWidth})
    })
    $forward.click(function () {
      if (moveCount === imgCount - SHOW_COUNT) {
        return
      }
      moveCount++
      $backward[0].className = 'backward'
      if (moveCount === imgCount - SHOW_COUNT) {
        $forward[0].className = 'forward_disabled'
      }
      $ul.css({'left': -moveCount * liWidth})
    })
  }
  
  function hoverMiniImg () {
    $('#icon_list>li').hover(function () {
      $(this).children().addClass('hoveredThumb')
      $('#mediumImg').attr('src', $(this).children('img').attr('src').replace('.jpg', '-m.jpg'))
    }, function () {
      $(this).children().removeClass('hoveredThumb')
    })
  }
  
  function bigImg () {
    var $mediumImg = $('#mediumImg')
    var $mask = $('#mask')
    var $maskTop = $('#maskTop')
    var $largeImgContainer = $('#largeImgContainer')
    var $loading = $('#loading')
    var $largeImg = $('#largeImg')
    
    $largeImg
      .width($maskTop.width() * 2)
      .height($maskTop.height() * 2)
    
    $largeImg.on('load', function () {
      $loading.hide()
      $largeImg.show()
    })
    
    $maskTop.hover(function () {
      $mask.show()
      // 绑定mousemove监听
      $maskTop.mousemove(function (event) {
        var left = event.offsetX - $mask.width() / 2 < 0 ? 0 : event.offsetX > 0.75 * $(this).width() ? $(this).width() / 2 : event.offsetX - $mask.width() / 2
        var top = event.offsetY - $mask.height() / 2 < 0 ? 0 : event.offsetY > 0.75 * $(this).height() ? $(this).height() / 2: event.offsetY - $mask.height() / 2
        $mask.css({
          left: left,
          top: top
        })
        $largeImg.css({
          left: -left * $largeImg.width() / $maskTop.width(),
          top: -top * $largeImg.height() / $maskTop.height()
        })
      })
      var src = $mediumImg.attr('src').replace('-m.', '-l.')
      $largeImg.attr('src', src)
      $largeImgContainer.show()
    }, function () {
      $mask.hide()
      $largeImgContainer.hide()
      $loading.show()
    })
  }
  
  showhide()
  hoverSubMenu()
  search()
  share()
  address()
  clickTabs()
  hoverMiniCart()
  clickProductTabs()
  moveMiniImg()
  hoverMiniImg()
  bigImg()
})