import React, { useContext } from 'react'
import { FilterContext } from '../../Context/FilterContext'

const ShortProducts = () => {

    const {sorting} = useContext(FilterContext)

  return (
    <>
        <form action="">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
                <option value="lowest">price(lowest)</option>
                <option value="highest">price(highest)</option>
                <option value="a-z">price(a-z)</option>
                <option value="z-a">price(z-a)</option>
            </select>
        </form>
    </>
  )
}

export default ShortProducts