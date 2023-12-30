import React from 'react'

const TotalCountingCard = ({ data }) => {

  const { icon, title, total, color } = data

  return (
    <div className="total-counting d-flex align-items-center gap-3 p-2" style={{backgroundColor: color, width: "200px"}}>
      <div className="info justify-content-center">
        <div className='fs-2'>{icon}</div>
        <p className='title'>{title}</p>
      </div>
      <div className="total fs-4">{total}</div>
    </div>
  )
}

export default TotalCountingCard 