/**
 * 包含n个action creator
 * 异步action
 * 同步action
 */

import {
  reqRegister,
  reqLogin,
  reqUpdateUser,
  reqUser,
  reqUserList,
  reqChatMsgList,
  reqReadMsg
} from '../api'
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_MSG_LIST,
  RECEIVE_MSG,
  MSG_READ
} from './action-types'
import io from 'socket.io-client'

/**
 * 单例对象
 * 1. 创建对象之前：判断对象是否已经创建，只有不存在才会去创建
 * 2. 创建对象之后：保存对象
 */
function initIO (dispatch, userid) {
  // 1. 创建对象之前：判断对象是否已经创建，只有不存在才会去创建
  if (!io.socket) {
    // 连接服务器，得到与服务器的连接对象
    io.socket = io('ws://localhost:4000')
    // 绑定监听，接收服务器发送的消息
    io.socket.on('receiveMsg', function (chatMsg) {
      console.log('消息从服务器上回来啦', chatMsg)
      // 只有当chatMsg是与当前用户相关的消息，才去分发同步action保存
      console.log(chatMsg)
      if (chatMsg && (userid === chatMsg.from || userid === chatMsg.to)) {
        dispatch(receiveMsg(chatMsg, userid))
      }
    })
  }
}

// 异步获取消息列表数据
async function getMsgList (dispatch, userid) {
  initIO(dispatch, userid)
  const response = await reqChatMsgList()
  const result = response.data
  if (result.code === 0) {
    const {users, chatMsgs} = result.data
    // 分发同步action
    dispatch(receiveMsgList({users, chatMsgs, userid}))
  }
}

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})
// 接收用户的同步action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// 重置用户的同步action
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
// 接收用户列表的同步action
const receiveUserList = (userList) => ({type: RECEIVE_USER_LIST, data: userList})
// 接收消息列表的同步action
const receiveMsgList = ({users, chatMsgs, userid}) => ({type: RECEIVE_MSG_LIST, data: {users, chatMsgs, userid}})
// 接收一个消息的同步action
const receiveMsg = (chatMsg, userid) => ({type: RECEIVE_MSG, data: {chatMsg, userid}})
// 读取了某个聊天消息的同步action
const msgRead = ({count, from, to}) => ({type: MSG_READ, data: {count, from, to}})

// 注册异步action
export const register = (user) => {
  const {username, password, password2, type} = user
  // 表单的前台验证，如果不通过分发一个errorMsg的同步action
  if (!username) return errorMsg('用户名必须指定')
  if (password !== password2) return errorMsg('两次密码要一致')
  // 表单数据合法，返回一个发ajax请求的异步action函数
  return async dispatch => {
    // 发送注册的异步ajax请求
    // const promise = reqRegister(user)
    // promise.then(response => {
    //   const result = response.data
    // })
    const result = await reqRegister({username, password, type})
    console.log(result)
    if (result.data.code === 0) { // 成功
      getMsgList(dispatch, result.data._id)
      // 授权成功的同步action
      dispatch(authSuccess(result.data.data))
    } else { // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.data.msg))
    }
  }
}

// 登录异步action
export const login = (user) => {
  const {username, password} = user
  // 表单的前台验证，如果不通过分发一个errorMsg的同步action
  if (!username) return errorMsg('用户名必须指定')
  if (!password) return errorMsg('密码必须指定')
  // 表单数据合法，返回一个发ajax请求的异步action函数
  return async dispatch => {
    const result = await reqLogin({username, password})
    if (result.data.code === 0) { // 成功
      getMsgList(dispatch, result.data._id)
      // 授权成功的同步action
      dispatch(authSuccess(result.data.data))
    } else { // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.data.msg))
    }
  }
}

// 更新用户异步action
export const updateUser = (user) => {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) { // 更新成功：data
      dispatch(receiveUser(result.data))
    } else { // 更新失败：msg
      dispatch(resetUser(result.msg))
    }
  }
}

// 获取用户异步action
export const getUser = () => {
  return async dispatch => {
    // 执行异步ajax请求
    const response = await reqUser()
    const result = response.data
    console.log('获取用户异步action', result)
    if (result.code === 0) { // 成功
      getMsgList(dispatch, result.data._id)
      dispatch(receiveUser(result.data))
    } else { // 失败
      dispatch(receiveUser(result.msg))
    }
  }
}

// 异步请求获取user列表
export const getUserList = (type) => {
  return async dispatch => {
    // 执行异步ajax请求
    const response = await reqUserList(type)
    const result = response.data
    // 得到结果后，分发一个同步action
    if (result.code === 0) {
      dispatch(receiveUserList(result.data))
    }
  }
}

// 发送消息的异步action
export const sendMsg = ({from, to, content}) => {
  return dispatch => {
    console.log('发送消息', {from, to, content})
    initIO()
    // 发消息
    io.socket.emit('sendMsg', {from, to, content})
  }
}

// 读取消息的异步action
export const readMsg = (from, to) => {
  return async dispatch => {
    const response = await reqReadMsg(from)
    const result = response.data
    if (result.code === 0) {
      const count = result.data
      dispatch(msgRead({count, from, to}))
    }
  }
}
