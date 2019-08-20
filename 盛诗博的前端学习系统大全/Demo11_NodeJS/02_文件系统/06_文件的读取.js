/*
    1. 同步文件读取
    2. 异步文件读取
    3. 简单文件读取
        fs.readFile(path[, options], callback)
        fs.readFile(path[, options])
            - path 要读取文件的路径
            - options 读取的选项
            - callback 回调函数，通过回调函数将读取到的内容返回(err, data)
                err 错误对象
                data 读取到的数据，会返回一个Buffer
    4. 流式文件读取
*/
var fs = require('fs')

fs.readFile('hello4.txt', function (err, data) {
    if (!err) {
        console.log(data.toString())
        fs.writeFile('hello4Copy.txt', data, function (err) {
            if (!err) {
                console.log('文件写入成功')
            } else {
                console.log(err)
            }
        })
    } else {
        console.log(err)
    }
})