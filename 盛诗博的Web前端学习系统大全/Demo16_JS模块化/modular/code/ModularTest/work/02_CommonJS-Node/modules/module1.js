// module.exports = value 暴露一个对象
module.exports = {
    msg: "module",
    foo () {
        console.log(this.msg)
    }
}