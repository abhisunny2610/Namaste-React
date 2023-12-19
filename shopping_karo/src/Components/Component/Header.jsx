import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const Header = () => {

  const {total_items} = useContext(CartContext)

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
          <NavLink to='/cart'><i className="fa-solid fa-cart-shopping"></i><span className='badge badge-light text-black'>{total_items}</span></NavLink>
        </ul>
      </div>
      <div className="user">
          <Link className='login'>Login</Link>
      </div>
    </div>
  )
}

export default Header