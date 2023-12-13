import React from 'react'

const ProductCard = ({product}) => {

  const {thumbnail, price, description, title} = product

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <p className='description mt-3'>{description.toUpperCase()}</p>
      <p className='price'>{price}</p>
    </div>
  )
}

export default ProductCard