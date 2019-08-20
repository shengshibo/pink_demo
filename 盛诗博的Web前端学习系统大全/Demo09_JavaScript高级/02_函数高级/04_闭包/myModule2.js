(function (window) {
	// 私有数据
	var msg = "my mozhi"
	// 操作数据的函数
	function doSomething() {
		console.log("doSomeing()" + msg.toUpperCase())
	}
	function doOtherthing() {
		console.log("doOtherthing()" + msg.toLowerCase())
	}
	// 向外暴露对象（给外部使用的方法）
	window.module = {
		"doSomething": doSomething,
		"doOtherthing": doOtherthing
	}
})(window) // 这里和上面的 window 写的好处是在于代码压缩的时候会把函数中的window处理成短的变量