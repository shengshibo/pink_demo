/*
  使用localStorage存储数据的工具模块
  1. 函数
  2. 对象
  取决于需要向外暴露一个功能还是多个功能
*/
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
