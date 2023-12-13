import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <h3>SHOPPING KARO</h3>
      </div>
      <div className="links">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
        </ul>
      </div>
      <div className="user">
          <Link className='login'>Login</Link>
      </div>
    </div>
  )
}

export default Header