// @flow
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../App'

import { routeCodes } from '../../constants/routes'

import { Home } from '../../pages/Home'
import { Contact } from '../../pages/Contact'

const Routes = () => {
  return (
    <App>
      <Router>
        <Switch>
          <Route exact path={routeCodes.HOME} component={Home} />
          <Route exact path={routeCodes.CONTACT} component={Contact} />
        </Switch>
      </Router>
    </App>
  )
}

export default Routes
