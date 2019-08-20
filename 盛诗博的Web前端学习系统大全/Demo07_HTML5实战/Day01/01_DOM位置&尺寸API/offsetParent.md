### offsetParent（如果 body 和 html 直接的 margin 被清掉）
	本身定位为 fixed
		==> offsetParent: null（不是火狐）
		==> offsetParent: body（火狐）
	本身定位不为 fixed
		父级没有定位
			==> offsetParent: body
		父级有定位
			==> offsetParent: 定位父级
### haslayout
	ie7以下，如果当前元素的某个父级触发了 haslayout，
	那么 offsetParent 就会被指向到这个触发了 layout 特性的父节点上
### 注意点
	1. 分清 parentNode 和 offsetParent 的区别
		parentNode：直接父级
		offsetParent：类似于 CSS 的包含块
	2. offsetParent 的作用
		offsetLeft 和 offsetTop 是参照于 offsetParent 的内边距边界的
	3. dom 里所有的元素都是有 offsetLeft 和 offsetTop 的