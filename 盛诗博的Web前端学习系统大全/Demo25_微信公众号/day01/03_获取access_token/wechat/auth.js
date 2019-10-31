/*
  验证服务器有效性的模块
*/

// 引入sha1加密模块
const sha1 = require('sha1')

// 引入自定义配置文件
const config = require('../config')

module.exports = () => {
  return (req, res, next) => {
  
    const {signature, echostr, timestamp, nonce} = req.query
    const {Token} = config
    // 1. 将参与微信加密签名的三个参数（timestamp、nonce、token）按照字典序排序，并组合在一起，形成一个数组
    const arr = [timestamp, nonce, Token]
    const arrSort = arr.sort()
    // 2. 将数组里所有参数拼接成一个字符串，进行sha1加密
    const str = arrSort.join('')
    const sha1Str = sha1(str)
    // 3. 加密完成就生成了一个signature，和微信发送过来的进行对比。
    if (sha1Str === signature) {
      // 说明信息来自于微信服务器，返回echostr给微信服务器。
      console.log('验证微信服务器通过')
      res.send(echostr)
    } else {
      // 说明信息不实来自于微信服务器，返回error。
      res.end('error')
    }
  }
}
