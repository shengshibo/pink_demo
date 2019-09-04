import React, {Component} from 'react'

export default class News extends Component {

  state = {
    newsArr: [
      'mozhi1',
      'mozhi2',
      'mozhi3'
    ]
  }

  render () {
    return (
      <ul>
        {
          this.state.newsArr.map((news, index) => <li key={index}>{news}</li>)
        }
      </ul>
    )
  }
}