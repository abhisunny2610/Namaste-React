import React from 'react'

const ProductCardShimmer = () => {
    return(
        <div className="shimmer-card">
            <div className="img stroke animate"></div>
            <div className="desc stroke animte"></div>
            <div className='price stroke animate'></div>
        </div>
    )
}

const Shimmer = () => {
  return (
    <div className="shimmer-container d-flex flex-wrap justify-content-center gap-4  mt-5">
        {
            new Array(20).fill(0).map((element, index) => {
                return <ProductCardShimmer key={index}/>
            })
        }
    </div>
  )
}

export default Shimmer