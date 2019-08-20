### Day03
	3D 自动无缝轮播 + 3D 手动轮播
	布局：
		小圆点居中
			1. 容器（宽度必须是一屏的宽度，text-align: center;）
			2. 子项（必须 inline-block）
		四个动画状态的确定
			四个关键帧！！！
	逻辑：
		---- 手动轮播（事件驱动）
			小圆点切换
				class 不能完全覆盖，classList 的形式去操作它
				for 循环内部添加事件
					将所有小圆点的 active remove 掉
					给当前触发点击事件的小圆点 add active（this）
					判断方向（在最外层循环时，将 i 绑定给每个小圆点的 index 属性；点击事件逻辑的最后将 this.index 赋予给 oldIndex）
						从左往右（this.index > oldIndex）
							对动画的切换
						从右往左（this.index < oldIndex）
							对动画的切换
		---- 自动轮播（定时器驱动）
			函数包裹循环定时器（方便重新开始）；在函数的第一行清除定时器
			自动了轮播只有一个方向；无缝
				this.index 替换成一个会自动 +1 的变量 autoIndex，逻辑的最后将 autoindex 赋予 ildIndex
				无缝的实现就是一个 if 判断，判断 autoindex 的取值范围
				从左往右（this.index > oldindex）
					对动画的切换
		---- 自动轮播和手动轮播 冲突与联系
			1. 每一次自动轮播都得告诉手动轮播我当前的位置（自动轮播进行中可能会触发手动轮播）
				联系：在自动轮播的定时器内 oldindex = autoindex（全局变量）
				冲突：自动轮播应该停止清除定时器（变量提升的问题）
			2. 手动轮播得告诉自动轮播，下一次播放时你应该从哪一屏开始（手动点的那一屏）
				在手动轮播的回调函数内 autoindex = this.index（全局变量）
				重新开启定时器