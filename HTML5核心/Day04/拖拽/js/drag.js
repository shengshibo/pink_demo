(function (w) {
	w.$ = {};
	$.drag = function drag (node, value, node2) {
		/**
		* @param {Object} node 拖拽元素
		* @param {Object} value 吸附距离
		* @param {Object} node2 碰撞元素
		*/
		// 鼠标点击元素时,元素一开始的位置
		var startPoint = {x: 0, y: 0};
		var mouseDownPoint = {x: 0, y: 0};
		var mouseMovePoint = {x: 0, y: 0};
		value = value >= 0 ? value : 0;
		node.onmousedown = function (ev) {
			ev = ev || window.event;
			startPoint.x = this.offsetLeft;
			startPoint.y = this.offsetTop;
			mouseDownPoint.x = ev.clientX;
			mouseDownPoint.y = ev.clientY;
			// 曲线救国
			if (this.setCapture) {
				this.setCapture();
			}
			document.onmousemove = function (ev) {
				ev = ev || window.event;
				var mouseMovePoint = {x: 0, y: 0};
				mouseMovePoint.x = ev.clientX;
				mouseMovePoint.y = ev.clientY;
				var dis = {x: 0, y: 0};
				dis.x = mouseMovePoint.x - mouseDownPoint.x;
				dis.y = mouseMovePoint.y - mouseDownPoint.y;
				var L = (startPoint.x + dis.x) < value ? 0 : (startPoint.x + dis.x);
				var T = (startPoint.y + dis.y) < value ? 0 : (startPoint.y + dis.y);
				T = T > document.documentElement.clientHeight - node.offsetHeight - value ? document.documentElement.clientHeight - node.offsetHeight : T;
				L = L > document.documentElement.clientWidth - node.offsetWidth - value ? document.documentElement.clientWidth - node.offsetWidth : L;
				node.style.left = L + "px";
				node.style.top = T + "px";
				if (node2) {
					// 碰撞检测
					var T1 = node.offsetTop;
					var B1 = node.offsetTop + node.offsetHeight;
					var L1 = node.offsetLeft;
					var R1 = node.offsetLeft + node.offsetWidth;
					var T2 = node2.offsetTop;
					var B2 = node2.offsetTop + node2.offsetHeight;
					var L2 = node2.offsetLeft;
					var R2 = node2.offsetLeft + node2.offsetWidth;
					if (R1 < L2 || B1 < T2 || R2 < L1 || B2 < T1) {
						// 没有撞到
						node2.src = "img/aa.jpg";
					} else {
						node2.src = "img/bb.jpg";
					}
				}
			}
			document.onmouseup = function () {
				document.onmousemove = document.onmouseup = null;
				if (document.releaseCapture) {
					document.releaseCapture();
				}
			}
			// 禁止不了 IE8 以下浏览器事件的默认行为
			return false;
		}
	}
})(window)