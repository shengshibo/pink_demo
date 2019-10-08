var express = require('express');
var router = express.Router();

const md5 = require('blueimp-md5')
const {UserModel} = require('../db/models')
const filter = {password: 0, __v: 0} // 指定过滤的属性

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 注册一个路由：用户注册
// 1.path为：/register
// 2.请求方式为POST
// 3.接收username和password参数
// 4.admin是已注册用户
// 5.注册成功返回：{code: 0, data: {_id: 'abc', username: 'xxx', password: '123'}}
// 6.注册失败返回：{code: 1, msg: '此用户已存在'}

/**
 * 1.获取请求参数
 * 2.处理
 * 3.返回响应数据
 */
// router.post('/register', function (req, res) {
//   console.log('进入register请求...')
//   // 1.获取请求参数
//   const {username, password} = req.body
//   // 2.处理
//   if (username === 'admin') { // 注册会失败
//     // 返回响应数据（失败）
//     res.send({code: 1, msg: '此用户已存在'})
//   } else { // 注册会成功
//     // 返回响应数据（成功）
//     res.send({code: 0, data: {id: '123', username, password}})
//   }
// })

// -----------------上面为测试用代码-----------------

// 注册的路由
router.post('/register', function (req, res) {
  // 读取请求参数数据
  const {username, password, type} = req.body
  // 处理：判断用户是否已经存在。如果存在，返回提示错误的信息。如果不存在，保存
  // 查询（根据username）
  UserModel.findOne({username}, function (error, userDoc) {
    // 如果userDoc有值（已存在）
    if (userDoc) {
      // 返回提示错误的信息
      res.send({code: 1, msg: '此用户已存在！'})
    } else { // 没有值（不存在）
      // 保存
      new UserModel({username, type, password: md5(password)}).save(function (error, user) {
        // 生成要给cookie（userid: user_id），并交给浏览器保存
        res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24 * 7})
        // 返回包含user的json数据
        const data = {username, type, _id: user._id} // 响应数据中不要携带password
        res.send({code: 0, data: data})
      })
    }
  })
  // 返回响应数据

})
// 登录的路由
router.post('/login', function (req, res) {
  const {username, password} = req.body
  // 处理结果
  UserModel.findOne({username, password: md5(password)}, filter, function (error, user) {
    if (user) { // 有值，登录成功
      // 生成要给cookie（userid: user_id），并交给浏览器保存
      res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24 * 7})
      res.send({code: 0, data: user})
    } else { // 没有值，登录失败
      res.send({code: 1, msg: '用户名或密码错误，请重新输入！'})
    }
  })
})

// 更新用户信息的路由
router.post('/update', function (req, res) {
  // 从请求的cookies得到userid
  const userid = req.cookies.userid
  // 如果不存在，直接返回一个提示信息
  if (!userid) return res.send({code: 1, msg: '请先登录'})
  // 存在，根据userid更新对应的user文档数据
  // 得到提交的用户数据
  const user = req.body // 没有_id
  UserModel.findByIdAndUpdate({_id: userid}, user, function (error, oldUser) {
    if (!oldUser) {
      // 通知浏览器删除userid cookie
      res.clearCookie('userid')
      // 返回一个提示信息
      return res.send({code: 1, msg: '请先登录'})
    } else {
      // 准备一个返回的user数据对象
      const {_id, username, type} = oldUser
      const data = Object.assign(user, {_id, username, type})
      // 返回
      res.send({code: 0, data})
    }
  })
})

module.exports = router;
