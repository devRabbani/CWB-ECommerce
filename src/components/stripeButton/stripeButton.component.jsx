import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishKey =
    'pk_test_51JQdRdSIzv2S0kZA2hzWP8NY3MYoXWNHJ1QOUWBEAWGwe8aTZndMINmEghjvQ9XQ8C7iP0abHOc7EMSdKamtP83a00gQphmfUr'
  const onToken = (token) => {
    console.log(token)
    alert('Payment succesfull')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CWB Ecom'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Total price is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Here'
      token={onToken}
      stripeKey={publishKey}
    />
  )
}

export default StripeButton
