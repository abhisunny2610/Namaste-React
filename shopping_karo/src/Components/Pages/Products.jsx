import React, { useContext } from 'react'
import Shimmer from '../Component/Shimmer'
import { ProductContext } from '../../Context/ProductContext'
import { Link } from 'react-router-dom'
import ProductCard from '../Component/ProductCard'

const Products = () => {

  const { products } = useContext(ProductContext)

  return (
    <section>
      {
        products?.length === 0 ? (<Shimmer />) : (<div className="products d-flex flex-wrap gap-4 justify-content-center mt-5">
          {
            products.map(product => {
              return <Link to={'/product/' + product?.id} key={product.id} className='p-link'><ProductCard product={product} key={product?.id} /></Link>
            })
          }
        </div>)
      }
    </section>
  )
}

export default Products