/*
  获取access_token：
    是什么？微信调用接口全局唯一凭据

    特点：
      1. 唯一的
      2. 有效期为两小时，提前五分钟请求
      3. 接口权限，每天2000次
    
    请求地址：
      https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    请求方式：
      GET
    设计思路：
      1. 首次本地没有，发送请求获取access_token，保存下来（本地文件）
      2. 第二次或以后：
        - 先去本地读取文件，判断该文件是否过期
          - 过期了
            - 重新请求获取access_token，保存下来覆盖之前的文件（保证文件是唯一的）
          - 没有过期
            - 直接使用
    整理思路：
      读取本地文件（readAccessToken）：
        - 本地有文件
          - 判断该文件是否过期（isValidAccessToken）
            - 过期了
              - 重新请求获取access_token（getAccessToken），保存下来覆盖之前的文件（保证文件是唯一的）（saveAccessToken）
            - 没有过期
              - 直接使用
        - 本地没有文件
          -发送请求获取access_token（getAccessToken），保存下来（本地文件）（saveAccessToken），直接使用
    
*/

const rp = require('request-promise-native')
const {writeFile, readFile} = require('fs')

// 引入config模块
const {appID, appsecret} = require('../config')

// 定义类，获取access_tokens
class Wechat {

  constructor () {

  }

  /*
    获取access_token
  */
  getAccessToken () {
    console.log('appID', appID)
    console.log('appsecret', appsecret)
    // 定义请求的地址
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appsecret}`
    // 发送请求
    /*
      request
      request-promise-native
    */
    return new Promise((resolve, reject) => {
      rp({method: 'GET', url, json: true}).then(res => {
        console.log(res)
        // 设置access_token的过期时间
        res.expires_in = Date.now() + (res.expires_in - 300) * 1000
        // 将promise对象的状态改成成功的状态
        resolve(res)
      }).catch(error => {
        console.log(error)
        // 将promise对象的状态改成失败的状态
        reject('getAccessToken出了问题' + error)
      })
    })
  }

  /*
    保存access_token
    @param accessToken 保存的凭据
  */
  saveAccessToken (accessToken) {
    // 将对象转化为json字符串
    accessToken = JSON.stringify(accessToken)
    // 将accessToken保存一个文件
    return new Promise((resolve, reject) => {
      writeFile('./accessToken.txt', accessToken, error => {
        if (!error) {
          console.log('文件保存成功')
          resolve()
        } else {
          console.log('文件保存失败')
          reject('saveAccessToken错误', error)
        }
      })
    })
  }

  /*
    读取access_token
  */
  readAccessToken () {
    return new Promise((resolve, reject) => {
      readFile('./accessToken.txt', (error, data) => {
        if (!error) {
          console.log('文件读取成功')
          data = JSON.parse(data)
          resolve(data)
        } else {
          console.log('文件读取失败')
          reject('readAccessToken错误', error)
        }
      })
    })
  }

  /*
    检查access_token是否有效
  */
  isValidAccessToken (accessToken) {
    // 检测传入的参数是否是有效的
    if (!accessToken || !accessToken.access_token || accessToken.expires_in) {
      // 返回 false 表示 accessToken无效
      return false
    }

    // 检测accessToken是否在有效期内
    // if (accessToken.expires_in < Date.now()) {
    //   // 过期了
    //   return false
    // } else {
    //   // 没过期
    //   return true
    // }
    return accessToken.expires_in > Date.now()
  }

  /*
    获取没有过期的access_token
  */
  fetchAccessToken () {

    if (this.access_token && this.expires_in && this.isValidAccessToken(this)) {
      return Promise.resolve({
        access_token: this.access_token,
        expires_in: this.expires_in
      })
    }

    return this.readAccessToken().then(async res => {
      // 本地有文件
      if (this.isValidAccessToken(res)) {
        // resolve(res)
        return Promise.resolve(res)
      } else {
        const res = await this.getAccessToken()
        await this.saveAccessToken(res)
        // resolve(res)
        return Promise.resolve(res)
      }
    }).catch(async err => {
      // 本地无文件
      const res = await this.getAccessToken()
      await this.saveAccessToken(res)
      // resolve(res)
      return Promise.resolve(res)
    }).then(res => {
      // 将access_token挂载到this上
      this.access_token = res.access_token
      this.expires_in = res.expires_in
      return Promise.resolve(res)
    })
  }
}

const w = new Wechat()

