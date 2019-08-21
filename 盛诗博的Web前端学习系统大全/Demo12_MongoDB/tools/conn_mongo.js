/*
    定义一个模块用来连接MongoDB数据库
*/
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
// 监听连接状态
mongoose.connection.once("open", function () {console.log("データベース接続に成功")});
mongoose.connection.once("close", function () {console.log("データベースは接続が遮断されている")});