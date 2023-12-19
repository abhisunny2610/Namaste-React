import React from 'react'
import img from '../../Images/OIP-removebg-preview.png'

const Cart = () => {
  return (
    <section className='cart-section shadow'>
      <div className="heading">
      <h3>Shopping Cart</h3>
      <p>Price</p>
      </div>
      <hr />
      <div className="cart-item">
        <img src={img} alt="" />
        <div className="deatils">
          <h3 className='title'>Spring And Summershoes</h3>
          <h3 className='desc'>Comfortable Stretch Cloth, Lightweight Body; ,Rubber Sole, Anti-Skid Wear;</h3>
          <div className="quantity">
            <label htmlFor="quantity"></label>
            <select name="quantity" id="quantity">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
            </select>

            <div className="buttons">
              <button>Delete</button>
              <button>Save for later</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>

      <h3>₹300.00</h3>
      <hr />

      <div className="subtotal">
        <h3>Subtotal (1 item):   1,750.00</h3>
      </div>
    </section>
  )
}

export default Cart