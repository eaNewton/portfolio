// @flow
import React from 'react'

import headshot from '../../assets/img/headshot2.jpeg'

import { GITHUB, LINKEDIN } from '../../constants/social'

const ContactInfo = () => {
  return (
    <div className={'contact-container'}>
      <img alt={'headshot'} src={headshot} />
      <h3>Emmett Newton</h3>
      <h4>Full-Stack Web and Mobile Development</h4>
      <div className={'social-container'}>
        <a href={GITHUB} rel={'noreferrer'} target={'_blank'}>
          Github
        </a>
        <a href={LINKEDIN} rel={'noreferrer'} target={'_blank'}>
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
