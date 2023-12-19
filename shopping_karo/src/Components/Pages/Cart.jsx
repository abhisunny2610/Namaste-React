import React, { useContext } from 'react'
import img from '../../Images/OIP-removebg-preview.png'
import { CartContext } from '../../Context/CartContext'
import { QuantityToggle } from '../Component/AddToCart'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, removeItem, subtotal, total_items, clearCart } = useContext(CartContext)

  const setDecrease = () => {
    // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }

  const setIncrease = () => {
    // quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }

  console.log(cart)

  return (
    <section className='cart-section-lg'>
      <div className='shadow p-5 mt-4'>
        <div className="heading d-flex align-items-end justify-content-between">
          <h3>Shopping Cart</h3>
          <h6>Price</h6>
        </div>
        <hr />
        <div>
          {
            (cart.length > 0) ? (
              cart.map(cartItem => {
                return <div className="cart-item row border-bottom py-3 border-2 border-grey justify-content-center" key={cartItem?.id}>
                  <div className='col-3'>
                    <img src={cartItem?.image} alt={cartItem.id} width="120px" />
                  </div>
                  <div className="deatils mx-4 col-6">
                    <h3 className='title'>{cartItem?.title}</h3>
                    <div className="quantity">
                      <QuantityToggle quantity={cartItem.quantity} setDecrease={setDecrease} setIncrease={setIncrease} />

                      <div className="buttons d-flex gap-2 mt-3">
                        <button className='btn' onClick={() => removeItem(cartItem?.id)}>Delete</button>
                        <button className='btn'>Save for later</button>
                        <button className='btn'>Share</button>
                      </div>
                    </div>
                  </div>
                  <h4 className='col-2 text-end'>₹ {cartItem?.price}</h4>
                </div>
              }) 
            ): <h1>Your Shoppping Cart is Empty.</h1>
          }

        </div>

        <div className="subtotal text-end">
          <h3>Subtotal ({total_items} item):  ₹ {subtotal}</h3>
        </div>

        <div className="buttons d-flex mt-5 justify-content-between">
          <Link to='/products' className='btn bg-orange'>Continue Shopping</Link>
          <button className='btn btn-danger' onClick={() => clearCart()}>Clear Cart</button>
        </div>
      </div>
    </section>
  )
}

export default Cart