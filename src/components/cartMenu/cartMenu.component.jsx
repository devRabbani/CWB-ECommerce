import React from 'react'
import Button from '../button/button.component'
import './cartMenu.style.scss'

import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartMenu = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartMenu)
