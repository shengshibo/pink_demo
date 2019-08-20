/*
    Buffer(缓冲区)
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
        - 使用buffer不需要引入模块，直接使用即可
        - 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
            buffer中每一个元素的范围是从00-ff(0-255)
            0000 0000 - 1111 1111

            计算机中一个0或一个1，我们称为1位（bit）

            8bit = 1byte（字节）
            1024byte = 1kb（千字节）
            1024kb = 1mb（兆字节）
            1024kb = 1gb
            1024gb = 1tb

            buffer中的一个元素，占用内存中的一个字节
        - Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
*/
var str = 'Hello mozhi'
// 将一个字符串保存到buffer中
var buf = Buffer.from(str)
console.log(buf)
// 创建一个指定大小的buffer
// Buffer 所有构造函数都是不推荐使用的（均已经废弃）
// var buf2 = new Buffer(10) // 10个字节的buffer
// console.log(buf2.length)
// 创建一个10个字节的buffer
var buf3 = Buffer.alloc(10)
buf3[0] = 88
buf3[1] = 225
buf[2] = 0xaa
console.log(buf3)
// 只要数字在控制台输出或页面中输出一定是10进制的

/*
    Buffer.from(str) 将一个字符串转换为buffer
    Buffer.alloc(size) 创建一个指定大小的buffer
    Buffer.alloUnsafe(size) 创建一个指定大小的buffer，但是可能包含敏感数据
    buf.toString() 将缓冲区的数据转换为字符串
*/

var buf4 = Buffer.from('我是一段文本数据')
console.log(buf4.toString()) // 直接toString()转换成可读的文本