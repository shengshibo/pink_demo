//尝试创建一个可以执行简单动画的函数
/*
 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
	//关闭上一个定时器
	clearInterval(obj.timer);

	//获取元素目前的位置
	var current = parseInt(getStyle(obj, attr));

	//判断速度的正负值
	//如果从0 向 800移动，则speed为正
	//如果从800向0移动，则speed为负
	if(current > target) {
		//此时速度应为负值
		speed = -speed;
	}

	//开启一个定时器，用来执行动画效果
	//向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
	obj.timer = setInterval(function() {

		//获取box1的原来的left值
		var oldValue = parseInt(getStyle(obj, attr));

		//在旧值的基础上增加
		var newValue = oldValue + speed;

		//判断newValue是否大于800
		//从800 向 0移动
		//向左移动时，需要判断newValue是否小于target
		//向右移动时，需要判断newValue是否大于target
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}

		//将新值设置给box1
		obj.style[attr] = newValue + "px";

		//当元素移动到0px时，使其停止执行动画
		if(newValue == target) {
			//达到目标，关闭定时器
			clearInterval(obj.timer);
			//动画执行完毕，调用回调函数
			callback && callback();
		}

	}, 30);
}

/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * 		name 要获取的样式名
 */
function getStyle(obj, name) {

	if(window.getComputedStyle) {
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj, null)[name];
	} else {
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}

}
/*
	定义一个函数用来向一个元素添加指定的 class 属性
	参数：
		obj：要添加 class 属性的元素
		className：要添加 class 的值
*/
function addClass(obj, className) {
	if (!hasClass(obj, className)) {
		obj.className += " " + className;
	}
}
/*
	判断一个元素中是否含有 class 属性
		如果有该 class 则返回 true，没有则返回 false
*/
function hasClass(obj, className) {
	// 通过正则表达式创建
	// var reg = /\b\b/;
	var reg = new RegExp("\\b" + className + "\\b");
	console.log(reg);
	return reg.test(obj.className);
}
/*
	删除一个元素中指定的属性
*/
function removeClass(obj, className) {
	var reg = new RegExp("\\b" + className + "\\b");
	obj.className = obj.className.replace(reg, "");
}
/*
	toggleClass 可以用来切换一个类
	如果元素中具有该类，则删除
	如果元素中没有该类，则添加
*/
function toggleClass(obj, className) {
	if (hasClass(obj, className)) {
		removeClass(obj, className);
	} else {
		addClass(obj, className);
	}
}