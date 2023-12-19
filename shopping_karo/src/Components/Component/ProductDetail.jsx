import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'
import { SINGLE_PRODUCT_API, randomNumberInRange } from '../../Helper'
import img1 from '../../Images/icon-amazon-delivered._CB485933725_.png'
import img2 from '../../Images/icon-cod._CB485937110_.png'
import img3 from '../../Images/icon-returns._CB484059092_.png'
import img4 from '../../Images/trust_icon_free_shipping_81px._CB630870460_.png'
import Image from './Image'
import AddToCart from './AddToCart'

const ProductDetail = () => {

  const { proId } = useParams()
  const { singleProduct, getSingleProduct } = useContext(ProductContext)

  const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = singleProduct

  useEffect(() => {
    getSingleProduct(SINGLE_PRODUCT_API + proId)
  }, [])


  // console.log("sinngle data", singleProduct)

  const mrp = price * 15 + discountPercentage * 10

  return (
    <div className="product-details gap-5 mt-4 row">
      <div className="images col-4">
        <Image img={images} />
      </div>
      <div className="details col-4">
        <h3 className='title text-capitalize fw-bold'>{title}</h3>
        <p className='description text-capitalize'>{description}</p>
        <p className='brand'>Brand: {brand}</p>
        <p className='rating'>{rating}
          <span className='mx-4'>
            {randomNumberInRange(0, 200)} ratings
          </span>
        </p>
        <p className='sale'>{randomNumberInRange(0, 100)} bought in past month</p>

        <hr />

        <h3 className='price'><span className='discount text-danger text-truncate fw-light fs-5'>-{discountPercentage}%</span>  {price > 0 ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price) : " "}</h3>
        <p className='mrp'>M.R.P <span className='text-decoration-line-through'>₹ {mrp}</span></p>
        <p>Inclusive of all taxes</p>
        <hr />

        <div className="on-delivery d-flex justify-content-center align-items-center">
          <div className="delivery text-center">
            <img src={img2} alt="delivery" width="50px" />
            <p>Pay on Delivery</p>
          </div>

          <div className="exchange text-center">
            <img src={img3} alt="return" width="50px" />
            <p>7 Days Return & Exhange</p>
          </div>

          <div className="fast text-center">
            <img src={img1} alt="fast" width="50px" />
            <p>Fast Delivery</p>
          </div>

          <div className="free text-center">
            <img src={img4} alt="free" width="50px" />
            <p>Free Delivery</p>
          </div>
        </div>
      </div>
      <div className="side-bar shadow-sm p-3 col-3">
        <h3 className='price'>{price > 0 ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price) : " "}</h3>
        <p className='free-desc'>FREE Delivery { } on orders dispatched by Shop Karo over { } ₹499</p>
        <p className='location'>Enter your location</p>
        <hr />
        {stock > 0 ? (<h4 className='instock'>In Stock</h4>) : (<h4 className='outofstock'>Out of Stock</h4>)}
        {
          stock > 0 && <AddToCart stock={stock} product={singleProduct} />
          }
      </div>
    </div>
  )
}

export default ProductDetail