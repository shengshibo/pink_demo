/*
  包含所有基于state的getter计算属性的对象
*/
export default {
  totalCount (state) {
    return state.todos.length
  },
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  isAllSelect (state, getters) {
    return getters.totalCount === getters.completeCount && getters.totalCount > 0
  }
}