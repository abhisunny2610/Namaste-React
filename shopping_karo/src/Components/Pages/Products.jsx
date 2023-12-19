import React, { useContext } from 'react'
import Shimmer from '../Component/Shimmer'
import { Link } from 'react-router-dom'
import ProductCard from '../Component/ProductCard'
import { FilterContext } from '../../Context/FilterContext'
import ProductHeader from '../Component/ProductHeader'

const Products = () => {

  // const { products } = useContext(ProductContext)
  const {filter_products} = useContext(FilterContext)

  return (
    <section>

    <ProductHeader product={filter_products} />

      {
        filter_products?.length === 0 ? (<Shimmer />) : (<div className="products d-flex flex-wrap gap-4 justify-content-center mt-5">{
            filter_products.map(product => {
              return <Link to={'/product/' + product?.id} key={product?.id} className='p-link'><ProductCard product={product} keyw={product?.id} /></Link>
            })
          }
        </div>)
      }
    </section>
  )
}

export default Products