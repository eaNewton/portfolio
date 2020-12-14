// @flow
import React from 'react'

import { menuRoutes } from '../../constants/routes'

import MenuItem from './Item'

type MenuPropsType = {|
  menuId: string,
|}

const Menu = ({ menuId }: MenuPropsType): React$Node => {
  return (
    <ul className={'menu'} id={menuId}>
      {menuRoutes.map((menuRoute) => {
        console.log(menuRoutes)
        const menuItemProps = {
          ...menuRoute,
        }

        return <MenuItem key={menuRoute.itemUrl} {...menuItemProps} />
      })}
    </ul>
  )
}

export default Menu
