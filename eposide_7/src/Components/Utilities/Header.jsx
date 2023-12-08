import React from 'react'
import logo from '../Images/7697984-removebg-preview.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            {/* <h3>Food Villa</h3> */}
           <a href="#"> <img src={logo} alt="logo" width="120px"/></a>

        </div>
        <div className="links">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header 