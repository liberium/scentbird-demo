import React from 'react'
import styled from 'styled-components'

import { media } from 'core/style-utils'

import logo from './logo.svg'

const Header = styled.header`

`

const Logo = styled.img`
  display: block;
  ${media.phone`margin: 0 auto;`}
  ${media.tablet`margin: 0;`}
  ${media.desktop`margin: 0;`}
`

export default () => (
  <Header>
    <Logo src={logo}/>
  </Header>
)
