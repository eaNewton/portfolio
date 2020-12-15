// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../App'

import { routeCodes } from '../../constants/routes'

import { Home } from '../../pages/Home'
import { Contact } from '../../pages/Contact'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path={routeCodes.HOME} component={Home} />
        <Route exact path={routeCodes.CONTACT} component={Contact} />
      </Switch>
    </App>
  )
}

export default Routes
