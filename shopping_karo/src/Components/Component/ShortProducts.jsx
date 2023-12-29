import React, { useContext } from 'react'
import { FilterContext } from '../../Context/FilterContext'

const ShortProducts = () => {

    const {sorting} = useContext(FilterContext)

  return (
    <>
        <form action="">
            <label htmlFor="sort" className='mx-2'>Sort by: Featured</label>
            <select name="sort" id="sort" onClick={sorting}>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="a-z">Name: A - Z</option>
                <option value="z-a">Name: Z - A</option>
            </select>
        </form>
    </>
  ) 
}

export default ShortProducts