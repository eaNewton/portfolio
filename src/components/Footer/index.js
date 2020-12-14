// @flow
import React from 'react'

import Menu from '../Menu'

const Footer = () => {
  return (
    <div className={'footer'}>
      <div className={'mobile-menu-wrapper'}>
        <Menu menuId={'mobile-menu'} />
      </div>
    </div>
  )
}

export default Footer
