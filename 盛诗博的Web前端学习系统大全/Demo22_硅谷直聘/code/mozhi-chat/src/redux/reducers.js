/**
 * 包含n个reducer函数：根据老的state和指定的action返回一个新的state
 */

import {combineReducers} from 'redux'

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
import {getRedirectTo} from '../utils'

const initUser = {
  username: '', // 用户名
  type: '', // 用户类型 dashen/laoban
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动重定向的路由路径
}

// 产生初始状态的reducer
function user (state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: // data是user
      const {type, header} = action.data
      return {...state, ...action.data, msg: '', redirectTo: getRedirectTo(type, header)}
    case ERROR_MSG: // data是msg
      return {...state, msg: action.data}
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state
  }
}

const initUserList = []
// 产生userlist状态的reducer
function userList (state = initUserList, action) {
  switch (action.type) {
    case RECEIVE_USER_LIST: // data为userList
      return action.data
    default:
      return state
  }
}

const initChat = {
  users: {}, // 所有用户信息的对象，属性名：userid，属性值：{username, header}
  chatMsgs: [], // 当前用户所有相关msg的数组
  unReadCount: 0 // 总的未读数量
}
// 产生聊天状态的reducers
function chat (state = initChat, action) {
  switch (action.type) {
    case RECEIVE_MSG_LIST: // data:{users, chatMsgs}
      const {users, chatMsgs, userid} = action.data
      return {
        users, chatMsgs, unReadCount: chatMsgs.reduce((preTotal, msg) => preTotal + (!msg.read && msg.to === userid ? 1 : 0), 0)
      }
    case RECEIVE_MSG: // data:chatMsg
      const {chatMsg} = action.data
      return {
        users: state.users,
        chatMsgs: [...state.chatMsgs, chatMsg],
        unReadCount: state.unReadCount + (!chatMsg.read && chatMsg.to === action.data.userid ? 1 : 0)
      }
    case MSG_READ:
      const {from, to, count} = action.data
      return {
        users: state.users,
        chatMsgs: state.chatMsgs.map(msg => {
          if (msg.from === from && msg.to === to && !msg.read) { // 需要更新
            return {...msg, read: true}
          } else { // 不需要更新
            return msg
          }
        }),
        unReadCount: state.unReadCount - count
      }
    default:
      return state
  }
}

export default combineReducers({
  user,
  userList,
  chat
})
// 最终向外暴露的状态结构：{user: {}, userList: [], chat: {}}
