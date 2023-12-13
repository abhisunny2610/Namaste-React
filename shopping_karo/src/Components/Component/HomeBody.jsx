import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'


const HomeBody = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        const response = await fetch(" https://dummyjson.com/products?skip=0&limit=100")
        const json = await response.json()
        setAllProducts(json.products)
    }

    return (
        <div className='home-body'>
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
                <p>FREE SHIPPING <span>WITH CODE</span> SHIP50 <span className='details'>VIEW DETAILS</span></p>
            </div>

            <div className="products d-flex flex-wrap gap-4 justify-content-center mt-5">
                {
                    allProducts.slice(36,60).map(product => {
                       return <ProductCard product={product} key={product.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default HomeBody