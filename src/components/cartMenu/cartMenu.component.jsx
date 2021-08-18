import React from 'react'
import Button from '../button/button.component'
import './cartMenu.style.scss'

import { connect } from 'react-redux'

const CartMenu = ({ hidden }) => {
  return (
    <div className='cart-dropdown'>
      {console.log(hidden)}
      <div className='cart-items' />
      <Button>CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
})

export default connect(mapStateToProps)(CartMenu)
