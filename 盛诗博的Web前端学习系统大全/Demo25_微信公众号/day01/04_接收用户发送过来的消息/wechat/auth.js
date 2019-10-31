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
    const sha1Str = sha1([timestamp, nonce, Token].sort().join(''))
    
    /*
      微信服务器会发送两种类型的消息给开发者服务器
        1. GET请求
          - 验证服务器的有效性
        2. POST请求
          - 微信服务器会将用户发送的数据以POST请求的方式转发到开发者服务器上
        
    */

    if (req.method === 'GET') {
      if (sha1Str === signature) {
        console.log('验证微信服务器通过')
        res.send(echostr)
      } else {
        res.end('error')
      }
    } else if (req.method === 'POST') {
      if (sha1Str !== signature) res.end('error')
      console.log(req.query)
    } else {
      res.end('error')
    }
  }
}
