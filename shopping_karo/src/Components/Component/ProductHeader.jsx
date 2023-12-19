import React from 'react'
import ShortProducts from './ShortProducts'

const ProductHeader = ({product}) => {

  return (
    <div className="product-header bg-black text-white align-items-center d-flex justify-content-between mt-2">
        <div>PRODUCT LIST</div>
        <div>{product.length} PRODUCTS AVAILABLE</div>
        <ShortProducts />
    </div>
  )
}

export default ProductHeader