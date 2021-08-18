import React from 'react'
import Button from '../button/button.component'
import './cartMenu.style.scss'

import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartMenu = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Cart is Empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        CHECKOUT
      </Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartMenu))
