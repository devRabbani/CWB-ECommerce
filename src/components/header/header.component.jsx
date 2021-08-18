import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import logo from '../../assets/logo.png'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'

const Header = ({ currentUser }) => (
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
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
