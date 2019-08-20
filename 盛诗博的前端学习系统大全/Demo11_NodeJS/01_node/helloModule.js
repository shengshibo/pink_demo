module.exports = {
    name: '哪吒',
    age: 6,
    sayName: function () {
        console.log('我是' + this.name)
    }
}
/**
 * exports和module.exports
 *  - 通过exports只能使用.的方式来向外暴露内部变量
 *      exports.xxx = xxx
 *  - 而module.exports既可以通过.的形式，也可以直接赋值
 *      module.exports.xxx = xxx
 *      module.exports = {}
 */
// 解释为什么能用module.exports = {}不能用exports = {}
var obj = {}
obj.a = {}
var a = obj.a
// 此时a与obj.a指向的是同一个对象
// console.log(a == obj.a)
a.name = '哪吒'
a = new Object()
console.log(obj.a.name)
console.log(a.name)