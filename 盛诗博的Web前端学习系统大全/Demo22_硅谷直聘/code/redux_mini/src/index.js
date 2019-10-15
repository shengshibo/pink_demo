import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import store from './redux/store'

ReactDOM.render(<App store={store}/>, document.getElementById('root'))
