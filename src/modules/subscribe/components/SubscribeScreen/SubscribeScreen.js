import React from 'react'
import styled from 'styled-components'

import { media } from 'core/style-utils'

import {
  Header,
  CreateAccountForm
} from 'core/components'

import {
  OrderSheet,
  SubscriptionPaymentForm,
  ShippingInfo,
  SubscriptionHeader
} from 'subscribe/components'

const Container = styled.main`
  display: flex;
  flex-flow: column;
  margin: 1em;
`
const GridContainer = styled.div`
  display: grid;
  ${media.phone`
    grid-template:
      "SubscriptionHeader"
      "OrderSheet"
      "ShippingAddressForm"
      "CcPaymentForm"
      "ShippingInfo";
  `}
  ${media.tablet`
    
  `}
`
const GridItem = ({ area, children }) => {
  const ItemContainer =
    styled.div`
      grid-area: ${area};
    `
  return (
    <ItemContainer>
      {children}
    </ItemContainer>
  )
}

const SubscribeScreen = () => (
  <Container>
    <Header/>
    <GridContainer>
      <GridItem area='SubscriptionHeader'>
        <SubscriptionHeader/>
      </GridItem>
      <GridItem area='OrderSheet'>
        <OrderSheet/>
      </GridItem>
      <GridItem area='CreateAccountForm'>
        <CreateAccountForm/>
      </GridItem>
      <GridItem area='SubscriptionPaymentForm'>
        <SubscriptionPaymentForm/>
      </GridItem>
      <GridItem area='ShippingInfo'>
        <ShippingInfo/>
      </GridItem>
    </GridContainer>
  </Container>
)

export default SubscribeScreen
