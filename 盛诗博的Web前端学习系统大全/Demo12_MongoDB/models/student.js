/*
    用来定义student模型
*/
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female"
    },
    address: String
});

// 定义模型
var StuModel = mongoose.model("student", stuSchema);

// 暴露模型
// exports.model = StuModel;
module.exports = StuModel;