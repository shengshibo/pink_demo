### 复习day06
  1. tab选项卡布局
    less继承（清除浮动，注意加all）
  2. tab选项卡基本滑屏逻辑
    滑屏的必要参数都拿对象来存储
    防抖动
      防y轴的抖动
  3. 基于tab本身业务的滑屏逻辑
    --- 滑屏区域和滑屏元素是同一个dom节点
    --- 手指没有划过1/2
      触发正常的滑屏逻辑，我们不关心touchmove的触发次数
    --- 手指划过1/2
      我们必须确定touchmove中划过1/2的跳转（jump）只触发一次
        滑屏元素要跳转到指定位置
        小绿要同步（now++ now--）
### 注意点
  让一个逻辑只触发一次
    1. 定时器
      在一段时间内触发一次
    2. 立flag
      在一类操作内触发一次
    3. 循环定时器，用dom2对transitionend绑定回调时
      回调的第一行
        清除循环定时器
        解绑事件
    4. transition指定样式的时候，明确出给哪个样式指定
