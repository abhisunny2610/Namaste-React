import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <i class="fa-solid fa-house"></i>
    },
    {
      path: "/Teacher",
      name: "Teacher",
      icon: <i class="fa-solid fa-person-chalkboard"></i>
    },
    {
      path: "/Student",
      name: "Student",
      icon: <i class="fa-solid fa-graduation-cap"></i>
    },
    {
      path: "/Employee",
      name: "Employee",
      icon: <i class="fa-solid fa-user"></i>
    },
    {
      path: "/Notice",
      name: "Notice",
      icon: <i class="fa-solid fa-circle-xmark"></i>
    },

  ]

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1>Logo</h1>
          <div className="bars">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
        {
          menuItems.map((items, index) => {
           return <NavLink to={items.path} key={index} className="link" activeClassName="active">
              <div className="icon">{items.icon}</div>
              <div className="link_text">{items.name}</div>
            </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default Sidebar