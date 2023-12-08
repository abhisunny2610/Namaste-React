import React from 'react'
import { shimmer_card_unit } from '../config'


const ShimmerCard = ()=> {
    return (
        <div className="shimmer-card">
            <div className="shimmer-img stroke animate"></div>
            <div className="shimmer-title stroke animate"></div>
            <div className="shimmer-tags stroke animate"></div>
            <div className="shimmer-details stroke animate"></div>
        </div>
    )
}

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        {
            new Array(shimmer_card_unit).fill(0).map((element, index)=> {
                return <ShimmerCard key={index} />
            })
        }
    </div>
  )
}

export default Shimmer