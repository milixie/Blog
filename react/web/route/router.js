import React from 'react'

import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import test from '../src/test'
import app from '../src/App'

const getRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={app}></Route>
        <Route path='/test' component={test}></Route>
      </Switch>
    </Router>
  )
}

export default getRouter
