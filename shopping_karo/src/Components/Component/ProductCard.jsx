import React from 'react'

const ProductCard = ({product}) => {

  const {thumbnail, price, description, title} = product

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <p className='description mt-3'>{description.toUpperCase()}</p>
      <p className='price'>{price > 0 ? new Intl.NumberFormat("en-IN", {
        style : "currency",
        currency : "INR",
      }).format(price * 15) : " "}</p>
    </div>
  )
}

export default ProductCard