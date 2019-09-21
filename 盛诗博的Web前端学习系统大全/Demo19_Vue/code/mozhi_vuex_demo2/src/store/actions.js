/*
  包含多个接收组件通知触发mutation调用间接更新状态的方法的对象
*/
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS} from './mutation-types'
export default {
  addTodo ({commit}, todo) {
    // 提交一个mutation的请求
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },
  reqTodos ({commit}) {
    // 模拟
    setTimeout(() => {
      // 读取数据
      
    }, 1000)
  }
}
