import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from '../components/myNavLink'
import News from '../views/news'
import Message from '../views/message'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>home router Component</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path='/home/news' component={News} />
              <Route path='/home/message' component={Message} />
              <Redirect to='/home/news' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}