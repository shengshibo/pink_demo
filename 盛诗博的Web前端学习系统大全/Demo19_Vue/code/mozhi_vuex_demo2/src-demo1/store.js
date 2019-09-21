/*
  vuex的核心管理模块:store
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { // 初始化状态
  count: 0
}

// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT (state) {
    state.count++
  },
  // 减少的mutation
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  // 增加的action
  increment ({commit}) {
    // 提交mutation
    commit('INCREMENT')
  },
  // 减少的action
  decrement ({commit}) {
    // 提交mutation
    commit('DECREMENT')
  },
  // 当前为双数增加的action
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  // 异步
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

const getters = {
  evenOrOdd (state) { // 不需要调用，只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个getter计算属性函数的对象
})