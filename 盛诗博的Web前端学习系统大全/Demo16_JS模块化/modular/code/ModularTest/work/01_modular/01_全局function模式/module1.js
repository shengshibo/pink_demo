/**
 * 全局函数模式: 将不同的功能封装成不同的全局函数
 * 问题: Global被污染了, 很容易引起命名冲突
 */
var msg = "这是msg";

function foo () {
    console.log("foo", msg);
}

function bar () {
    console.log("bar", msg);
}