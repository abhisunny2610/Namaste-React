import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

    const { id } = useParams()
    console.log(id)

  return (
    <div>RestaurantMenu</div>
  )
}

export default RestaurantMenu