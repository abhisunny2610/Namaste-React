import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleMenu } from '../Redux/SidebarSlice'

const Sidebar = () => {

    const dispatch = useDispatch()

    const isMenuOpen = useSelector(store => store.sidebar.isMenuOpen)

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <aside>
            <div className="bars">
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className="link-group">
                <NavLink className="link" activeClassName="active" to="">Home</NavLink>
                <NavLink className="link" activeClassName="active" to="">Shorts</NavLink>
                <NavLink className="link" activeClassName="active" to="">Subscriptions</NavLink>
                <NavLink className="link" activeClassName="active" to="">You</NavLink>
                <NavLink className="link" activeClassName="active" to="">Downloads</NavLink>
            </div>
        </aside>
    )
}

export default Sidebar