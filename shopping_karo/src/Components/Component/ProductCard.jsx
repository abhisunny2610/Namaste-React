import React from 'react'

const ProductCard = ({product}) => {

  const {thumbnail, price, description, title, discountPercentage} = product

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <p className='description mt-3'>{title}</p>
      <h3 className='price fs-5'><span className='discount text-danger text-truncate fw-light fs-6'>-{discountPercentage}%</span>  {price > 0 ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price * 15) : " "}</h3>
    </div>
  )
}

export default ProductCard