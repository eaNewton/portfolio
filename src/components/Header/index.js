// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import { routeCodes } from '../../constants/routes'

import logo from '../../assets/img/logo.png'

const Header = (): React$Node => {
  return (
    <header>
      <div className={'grid-container'}>
        <div className={'grid-x clearfix'}>
          <Link to={routeCodes.HOME}>
            <img alt={'e. a. newton'} className={'site-logo'} src={logo} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
