import React from 'react'
import {render} from 'react-dom'


import App from './components/app'
import store from './redux/store'




function myRender () {
  render(<App store={store} />, document.getElementById('root'))
}
// 初始化渲染
myRender()
// 订阅监听（store中的状态变化了，就会自动调用进行重绘）
store.subscribe(myRender)