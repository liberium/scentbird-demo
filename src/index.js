import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { SubscribeScreen } from 'subscribe/components'

import 'reset-css/reset.css'

const theme = {
  main: 'FF408E',
  danger: 'FF0000'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Route path='/subscribe' component={SubscribeScreen}/>
        <Redirect from='/' to='/subscribe'/>
      </div>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
