import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const {total_items} = useContext(CartContext)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <div className="name">
        <h3>SHOPPING <span>KARO</span></h3>
        <button className="navbar-toggle" onClick={toggleNav}>
          ☰
        </button>
      </div>
      <div className="links">
        <ul className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/cart'><i className="fa-solid fa-cart-shopping"></i><span className='badge badge-light text-black'>{total_items}</span></NavLink>
        </ul>
      </div>
      {/* <div className="user">
          <Link className='login'>Login</Link>
      </div> */}
    </div>
  )
}

export default Header