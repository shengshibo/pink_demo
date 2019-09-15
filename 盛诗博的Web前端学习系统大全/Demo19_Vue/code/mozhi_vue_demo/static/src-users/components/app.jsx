import React from 'react'
import Search from './search'
import UserList from './user-list'

// 这里面有一个特好的组件叫做pubsub-js（发布订阅），可以解决兄弟组件，父子孙组件中的数据传递问题，只需要发布和订阅就可以解决，很方便
export default class App extends React.Component {

  state = {
    searchName: ''
  }

  refreshName = (searchName) => this.setState({searchName})

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search refreshName={this.refreshName}/>
        </section>
        <UserList searchName={this.state.searchName}/>
      </div>
    )
  }

}
