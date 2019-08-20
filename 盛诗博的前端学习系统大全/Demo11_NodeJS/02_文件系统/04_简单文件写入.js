/*
    简单文件写入
        简单文件写入会在调用后自动开关文件
    fs.writeFile(file, data[, options], callback)
    fs.writeFileSync(file, data[, options])
        - file 要操作的文件的路径
            - 注意使用绝对路径的时候有时会有转义符导致的问题，可以把\换成/可以解决这种问题
        - data 要写入的数据
        - options 选项，可以对写入进行一些设置
            - options中的flag比较常用的是：r（读取）、w（写入）、a（追加）
        - callback 当写入完成以后执行的函数
*/
// 引入js模块
var fs = require('fs')

fs.writeFile('hello3.txt', '通过writeFile写入', function (err) {
    console.log(arguments)
    if (!err) {
        console.log('写入成功')
    }
})