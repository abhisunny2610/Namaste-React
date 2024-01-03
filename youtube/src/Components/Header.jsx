import React from 'react'
import logo from '../Styles/YouTube-Logo-PNG7.png'
import profile from '../Styles/wp7102416-jai-shree-ram-4k-wallpapers.jpg'
import '../Styles/Header.css'

const filters = ["All", "Music", "Indian pop music", "T-Series", "Mixed", "Bollywood Music", "Tarak Metha Ka Ulta Chasma", "React-router-dom", "C++", "Microsoft"]

const Header = () => {
  return (
    <>
        <nav className='header'>
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="logo" width="100px"/>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder='Search'/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className="profile">
                    <img src={profile} alt="profile" />
                </div>
            </div>

            <div className="filters mt-3">
                {
                    filters.map((filter, index) => {
                        return <button key={index}>{filter}</button>
                    })
                }
            </div>
        </nav>
    </>
  )
}

export default Header