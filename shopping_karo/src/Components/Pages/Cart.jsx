import React from 'react'
import img from '../../Images/OIP-removebg-preview.png'

const Cart = () => {
  
  return (
    <section className='cart-section-lg'>
      <div className='shadow p-5 mt-4'>
      <div className="heading d-flex align-items-end justify-content-between">
      <h3>Shopping Cart</h3>
      <h6>Price</h6>
      </div>
      <hr />
      <div className="cart-item d-flex justify-content-between">
        <img src={img} alt="" width="150px"/>
        <div className="deatils mx-4">
          <h3 className='title'>Spring And Summershoes</h3>
          <div className="quantity">
            <label htmlFor="quantity"></label>
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>

            <div className="buttons d-flex gap-2 mt-3">
              <button className='btn'>Delete</button>
              <button className='btn'>Save for later</button>
              <button className='btn'>Share</button>
            </div>
          </div>
        </div>
      <h3>₹300.00</h3>
      </div>

      <hr />

      <div className="subtotal text-end">
        <h3>Subtotal (1 item):   1,750.00</h3>
      </div>
      </div>
    </section>
  )
}

export default Cart