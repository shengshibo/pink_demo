/*
    同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
*/
var fs = require('fs')
// 流式文件写入
// 创建一个可写流
/*
    fs.createWriteStream(path[, options])
        - 可以用来创建一个可写流
        - path 文件路径
        - options 配置的参数
*/
var ws = fs.createWriteStream("hello4.txt")
// 可以通过监听流的open和close事件来监听流的打开和关闭
/*
    on(事件字符串, 回调函数)
        - 可以为对象绑定一个事件
    once(事件字符串, 回调函数)
        - 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效
*/
// ws.on('open', function () {
ws.once('open', function () {
    console.log('流打开了')
})
ws.once('close', function () {
    console.log('流关闭了')
})
// 可以通过ws向文件中输出内容
ws.write('mozhi node~~~')
// 关闭流
// ws.close() // 直接关闭
ws.end() // 已经把要传输的数据添加到管道中后关闭