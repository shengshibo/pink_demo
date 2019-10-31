### 第一版手动橡皮筋效果
  disX：touchstart到touchend整个过程中手指滑动的距离
    elementX为基准（每次手指touchstart的时候，元素的位置）
  pointDis：nowPoint - lastPoint
    在touchmove的最后一定要记住同步nowpoint给lastPoint
    应该以实时位置为基准（mozhi.css函数）

### 手动橡皮筋
  减小每次手指移动（一次touchmove手指滑动的距离）的有效距离

### 快速滑屏
  拿到手指touchend时的speed
    以速度为基准值延长目标位置
      例子：targetX = translateX + speed * 200
  
  speed：最后一次touchmove过程中的平均速度
    pointDis / timeDis
    速度的正负代表方向

### 快速滑屏的橡皮筋效果
  贝塞尔

### 快速滑屏的橡皮筋效果 和 手动滑屏的冲突
  在手动橡皮筋触发时不开启快速滑屏

### 2个bug
  不处理disTime：首次点击导航后滑屏会失效
    解决方案：disTime = 1
  
  速度的残留：
    每次touchstart时，重置disPoint
    解决方案：disPoint = 0

### 防抖动
  isX
  isFirst
  判断用户的首次操作
    如果是x轴滑屏，不管用户以后怎么操作，滑屏逻辑永远都会被触发
    如果是y轴滑屏，不管用户以后怎么操作，滑屏逻辑永远都不会被触发

    怎样防止首次抖动
      1. 确定了用户首次操作的方向
        isFirst 在进入逻辑后就被设置为true，直到下一次touchstart事件的开始才会重置为false
        如果是y 直接return
    怎样防止后续抖动
      在touchmove开始时，就对用户的首次操作进行判断
        如果是y 直接return
