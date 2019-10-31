// 引入express模块
const express = require('express')
// 引入sha1加密模块
const sha1 = require('sha1')
// 创建app应用对象
const app = express()
// 验证服务器的有效性
/*
  1. 微信服务器知道开发者服务器是哪个
    - 测试号管理页面上填写url开发者服务器地址
      - 使用ngrok内网穿透，将本地端口号开启的服务映射外网跨域访问一个网址
      - ngrok http 3000
    - 填写 token
      - 参与微信签名加密的一个参数
  2. 开发者服务器
    - 验证信息是否来自微信服务器
    目的：计算得出signature微信加密签名，和微信传递过来的signature进行对比，
      如果一样，说明信息来自于微信服务器，
      如果不一样，说明不是微信服务器发送的消息
    1. 将参与微信加密签名的三个参数（signature、nonce、token）按照字典序排序，并组合在一起，形成一个数组
    2. 将数组里所有参数拼接成一个字符串，进行sha1加密
    3. 加密完成就生成了一个signature，和微信发送过来的进行对比。
      如果一样，说明信息来自于微信服务器，返回echostr给微信服务器。
      如果不一样，说明信息不实来自于微信服务器，返回error
*/

// 定义配置对象
const config = {
  Token: 'wechat_mozhi',
  appID: 'wx34d6e0a075b7dc18',
  appsecret: 'e8301ef42899f7e18b9923523e61568d'
}

// app.use可以接收处理所有消息
app.use((req, res, next) => {
  // 微信服务器提交的参数
  console.log(req.query)
  /*
    {
      signature: '44074eb7711c338b760c1b8586aa86aef8bb2c2e', 微信的加密签名
      echostr: '742983731265400820', 微信的随机字符串
      timestamp: '1572332992', 微信的发送请求时间戳
      nonce: '2053701059' 微信的随机数字
    }
  */
  const {signature, echostr, timestamp, nonce} = req.query
  const {Token} = config
  // 1. 将参与微信加密签名的三个参数（timestamp、nonce、token）按照字典序排序，并组合在一起，形成一个数组
  const arr = [timestamp, nonce, Token]
  const arrSort = arr.sort()
  // 2. 将数组里所有参数拼接成一个字符串，进行sha1加密
  const str = arrSort.join('')
  console.log('sha1加密前', str)
  const sha1Str = sha1(str)
  console.log('sha1加密后', sha1Str)
  console.log('微信服务器传来的signature', signature)
  // 3. 加密完成就生成了一个signature，和微信发送过来的进行对比。
  if (sha1Str === signature) {
    // 说明信息来自于微信服务器，返回echostr给微信服务器。
    console.log('验证微信服务器通过')
    res.send(echostr)
  } else {
    // 说明信息不实来自于微信服务器，返回error。
    res.end('error')
  }

})
// 监听端口号
app.listen(3000, () => console.log('服务器启动成功了'))
