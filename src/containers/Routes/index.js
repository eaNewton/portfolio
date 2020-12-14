// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../App'

import { routeCodes } from '../../constants/routes'

import { LandingPage } from '../../pages/LandingPage'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path={routeCodes.HOME} component={LandingPage} />
      </Switch>
    </App>
  )
}

export default Routes
