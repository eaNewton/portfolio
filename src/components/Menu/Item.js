// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

type MenuItemPropsType = {|
  itemClass: string,
  itemImgSrc: string,
  itemTitle: string,
  itemUrl: string,
|}

const MenuItem = (props: MenuItemPropsType): React$Node => {
  const { itemClass, itemImgSrc, itemTitle, itemUrl } = props
  return (
    <li>
      <NavLink activeClassName="active" exact to={itemUrl}>
        <div className={'menu-item'}>
          <img alt={itemTitle} className={itemClass} src={itemImgSrc} />
          <span>{itemTitle}</span>
        </div>
      </NavLink>
    </li>
  )
}

export default MenuItem
