import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <h3>SHOPPING <span>KARO</span></h3>
      </div>
      <div className="links">
        <ul>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink>
        </ul>
      </div>
      <div className="user">
          <Link className='login'>Login</Link>
      </div>
    </div>
  )
}

export default Header