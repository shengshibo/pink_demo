// 引入其他模块
/*
    在Node中，通过require()函数来引入外部的模块
        require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
        这里的路径，如果使用相对路径，必须以./或../开头
    使用requirey()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
*/
var r = require('./01_module.js')
console.log(r)