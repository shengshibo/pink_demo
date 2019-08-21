var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
// 监听连接状态
mongoose.connection.once("open", function () {console.log("データベース接続に成功")});
mongoose.connection.once("close", function () {console.log("データベースは接続が遮断されている")});

const Schema = mongoose.Schema;
// 创建Schema对象
let stuSchema = new Schema({
    name: String,
    age: Number,
    // 这种方式和上面那种是一样的，只不过这种可以传递更多的信息，上面那种相当于只有{type: Number}
    gender: {
        type: String,
        default: "female"
    },
    address: String
});
// 通过Schema对象创建Model对象
// Model代表的是数据库中的集合，通过Model才能对数据库进行操作
// Mongoose.model(modelName, schema);
// modelName就是要映射的集合名，mongoose会自动将集合名变成复数
let StuModel = mongoose.model("student", stuSchema);
// 像数据库中插入一个文档
// StuModel.create(doc, function (err) {});
StuModel.create({
    name: "哪吒",
    age: 6,
    address: "陈唐关"
}, function (err) {
    if (!err) {
        console.log("挿入成功");
    } else {
        console.log(err);
    }
    // 断开数据库连接
    mongoose.disconnect();
});