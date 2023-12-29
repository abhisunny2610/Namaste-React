import React from 'react'

const TotalCountingCard = ({data}) => {

    const {icon, title, total} = data

  return (
    <div className="total-counting">
        <div className="info">
            {icon}
            <p className='title'>{title}</p>
        </div>
        <div className="total">{total}</div>
    </div>
  )
}

export default TotalCountingCard