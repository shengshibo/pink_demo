### day02
	1. 注意点
		--- canvas 图像的渲染有别于 html 图像的渲染，
				canvas 的渲染极快，不会出现代码覆盖后延迟渲染的问题
				写 canvas 代码一定要 具有同步思想
		--- 在获取上下文时，一定要先判断
		--- 画布高宽的问题
				画布默认高宽 300 * 150
				切记一定要使用 html 的 attribute 的形式来定义画布的宽高
				通过 css 的形式定义会缩放画布内的图像
		--- 绘制矩形的问题
				a. 边框宽度的问题，边框宽度是在偏移量上下分别渲染一半，可能会出现小数边框，
					一旦出现小数边框都会向上取整
				b. canvas 的 api 只支持一种图像的直接渲染：矩形
		--- 我们没办法使用选择器选中 canvas 的图像
	2. 画布 api
		oc.getContext("2d");
		oc.width;
		oc.height;
	3. 上下文 api
		ctx.fillRect(x, y, w, h)：填充矩形
		ctx.strokeRect(x, ymwmh)：带边框的矩形
		ctx.clearRect(0, 0, oc.width, oc.height)：清除整个画布（注意原点的位置）
		ctx.fillStyle
		ctx.strokeStyle
		ctx.lineWidth
		ctx.lineCap
		ctx.lineJoin
		ctx.moveTo(x, y)：将画笔抬起点到 x，y 处
		ctx.lineTo(x, y)：将画笔移到 x，y 处
		ctx.rect(x, y, w, h)
		ctx.arc(x, y, r, degS, degE, dir)
		ctx.arcTo(x1, y1, x2, y2, r)：两个坐标、一个半径
			结合 moveTo(x, y) 方法使用
			x, y：起始点
			x1, y1：控制点
			x2, y2：结束点
		ctx.quadraticCurveTo(x1, y1, x2, y2)
			结合 moveTo(x, y) 方法使用
			x, y：起始点
			x1, y1：控制点
			x2, y2：结束点
			必须经过起点和终点
		ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3)
			结合 moveTo(x, y) 方法使用
			x, y：起始点
			x1, y1：控制点
			x2, y2：控制点
			x3, y3：结束点
			必须经过起点和终点
		ctx.fill()
		ctx.stroke()
		ctx.beginPath()：清除路径容器
		ctx.closePath()：闭合路径
			fill：自动闭合
			stroke：需要手动闭合
		ctx.save()：
			将画布当前状态（样式相关、变换相关）压入到样式栈中
		ctx.restore()：
			将样式栈中栈顶的元素弹到样式容器中，
			图像最终渲染依赖于样式容器
		ctx.translate(x, y)：将原点按当前坐标轴位移 x, y 个单位
		ctx.rotate(弧度)：将坐标轴按顺时针方向进行旋转
		ctx.scale(因子)：
			放大：放大画布，画布中的一个 css 像素所占据的物理面积变大，画布中包含的 css 像素的个数变少
				画布中图像所包含的 css 像素的个数不变
			缩小：缩小画布，画布中的一个 css 像素所占据的物理面积变小，画布中包含的 css 像素的个数变多
				画布中图像所包含的 css 像素的个数不变