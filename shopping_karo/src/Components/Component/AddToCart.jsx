import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


export const QuantityToggle = ({setDecrease, setIncrease, quantity}) => {
  return (
    <div className="quantity d-flex align-items-center">
        <button className='btn btn-sm bg-secondary m-2' onClick={setDecrease}>-</button>
        <div className="num fs-5">{quantity}</div>
        <button className='btn btn-sm bg-secondary m-2' onClick={setIncrease}>+</button>
      </div>
  )
}

const AddToCart = ({ stock, product }) => {

  const { id } = product

  const {addToCart} = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }

  return (
    <>

      <QuantityToggle setDecrease={setDecrease} setIncrease={setIncrease} quantity={quantity}/>

      <Link to='/cart' className='text-decoration-none' onClick={() => addToCart(product, quantity, id)}>
        <button className='cart-button'>
          Add to Cart
        </button>
        <button className='buy-button'>Buy Now</button></Link>
    </>
  )
}

export default AddToCart