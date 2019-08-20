var fs = require('fs')
/*
    fs. existsSync(path)
        - 检查一个文件是否存在
*/
// var isExists = fs.existsSync('hello4.txt')
// console.log(isExists)
/*
    fs.stat(path, callback)
    fs.statSync(path)
        - 获取文件的状态
        - 她会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
*/
// fs.stat('hello4.txt', function (err, stat) {
//     console.log(arguments)
//     /*
//         size 文件的大小
//         isFile() 是否是一个文件
//         isDirectory() 是否是一个文件夹（目录）
//     */
//     console.log(stat.isFile())
// })
/*
    fs.unlink(path, callback)
    fs.unlinkSync(path)
        - 删除文件
*/
// fs.unlinkSync('hello4Copy.txt')
/*
    fs.readdir(path[, options], callback)
    fs.readdir(path[, options])
        - 读取一个目录的目录结构
            files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
*/
// fs.readdir('.', function (err, files) {
//     if (!err) {
//         console.log(files)
//     } else {
//         console.log(err)
//     }
// })
/*
    fs.truncate(path, len, callback)
    fs.truncateSync(path, len)
        - 截断文件，将文件修改为指定的大小
*/
// fs.truncateSync('hello3.txt', 6)
/*
    fs.mkdir(path[, mode], callback)
    fs.mkdirSync(path[, mode])
        - 创建一个目录
    fs.rmdir(path, callback)
    fs.rmdir(path)
        - 删除一个目录
*/
// fs.mkdirSync('hello')
// fs.rmdirSync('hello')
/*
    fs.rename(oldPath, newPath, callback)
    fs.renameSync(oldPath, newPath)
        - 对文件进行重命名
        - 参数：
            oldPath 旧的路径
            newPath 新的路径
            callback 回调函数
    这个方法也可以用来移动文件到另一个路径中去，也就是实现剪切的功能
*/
// fs.rename('hello4.txt', 'hello4new.txt', function (err) {
//     if (!err) {
//         console.log('修改成功')
//     } else {
//         console.log(err)
//     }
// })
/*
    fs.watchFile(filename[, options], listener)
        - 监听文件的修改
        - 参数：
            filename 要监听文件的名字
            options 配置选项
            listener 回调函数，当文件发生变化时，回调函数会执行
                curr 当前文件的状态
                prev 修改前文件的状态
                    - 这两个对象都是stats对象
*/
fs.watchFile('hello3.txt', {interval: 1000}, function (curr, prev) {
    console.log('修改前文件大小：' + prev.size)
    console.log('修改后文件大小：' + prev.size)
})