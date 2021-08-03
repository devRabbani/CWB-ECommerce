import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import logo from '../../assets/logo.png'

const Header = () => (
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
      <Link to='/signin' className='option'>
        SIGNIN
      </Link>
    </div>
  </div>
)

export default Header
