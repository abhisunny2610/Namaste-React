import React from 'react'

const ButtonList = ({name}) => {
  return (
    <div className="buttons d-flex align-items-center">
        <button className='btn'>All</button>
        <button className='btn'>Indian pop music</button>
        <button className='btn'>T-series</button>
    </div>
  )
}

export default ButtonList