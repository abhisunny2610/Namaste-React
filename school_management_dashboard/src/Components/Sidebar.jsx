import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleMenu } from '../Redux/SidebarSlice'

const menuItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <i className="fa-solid fa-house"></i>
  },
  {
    path: "/Teacher",
    name: "Teacher",
    icon: <i className="fa-solid fa-person-chalkboard"></i>
  },
  {
    path: "/Student",
    name: "Student",
    icon: <i className="fa-solid fa-graduation-cap"></i>
  },
  {
    path: "/Employee",
    name: "Employee",
    icon: <i className="fa-solid fa-user"></i>
  },
  {
    path: "/Notice",
    name: "Notice",
    icon: <i className="fa-solid fa-circle-xmark"></i>
  },

]


const Sidebar = () => {

  const dispatch = useDispatch()
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen)

  const handleToggle = () => {
    dispatch(toggleMenu())
  }

  console.log(isMenuOpen)

  return (
    <div className="containers">
      <div className="sidebar" style={{width: isMenuOpen ? "200px" : "50px"}}>
        <div className="top_section">
          <h1 style={{display: isMenuOpen ? "block" : "none"}} className='logo'>Logo</h1>
          <div className="bars" style={{marginLeft: isMenuOpen ? "50px" : "0px"}}>
            <i className="fa-solid fa-bars" onClick={handleToggle}></i>
          </div>
        </div>
        {
          menuItems.map((items, index) => {
           return <NavLink to={items.path} key={index} className="link" activeclassname="active">
              <div className="icon">{items.icon}</div>
              <div style={{display: isMenuOpen ? "block": "none"}} className="link_text">{items.name}</div>
            </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default Sidebar