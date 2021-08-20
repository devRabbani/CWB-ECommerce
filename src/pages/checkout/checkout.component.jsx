import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkoutItem/checkoutItems.component'
import StripeButton from '../../components/stripeButton/stripeButton.component'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'
import './checkout.style.scss'

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className='total'>
        <span>Total : ${totalPrice}</span>
      </div>
      <div className='test-warning'>
        Use below card for testing
        <br />
        4242 4242 4242 4242 - EXP: 01/23 - CVV : 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
})

export default connect(mapStateToProps)(Checkout)
