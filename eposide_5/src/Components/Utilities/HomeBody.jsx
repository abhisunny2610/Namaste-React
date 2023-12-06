import React, { useState } from 'react'
import { IMAGE_CDN } from '../config';
import { restaurantList } from '../config';
// import foodimg from '../Images/foodimage.jpg'

// RestaurantList is JSON Data for displaying cards

const RestaurantCard = ({ restaurant }) => {

  const { cuisines, name, cloudinaryImageId, avgRating, address, deliveryTime } = restaurant.data

  return <div className="rest-card">
    <img src={IMAGE_CDN + cloudinaryImageId} alt="restaurant" />
    <div className="content">
      <h3 className='name'>{name}</h3>
      <p className='rating'>{avgRating} . {deliveryTime} mins</p>
      <p className="cuisines">{cuisines.join(", ")}</p>
      <p className="category">{address}</p>
    </div>
  </div>
}

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("")
  const [seachBtn, setSearchBtn] = useState(false)

  return <div className='search'>
    <input type="text" className='search-input' placeholder='Search for Restaurant and Food' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
    <button className='search-btn' onChange={() => setSearchBtn(true)}>Search</button>
  </div>
}


const HomeBody = () => {
  return <div className='home-body'>
    <SearchBar />
    <div className="cards">
      {
        restaurantList.map((restaurant, index) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.data.id} />
        })
      }
    </div>
  </div>
}

export default HomeBody