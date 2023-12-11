import React from 'react'
import logo from '../Images/7697984-removebg-preview.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* <h3>Food Villa</h3> */}
        <Link to='/'> <img src={logo} alt="logo" width="120px" /></Link>

      </div>
      <div className="links">
        <ul>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link>
            Contact
          </Link>
          <Link>
            Cart
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header 