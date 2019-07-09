### day01
	1. width: auto; width: 100%;
	2. 响应式页面
		定制化：修改 bootstrap 的源文件
			将 bootstrap 入口 less 文件作为混合使用
	3. attribute & property
		--- 什么是 attribute？
			html 的预定义和自定义属性
		--- 什么是 property？
			js 对象身上的直接属性
		--- 什么是布尔值属性，什么是非布尔值属性？
			property 所对应的属性值是否是布尔类型
		--- attribute 和 property 的同步关系
			非布尔值属性
				实时同步
			布尔值属性
				没有动过 property
					attribute 会同步 property
					property 不会同步 attribute
				动过 property
					attribute 不会同步 property
					property 不会同步 attribute
		--- 浏览器认谁，用户操作的是谁
			property
		--- 在 jQuery 中的体现
			attr();
			prop();
		--- 总结
			布尔值属性最好使用 prop 方法
			非布尔值属性 attr 方法
		--- html5 中有关的属性
			classList：相对于 class 的 property（className）
				add
				remove
				toggle
			dataset：自定义属性（限制 data-x-y）的 property
	4. html5 导学
		html5 的意义，到底什么是 html5，html5 的优势
		h4 与 h5 的对比
			编码
			渲染模式
			mine 类型
		语义化标签