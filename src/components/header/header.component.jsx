import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import logo from '../../assets/logo.png'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cartIcon.component'
import CartMenu from '../cartMenu/cartMenu.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} className='logo' alt='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to='/signin' className='option'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartMenu />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
