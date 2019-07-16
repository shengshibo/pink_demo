###Day02复习
	1. 盒模型新增样式
		box-shadow
			关键字（内外阴影）
			length（x轴的偏移量）
			length（y轴的偏移量）
			length（模糊程度）
			length（阴影面积）
			color（阴影颜色）
		text-shadow
			length（x轴的偏移量）
			length（y轴的偏移量）
			length（模糊程度）
			color（阴影颜色）
	2. 倒影（webkit内核 文字描边 背景镂空）
		渐变倒影
	3. box-sizing
		border-box：代表元素上设置的 width 和 height 表示的是 border-box 尺寸
		content-box：代表元素上设置的 width 和 height 表示的是 content-box 尺寸
	4. 层级
		a. 浮动提升半层，只有在浮动的情况下，才需要考虑元素分两层
			定位元素提一层
				相对定位元素会在文档流里有残留
		b. z-index 为 1 怎么都会比 a 高；z-index 为 -1 怎么都会比 a 低
	5. 包含块
		初始包含块：和视窗大小位置尺寸一样的矩形
			滚动系统滚动条会不会影响初始包含块的位置？
				会
			禁止系统滚动条
				html,
				body{
					height: 100%;
					overflow: hidden;
				}
			怎么解决 IE6 下固定定位失效的问题？
				用绝对定位来模拟固定定位
					1. 禁止系统滚动条
					2. 将滚动条作用在最外层的包裹器上或者在 body 上
					3. 因为移动包裹器或者 body 身上的滚动条并不会影响初始包含块的位置
						所以一个按照初始包含块定位的元素就不会产生移动
	6. 边框图片、渐变
	7. 背景
		css2
			background-color	平铺整个 border-box
			background-image	默认从 padding-box 开始绘制、从 border-box 开始裁剪、css3 中有多北背景
			background-repeat	控制是否平铺
			background-position
								控制背景图片在背景区域中的位置
								px
								百分比
									参照于背景区域减去背景图片的位图像素值
			background-attachment
								scroll：默认值，背景图不会随着元素滚动条的滚动而滚动
								fixed：背景图铺在视口中固定定位了
		css3
			background-origin
			background-clip
			background-size
				图片是自适应的
	8. 如何实现一张图片的垂直水平居中
		body:after{
			content: "";
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}
		img{
			vertical-align: middle;
		}