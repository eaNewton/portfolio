// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode'

import { routeCodes } from '../../constants/routes'

import logo from '../../assets/img/logo.png'

import Menu from '../Menu'

const Header = (): React$Node => {
  return (
    <header>
      <Sticky>
        <div className={'container flex-container'}>
          <Link to={routeCodes.HOME}>
            <img alt={'e. a. newton'} className={'site-logo'} src={logo} />
          </Link>
          <div className="desktop-menu-right">
            <Menu menuId={'desktop-menu'} />
          </div>
        </div>
      </Sticky>
    </header>
  )
}

export default Header
