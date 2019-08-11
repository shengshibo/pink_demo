(function (window) {
	// 添加点击事件
	function m_click(obj, fun) {
		obj.onclick = fun
	}
	// 通过 ID 获取对象
	function m_getEl(idName) {
		return document.getElementById(idName);
	}
	window.mozhi = {
		"m_click": m_click,
		"m_getEl": m_getEl
	}
})(window)