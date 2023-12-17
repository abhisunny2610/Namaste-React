import React, { useEffect, useState } from 'react'
import YoutubeLogo from '../Assests/YouTube-Logo.wine.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Redux/SidebarSlice'
import { search_suggestion_api } from '../Service/api'

const Header = () => {

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const data = e.target.value
    setSearch(data)
  }

  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
     dispatch(toggleMenu()) 
  }

  useEffect(()=> {
    // const timer = setTimeout(()=> searchSuggestions(), 200)

    // return() => {
    //   clearTimeout(timer)
    // }
  }, [search])

  const searchSuggestions = async() => {
    const response = await fetch(search_suggestion_api + search)
    const json = await response.json()
    console.log(json)
  }

  return (
    <nav className='d-flex bg-light shadow z-3 justify-content-between align-items-center px-4 '>
      <div className="logo d-flex align-items-center gap-3">
      <i className="fa-solid fa-bars fs-5" onClick={()=> toggleMenuHandler()}></i>
        <img src={YoutubeLogo} alt="logo" width="100px"/>
      </div>

      <div className="search  d-flex align-items-center">
        <input type="text" placeholder='Search' className='form-control' value={search}  onChange={(e)=> handleSearch(e)}/>
        <button className='btn text-black'><i className="fa-solid fa-magnifying-glass"></i></button>
        <div className="mic mx-3 fs-5">
        <i className="fa-solid fa-microphone"></i>
        </div>
      </div>

      <div className="items d-flex gap-3 fs-5">
      <i className="fa-solid fa-video"></i>
      <i className="fa-regular fa-bell"></i>
      <i className="fa-regular fa-circle-user"></i>
      </div>
    </nav>
  )
}

export default Header