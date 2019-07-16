###播放器相关
	1. 音视频标签
		兼容（音视频的转码）
		attribute
			src
			width
			height
			controls
			autoplay
			loop
			muted
			preload
		property
			音量和静音属性不会同步，静音属性优先级更高
			load 函数：重新加载（结合 source 标签的时候才有用）