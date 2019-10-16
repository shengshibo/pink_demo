// import {combineReducers} from 'redux'
import {combineReducers} from '../libs/redux'
import {INCREMENT, DECREMENT, ADD_MSG} from './action-types'

// 管理count
const initCount = 0
function count (state = initCount, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}

// 管理msgs
const initMsgs = []
function msgs (state = initMsgs, action) {
  switch (action.type) {
    case ADD_MSG:
      return [action.data, ...state]
    default:
      return state
  }
}

export default combineReducers({
  count,
  msgs
})

// 整体的状态：{count: 2, msgs: ['xxx', 'yyy']}
