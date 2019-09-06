// 包含了所有的action creator（action的工厂函数）
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'
// 同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})
// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})
// 同步接收comments
export const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})
// 异步从后台获取数据
export const getComments = () => {
  return dispatch => {
    // 模拟发送ajax请求异步获取数据
    setTimeout(() => {
      const comments = [
        {username: 'mozhi', content: 'React太好了'},
        {username: 'yangyang', content: 'React好难啊'},
      ]
      // 分发一个同步的action
      dispatch(receiveComments(comments))
    }, 1000)
  }
}