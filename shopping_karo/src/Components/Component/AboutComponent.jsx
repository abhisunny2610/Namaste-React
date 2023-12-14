import React from 'react'
import logo from '../../Images/OIP-removebg-preview.png'

const AboutComponent = () => {

  return (
    <div className="about-component d-flex align-items-center justify-content-center gap-5">
        <div className="heading">
            <h1>Welcome to <br />The world of</h1>
            <h1 className='shop'>Shppoing Karo Moj Karo</h1>
            <h4 className='fst-italic'>"Better you will feel if you shop on <span>Shop Karo</span>"</h4>
        </div>

        <div className="image">
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default AboutComponent