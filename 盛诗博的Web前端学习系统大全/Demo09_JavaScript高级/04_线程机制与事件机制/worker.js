function Fibonacci(n) {
	return n <= 2 ? 1 : Fibonacci(n - 1) + Fibonacci(n - 2)
}

var onmessage = function (event) { // 不能用函数声明
	postMessage(Fibonacci(event.data))
}
/*
	alert(result) alert 是 window 的方法，在分线程不能调用
	分线程中的全局对象不再是 window，所以在分线程中不可能更新界面
	分线程不能更新由主线程操作的界面，也就是用于长时间的计算防止页面挂起
	
	不足点：
		1. 慢
		2. 不能跨域加载 JS
		3. worker 内代码不能访问 DOM（不能更新 UI），因为全局对象不是 window
		4. 不是每个浏览器都支持这个新特性
*/