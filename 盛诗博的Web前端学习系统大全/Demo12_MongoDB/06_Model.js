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
    gender: {
        type: String,
        default: "female"
    },
    address: String
});
let StuModel = mongoose.model("student", stuSchema);
/*
    - 有了Model，我们就可以对数据库进行增删改查的操作了

    Model.create(doc(s), [callback])
    - 用来创建一个或多个文档并添加到数据库中
    - 参数：
        doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
        callback 当操作完成以后调用的回调函数
    查询的：
        - 通过find查询返回的对象就是Document文档对象
        - Document对象是Model的实例
        Model.find(conditions[, projection][, options][, callback])
            - 查询所有符合条件的文档，总会返回一个数组
        Model.findById(id[, projection][, options][, callback])
            - 根据文档的id属性查询文档
        Model.findOne([conditions][, projection][, options][, callback])
            - 查询符合条件的第一个文档，总会返回一个具体的文档对象

            conditions 查询的条件
            projection 投影
                - 两种方式
                    {name: 1, _id: 0}
                    "name -_id"
            options 查询选项（skip、limit）
                {skip: 3, limit: 1}
            callback 回调函数，查询结果会通过回调函数返回
                回调函数必须传，如果不传回调函数，压根不会查询
        Model.count(conditions[, callback]);
            - 统计文档的数量
    修改的：
        Model.update(conditions, doc[, options][callback])
        Model.updateMany(conditions, doc[, options][callback])
        Model.updateOne(conditions, doc[, options][callback])
            - 用来修改一个或多个文档
            - 参数：
                conditions 查询条件
                doc 修改后的对象
                options 配置参数
                callback 回调函数
        Model.replaceOne(conditions, doc[, options][, callback])
    删除的：
        Model.remove(conditions[, callback])
        Model.deleteOne(conditions[, callback])
        Model.deleteMany(conditions[, callback])
*/

// StuModel.create([
//     {
//         name: "黑熊精",
//         age: 30,
//         address: "黑熊洞",
//         gender: "male"
//     }
// ], function (err) {
//     if (!err) {
//         console.log("成功を加える");
//         console.log(arguments);
//     } else {
//         console.log(err);
//     }
// })

// 查询条件可以是一个正则表达式
// StuModel.find({name: "黑熊精"}, function (err, docs) {
//     if (!err) {
//         console.log(docs);
//     } else {
//         console.log(err);
//     }
// });
// find返回的是数组，而findOne返回的是单个对象
// StuModel.findOne({}, function (err, doc) {
//     if (!err) {
//         console.log(docs);
//     } else {
//         console.log(err);
//     }
// })
// StuModel.update({name: "黑熊精"}, {$set: {age: 35}}, function (err) {
//     if (!err) {
//         console.log("修正に成功する");
//         StuModel.find({}, function (err, docs) {
//             if (!err) {
//                 console.log(docs);
//             } else {
//                 console.log(err);
//             }
//         });
//     } else {
//         console.log(err);
//     }
// });
// StuModel.remove({name: "黑熊精"}, function (err) {
//     if (!err) {
//         console.log("削除に成功する");
//     } else {
//         console.log(err);
//     }
// })
// StuModel.count({}, function (err, count) {
//     if (!err) {
//         console.log(count);
//     } else {
//         console.log(err);
//     }
// });