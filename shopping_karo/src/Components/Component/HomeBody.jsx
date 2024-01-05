import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import { ProductContext } from '../../Context/ProductContext'
import { imageList } from '../../Helper'


const HomeBody = () => {

    const { products } = useContext(ProductContext)

    const [imageIndex, setImageIndex] = useState(0)

    const handleIncrease = () => {
        setImageIndex((preIndex) => (preIndex === 0) ? imageList.length - 1 : preIndex - 1)
    }

    const handleDecrease = () => {
        setImageIndex((preIndex) => (preIndex + 1) % imageList.length)
    }

    useEffect(() => {
        const interval = setInterval(handleIncrease, 5000)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div className='home-body mt-2'>
            {/* <div className="category d-flex justify-content-between align-items-center">
                <div className="buttons">

                    {products.map((curElem, index) => {
                        return <button key={index}>{curElem.category}</button>
                    })}
                    
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Product' />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div> */}

            <div className="coupon text-center mt-3">
                <p>20% OFF ON EVERY PRODUCT <span>WITH CODE</span> SOGET20 <span className='details'>VIEW DETAILS</span></p>
            </div>

            <div className="carousel mt-3">
                <button className='btn btn-sm rounded-circle' onClick={handleDecrease}><i className='fa-solid fa-arrow-left'></i></button>
                <img src={imageList[imageIndex]} alt="image" className='mx-4' />
                <button className='btn btn-sm rounded-circle' onClick={handleIncrease}><i className='fa-solid fa-arrow-right'></i></button>
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