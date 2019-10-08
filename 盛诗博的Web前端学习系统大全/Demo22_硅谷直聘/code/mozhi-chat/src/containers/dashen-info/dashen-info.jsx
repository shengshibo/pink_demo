/**
 * 大神信息完善的路由容器组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'

import {updateUser} from '../../redux/actions'
import HeaderSeletcor from '../../components/header-selector/header-selector'

class DashenInfo extends Component {
  state = {
    header: '', // 头像名称
    post: '', // 职位
    info: '', // 个人或职位简介
  }

  // 更新header状态
  setHeader = (header) => {
    this.setState({
      header
    })
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  save = () => {
    this.props.updateUser(this.state)
  }

  render () {
    // 如果信息已经完善，自动重定向到对应的主界面
    const {header, type} = this.props.user
    if (header) { // 说明信息已经完善
      const path = type === 'laoban' ? '/laoban' : '/dashen'
      return <Redirect to={path}/>
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSeletcor setHeader={this.setHeader}/>
        <InputItem placeholder="请输入职位" onChange={value => {this.handleChange('post', value)}}>求职岗位：</InputItem>
        <TextareaItem title="个人介绍：" rows={3} onChange={value => {this.handleChange('info', value)}}/>
        <Button type="primary" onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(DashenInfo)
