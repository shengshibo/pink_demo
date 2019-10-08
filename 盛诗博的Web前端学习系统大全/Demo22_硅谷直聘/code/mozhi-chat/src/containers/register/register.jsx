/**
 * 注册路由组件
 */
import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'
const ListItem = List.Item

class Register extends Component {

  state = {
    username: '', // 用户名
    password: '', // 密码
    password2: '', // 确认密码
    type: '' // 用户类型名称 dashen/laoban
  }
  register = () => {
    this.props.register(this.state)
  }
  handleChange = (type, value) => {
    this.setState({
      [type]: value // 属性名不是type而是type的值
    })
  }
  toLogin = () => {
    this.props.history.replace('/login')
  }

  render () {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    // 如果redirectTo有值，就需要重定向到指定的路由
    if (redirectTo) return <Redirect to={redirectTo}/>
    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <div className="error-msg">{msg}</div> : null}
            <WhiteSpace/>
            <InputItem placeholder="请输入用户名" onChange={value => {this.handleChange('username', value)}}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder="请输入密码" type="password" onChange={value => {this.handleChange('password', value)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder="请输入确认密码" type="password" onChange={value => {this.handleChange('password2', value)}}>确认密码：</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型：</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'dashen'} onChange={value => {this.handleChange('type', 'dashen')}}>大神</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onChange={value => {this.handleChange('type', 'laoban')}}>老板</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {register}
)(Register)
