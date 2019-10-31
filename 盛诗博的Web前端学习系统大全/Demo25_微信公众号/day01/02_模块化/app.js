// 引入express模块
const express = require('express')

// 引入验证服务器有效性的模块
const auth = require('./wechat/auth')

// 创建app应用对象
const app = express()

app.use(auth())
// 监听端口号
app.listen(3000, () => console.log('服务器启动成功了'))
