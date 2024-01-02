import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleMenu } from '../Redux/SidebarSlice'
import '../Styles/Sidebar.css'
import logo from '../Styles/YouTube-Logo.wine.svg'

const Sidebar = () => {

    const dispatch = useDispatch()

    const isMenuOpen = useSelector(store => store.sidebar.isMenuOpen)

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <div className="bars">
                <i className="fa-solid fa-bars" onClick={toggleMenuHandler}></i>
                {isMenuOpen && <img src={logo} alt="logo" width="100px"/>}
            </div>

            <div className="link-group">
                <NavLink className="link" activeclassname="active" to=""><i class="fa-solid fa-house"></i><span>Home</span></NavLink>
                <NavLink className="link" activeclassname="active" to=""><i class="fa-solid fa-heart"></i><span>Shorts</span></NavLink>
                <NavLink className="link" activeclassname="active" to=""><i class="fa-brands fa-youtube"></i><span>Subscriptions</span></NavLink>
                <NavLink className="link" activeclassname="active" to=""><i class="fa-solid fa-circle-user"></i><span>You</span></NavLink>
                <NavLink className="link" activeclassname="active" to=""><i class="fa-solid fa-arrow-down"></i><span>Downloads</span></NavLink>

                {
                    isMenuOpen && <>
                    <h6 className='mb-3'>You <i class="fa-solid fa-angle-up fa-rotate-90"></i></h6>
                    <NavLink className="link" activeclassname="active" to=""><i class="fa-regular fa-user"></i><span>Your Channel</span></NavLink>
                    <NavLink className="link" activeclassname="active" to=""><i class="fa-solid fa-clock-rotate-left"></i><span>History</span></NavLink>
                    <NavLink className="link" activeclassname="active" to=""><i class="fa-regular fa-circle-play"></i><span>Your Videos</span></NavLink>
                    <NavLink className="link" activeclassname="active" to=""><i class="fa-regular fa-clock"></i><span>Watch Later</span></NavLink>
                    <NavLink className="link" activeclassname="active" to=""><i class="fa-solid fa-angle-up fa-rotate-180"></i><span>Show More</span></NavLink>
                    </>
                }

            </div>
        </aside>
    )
}

export default Sidebar