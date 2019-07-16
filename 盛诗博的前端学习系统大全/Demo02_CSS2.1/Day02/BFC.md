### 在解释 BFC 是什么之前，需要先介绍 Box、Formatting Context 的概念
	Box：CSS 布局的基本单位
		Box 是 CSS 布局的对象和基本单位，直观点来说，就是一个页面是由多个 Box 组成的
		元素的类型和 display 属性，决定了这个 Box 的类型。不同类型的 Box 会参与不同的 Formatting Context（有个决定如何渲染的容器），
		因此 Box 内的元素会以不同的方式渲染。让我们看看有哪些盒子：
			block-level box：
				display 属性为 block、list-item、table 的元素，会生成 block-level box。并且参与 block formatting context；
			inline-level box：
				display 属性为 inline、inline-block、inline-table 的元素，会生成 inline-level box。
				并且参与 inline formatting context；
	Formatting context
		Formatting context 是 W3C CSS2.1 规范中的一个概念。
		它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
		最常见的 Formatting context 有 Block formatting context（简称 BFC）
			Inline formatting context（简称 IFC）。
### BFC 是什么
	BFC（Block formatting context）直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level Box 参与，
	它规定了内部的 Block-level Box 如何布局，并且于这个区域外部毫不相关。
### BFC 布局规则
	1. 内部的 box 会在垂直方向，一个接一个的放置。
	2. BFC 的区域不会与 float box 重叠。
	3. 内部的 Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
	4. 计算 BFC 的高度时，浮动元素也参与计算。（清除浮动 haslayout）
	5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
### BFC 什么时候出现（哪些元素会生成 BFC）
	1. 根元素
	2. float 属性不为 none
	3. position 为 absolute 或 fixed
	4. overflow 不为 visible
	5. display 为 inline-block、table-cell、table-caption、flex、inline-flex