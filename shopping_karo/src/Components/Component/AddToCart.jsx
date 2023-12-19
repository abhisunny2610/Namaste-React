import React, { useState } from 'react'

const AddToCart = ({stock}) => {

    const [quantity, setQuantity] = useState(1)
    
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1): setQuantity(1);
  }

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1): setQuantity(stock);
  }

  return (
    <>

            <div className="quantity d-flex align-items-center">
              <button className='btn btn-sm bg-secondary m-2' onClick={setDecrease}>-</button>
              <div className="num fs-5">{quantity}</div>
              <button className='btn btn-sm bg-secondary m-2' onClick={setIncrease}>+</button>
            </div>

            <button className='cart-button'>
              Add to Cart
            </button>
            <button className='buy-button'>Buy Now</button>
          </>
  )
}

export default AddToCart