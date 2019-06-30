###steps(num, [start/end])
	num：拆成多少步（当 num 为 12 时，整个动画有 13 帧）
	start：看不见第一帧
	end：看不见最后一帧
	
	stransform 只能使用在块级元素上
###捋一捋
	0. flex frog 练习
		http://flexboxfroggy.com/
	1. flex基础点
		--- 什么是容器，什么是项目，什么是主轴，什么是侧轴？
		--- 项目永远排列在主轴的正方向上
		--- flex 分新旧两个版本
			-webkit-box
			-webkit-flex / flex
	2. 注意点
		--- 我们都知道新版本的 flex 要比老版本的 flex 强大很多，有没有必要学习老版本的 flex？
			移动端开发者必须要关注老版本的 flex
				因为很多移动端设备内核低只能用老版本的 flex
		--- 老版本的 box 通过两个属性四个属性值控制了主轴的位置和方向
			新版本的 flex 通过一个属性四个属性值控制了主轴的位置和方向
	3. 老版本
		容器
			容器的布局方向
				-webkit-box-oriend: horizontal / vertical
				控制主轴是哪一根
					horizontal：x轴
					vertical：y轴
			容器的排列方向
				-webkit-box-direction: normal / reverse
				控制主轴的方向
					normal：从左往右（正方向）
					reverse：从右往左（反方向）
			富裕空间的管理
				只决定富裕空间的位置，不会给项目去分配空间
				主轴
					-webkit-box-pack
						主轴是 x 轴
							start：在右边
							end：在左边
							center：在两边
							justify：在项目之间
						主轴是 y 轴
							start：在下边
							end：在上边
							center：在两边
							justify：在项目之间
				侧轴
					-webkit-box-align
						侧轴是 x 轴
							start：在右边
							end：在左边
							center：在两边
						侧轴是 y 轴
							start：在下边
							end：在上边
							center：在两边
		项目
			弹性空间管理
				-webkit-box-flex：弹性因子（默认值为0）
	4. 新版本
		容器
			容器的布局方向
			容器的排列方向
				flex-direction
					控制主轴是哪一根，控制主轴的方向
					row：从左往右的 x 轴
					row-reverse：从右往左的 x 轴
					column：从上往下的 y 轴
					column-reverse：从下往上的 y 轴
			富裕空间的管理
				只决定富裕空间的位置，不会给项目去分配空间
				主轴
					justify-content
						flex-start：在主轴正方向
						flex-end：在主轴反方向
						center：在两边
						space-between：在项目之间
						space-around：在项目两边
				侧轴
					align-items
						flex-start：在侧轴的正方向
						flex-end：在侧轴的反方向
						center：在两边
						baseline：基线对齐
						stretch：登高布局（项目没有高度）
		项目
			弹性空间管理
				flex-grow：弹性因子（默认值为0）
	5. 新版本新增
		容器
			flex-wrap：控制的是侧轴的方向
				nowrap 不换行
				wrap 侧轴方向由上而下 （flex-shrink 失效）
				wrap-reverse 侧轴方向由下而上 （flex-shrink 失效）
			align-content：多行 / 列时侧轴富裕空间的管理（把多行 / 列看成一个整体）
			flex-flow：flex-direction 和 flex-wrap 的简写属性
				本质上控制了主轴和侧轴分别是哪一根，以及他们的方向
		项目
			order：控制项目的排列顺序
			align-self：项目自身富裕空间的管理
			flex-shrink：收缩因子
			flex-basis：伸缩规则计算的基准值（默认拿 width 或 height 的值）
	6. 伸缩规则
		flex-basis（默认值为 auto）
		flex-grow（默认值为 0）
			可用空间 = （容器大小 - 所有相邻项目 flex-basis 的总和）
			可扩展空间 = （可用空间 / 所有相邻项目 flex-grow 的总和）
			每项伸缩大小 = （伸缩基准值 flex-basis + （可扩展空间 * flex-grow 值））
		flex-shrink（默认值为 1）
			计算收缩因子与基准值乘的总和
			计算收缩因数
				收缩因数 = （项目的收缩因子 * 项目基准值） / 第一步计算总和
			移除空间的计算
				移除空间 = 项目收缩因数 * 负溢出的空间
	7. 侧轴富裕空间的管理
		单行单列时
			align-items
			align-self（优先级高）
		多行多列时
			align-content