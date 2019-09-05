import {createStore} from 'redux'

import {counter} from './reducers'

// 生成一个Store对象
const store = createStore(counter)
console.log(store)

export default store