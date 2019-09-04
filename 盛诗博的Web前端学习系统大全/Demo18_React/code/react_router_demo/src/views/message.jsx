import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import MessageDetail from '../views/message-detail'
import MyNavLink from '../components/myNavLink';

export default class message extends Component {

  state = {
    messages: [
      // {id: 1, title: 'message001'},
      // {id: 3, title: 'message003'},
      // {id: 5, title: 'message005'}
    ]
  }

  componentDidMount () {
    // 模拟发送ajax请求异步获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'}
      ]
      // 更新状态
      this.setState({messages})
    }, 1000);
  }

  showDetail = (id) => {
    this.props.history.push(`/home/message/messagedetail/${id}`)
  }
  showDetail2 = (id) => {
    this.props.history.replace(`/home/message/messagedetail/${id}`)
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  reqPage = () => {
    // 通过js进行页面跳转
    // 注意一点是，路由跳转没有发送请求，而页面跳转就会发送
    window.location = 'www.baidu.com'
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((message, index) => (
              <li key={index}>
                {/* <a href={`/home/message/messagedetail/${message.id}`}>{message.title}</a> */}
                <MyNavLink to={`/home/message/messagedetail/${message.id}`}>{message.title}</MyNavLink>
                &nbsp;&nbsp;<button onClick={() => {this.showDetail(message.id)}}>push()查看</button>
                &nbsp;&nbsp;<button onClick={() => {this.showDetail2(message.id)}}>replace()查看</button>
              </li>
            ))
          }
        </ul>
        <p>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
        </p>
        <p>
          <button onClick={this.reqPage}>页面跳转</button>
        </p>
        <Route path='/home/message/messagedetail/:id' component={MessageDetail} />
      </div>
    )
  }
}