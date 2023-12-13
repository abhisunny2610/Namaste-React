import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'


const HomeBody = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        const response = await fetch(" https://dummyjson.com/products?skip=0&limit=100")
        const json = await response.json()
        setAllProducts(json?.products)
    }

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
                allProducts?.length === 0 ? (<Shimmer />) : (<div className="products d-flex flex-wrap gap-4 justify-content-center mt-5">
                    {
                        allProducts.slice(36, 64).map(product => {
                            return <Link to={'product/' + product?.id} key={product.id} className='p-link'><ProductCard product={product} key={product?.id} /></Link>
                        })
                    }
                </div>)
            }
        </div>
    )
}

export default HomeBody