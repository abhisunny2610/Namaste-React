import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import { ProductContext } from '../../Context/ProductContext'


const HomeBody = () => {

    const { products } = useContext(ProductContext)
    
    return (
        <div className='home-body mt-2'>
            <div className="category d-flex justify-content-between align-items-center">
                <div className="buttons">
                    <button>NEW</button>
                    <button>WOMEN</button>
                    <button>SHOES</button>
                    <button>HANDBAGS</button>
                    <button>MEN</button>
                    <button>BEAUTY</button>
                    <button>HOME</button>
                    <button>KIDS</button>
                    <button>SALE</button>
                    <button>ACCESSORIES</button>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Product' />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>

            <div className="coupon text-center mt-3">
                <p>20% OFF ON EVERY PRODUCT <span>WITH CODE</span> SOGET20 <span className='details'>VIEW DETAILS</span></p>
            </div>

            {
                products?.length === 0 ? (<Shimmer />) : (<div className="products d-flex flex-wrap gap-4 justify-content-center mt-5">
                    {
                        products.slice(36, 64).map(product => {
                            return <Link to={'product/' + product?.id} key={product.id} className='p-link'><ProductCard product={product} key={product?.id} /></Link>
                        })
                    }
                </div>)
            }
        </div>
    )
}

export default HomeBody