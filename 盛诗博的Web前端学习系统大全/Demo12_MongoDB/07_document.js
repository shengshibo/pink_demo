/*
    Document和集合中的文档是一一对应的，Document是Model的实例
        通过Model查询到的结果都是Document
*/
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

// 创建一个Document
// var stu = new StuModel({
//     name: "奔波霸",
//     age: 48,
//     gender: "male",
//     address: "碧波谭"
// });
// console.log(stu);
/*
    document的方法
        Model#save([options][, fn])
*/
// stu.save(function (err) {
//     if (!err) {
//         console.log("保存に成功する");
//     }
// });
StuModel.findOne({}, function (err, doc) {
    if (!err) {
    // console.log(doc);
    /*
        update(update[, options][, callback])
            - 修改对象
        remove([callback])
            - 删除对象
    */
    // doc.update({$set: {age: 7}}, function (err) {
        // if (!err) {
        //     console.log("修正に成功する");
        // } else {
        //     console.log(err);
        // }
    // });
    // 还有一种比较好理解的修改方法
    // doc.age = 10;
    // doc.save();
    /*
        get(name)
            - 获取文档中的指定属性值
        set(name, value)
            - 设置文档指定的属性值
        id
            - 获取文档的_id属性值
        toJSON()
            - 转换为一个JSON对象
        toObject()
            - 将Document对象转换为普通的JS对象
                转换为普通的JS对象以后，注意所有的Document对象的方法或属性都不能使用了
    */
        console.log(doc.get("name"));
        console.log(doc.age);
        console.log(doc.set("name", "哪小吒"));
        doc.name = "小哪吒";
        console.log(doc.get("name"));
        console.log(doc.id);
        console.log(doc._id);
    } else {
        console.log(err);
    }
});