import React from 'react'

import { Header, CreateAccountForm } from '../../../core/components'
import {
  OrderSheet,
  SubscriptionPaymentForm,
  ShippingInfo
} from '../../components'

const SubscribeScreen = () => (
  <div className='SubscribeScreen'>
    <Header/>
    <main>
      <OrderSheet/>
      <CreateAccountForm/>
      <SubscriptionPaymentForm/>
      <ShippingInfo/>
    </main>
  </div>
)

export default SubscribeScreen
