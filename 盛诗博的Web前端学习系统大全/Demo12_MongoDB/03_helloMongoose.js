/*
    1.下载安装mongoose
        npm i mongoose --save // 安装并添加到依赖中
    2.在项目中引入mongoose
        var mongoose = require("mongoose");
    3.连接MongoDB数据库
        mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名', {useNewUrlParser: true});
        - 如果端口号是默认端口号则可以省略不写
    4.断开数据库连接（一般不需要调用）
        - MongoDB数据库，一般情况下只需要连接一次，连接一次以后除非项目停止服务器关闭，否则连接一般不会断开
        mongoose.disconnect()

    - 监听MongoDB数据库的连接状态
        - 在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
            通过监视该对象的状态，可以来监听数据库的连接与断开
        - 数据库连接成功的事件
            - mongoose.connection.once("open", function () {});
        - 数据库连接断开的事件
            - mongoose.connection.once("close", function () {});

        // 以下这个是有先后顺序的(从上至下)
        Schema
        Model
        Document
*/
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
// 监听连接状态
mongoose.connection.once("open", function () {console.log("データベース接続に成功")});
mongoose.connection.once("close", function () {console.log("データベースは接続が遮断されている")});

// 断开数据库连接
mongoose.disconnect();

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));