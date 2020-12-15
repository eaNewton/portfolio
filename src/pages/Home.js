// @flow
import React from 'react'

import ContactInfo from '../components/ContactInfo'
import Layout from '../components/Layout'

export const Home = () => {
  return (
    <Layout>
      <div className={'wrapper'}>
        <ContactInfo />
      </div>
    </Layout>
  )
}
