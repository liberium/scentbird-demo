import React from 'react'
import styled from 'styled-components'

const Header = styled.header`

`
const Title = styled.h1`

`
const SubTitle = styled.p`

`
const SubscriptionHeader = () => (
  <Header>
    <Title>Month-to-Month Subscription</Title>
    <SubTitle>
      Billed Monthly. Renews automatically,
      cancel any time. Free Shipping.
    </SubTitle>
  </Header>
)

export default SubscriptionHeader
