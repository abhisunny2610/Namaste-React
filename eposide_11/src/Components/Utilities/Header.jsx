import React from 'react'
import logo from '../Images/7697984-removebg-preview.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '.././../Utils/UserContext'

const Header = () => {

  const user  = useContext(UserContext)

  return (
    <div className="header">
      <div className="logo">
        {/* <h3>Food Villa</h3> */}
        <Link to='/'> <img src={logo} alt="logo" width="120px" /></Link>

      </div>
      <p>{user.name}</p>
      {/* <p>{user.email}</p> */}
      <div className="links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li></Link>
          <Link>
            <li>Cart</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header 