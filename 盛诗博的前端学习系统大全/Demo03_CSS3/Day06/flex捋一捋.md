flex 的简写属性
	flex: 1 (flex-basis: 0%, flex-grow: 1, flex-shrink: 1)
	等分部局
### 响应式布局核心 CSS3 媒体查询选择器
	@media 媒体类型 and(关键字) 带条件的媒体属性 and 带条件的媒体属性 {
		// 规则
	}
	媒体类型：
		all：默认值
		screen：彩色屏幕
		print：打印预览
	媒体属性：
		width：浏览器的窗口尺寸
		device-width：设备尺寸
		device-pixel-ratio（必须加webkit前缀）：像素比
			--- 以上三个媒体属性可加 min 和 max 前缀
				min：最小值为谁
				max：最大值为谁
		横竖屏切换
			orientation: landscape（横屏）
			orientation: portrait（竖屏）
	关键字：
		only：处理浏览器兼容问题
		and：连接一条查询规则
		，：连接多条查询规则
		not：取反
### 多列布局

### 规范
	HTML
		什么叫 html5？
			是一个强大的技术集（html5 ~= html + css + js）
	CSS
		什么是 css3？
			css3 其实就是 html5 的一部分，而且现代前端中已经没有版本的概念，都是级别
	JS
		ECMASCRIPT
		DOM
		BOM(没有规范，window)