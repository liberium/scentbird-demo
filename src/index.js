import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import { SubscribeScreen } from './modules/subscribe/components'

ReactDOM.render(
  <Router>
    <div>
      <Route path='/subscribe' component={SubscribeScreen}/>
      <Redirect from='/' to='/subscribe'/>
    </div>
  </Router>,
  document.getElementById('root')
)
