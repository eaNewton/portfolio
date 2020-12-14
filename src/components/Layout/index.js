// @flow
import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

type LayoutPropsType = {|
  children: Node,
  className: string,
|}

const Layout = (props: LayoutPropsType): React$Node => {
  const { className = '', children } = props

  return (
    <div className={`layout${className ? className : ''}`}>
      <Header />
      {/* <Loader loading={loading} /> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
