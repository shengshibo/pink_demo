/**
 * 入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import {Provider} from 'react-redux'
import {HashRouter, Route, Switch} from 'react-router-dom'

import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
import store from './redux/store'
import './assets/css/index.css'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={Main}></Route>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
