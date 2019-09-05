import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'

// 生成一个Store对象
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk))) // 应用上异步的中间件
console.log(store)

export default store