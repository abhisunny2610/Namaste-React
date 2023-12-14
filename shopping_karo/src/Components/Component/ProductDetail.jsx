import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'
import { SINGLE_PRODUCT_API } from '../../Helper'

const ProductDetail = () => {

  const { proId } = useParams()
  const { singleProduct, getSingleProduct } = useContext(ProductContext)

  const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = singleProduct

  useEffect(() => {
    getSingleProduct(SINGLE_PRODUCT_API + proId)
  }, [])

  console.log(singleProduct)

  const mrp = price*15 + discountPercentage*10

  return (
    <div className="product-details d-flex gap-4 mt-4">
      <div className="images">
        <img src={thumbnail} alt="" />
      </div>
      <div className="details">
        <h3 className='title text-capitalize fw-bold'>{title}</h3>
        <p className='description text-capitalize'>{description}</p>
        <p className='brand'>Brand: {brand}</p>
        <p className='rating'>{rating}</p>
        <p className='sale'> bought in past month</p>

        <hr />

        <h3 className='price'><span className='discount text-danger text-truncate fw-light fs-5'>-{discountPercentage}%</span>  {price > 0 ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price * 15) : " "}</h3>
        <p className='mrp'>M.R.P <span className='text-decoration-line-through'>₹ {mrp}</span></p>
        <p>Inclusive of all taxes</p>
        <hr />

        <div className="on-delivery d-flex">
          <div className="delivery">
            <p>Pay on Delivery</p>
          </div>

          <div className="exchange">
            <p>7 Days Return & Exhange</p>
          </div>

          <div className="fast">
            <p>Fast Delivery</p>
          </div>

          <div className="free">
            <p>Free Delivery</p>
          </div>
        </div>
      </div>
      <div className="side-bar shadow-sm p-3">
        <h3 className='price'>{price > 0 ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price * 15) : " "}</h3>
        <p className='free-desc'>FREE Delivery { } on orders dispatched by Shop Karo over { } 499</p>
        <p className='location'>Enter your location</p>
        <hr />
        {stock > 0 ? (<h4 className='instock'>In Stock</h4>) : (<h4 className='outofstock'>Out of Stock</h4>)}
        <button className='cart-button'>
          Add to Cart
        </button>
        <button className='buy-button'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductDetail