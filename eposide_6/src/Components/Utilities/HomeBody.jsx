import React, { useState, useEffect } from 'react'
import { IMAGE_CDN } from '../config';
import { restaurantList } from '../config';
import { swiggy_api_URL } from '../config';
// import foodimg from '../Images/foodimage.jpg'

// RestaurantList is JSON Data for displaying cards

function filterData(searchText, filterList) {
  
  const filterData = filterList.filter((restaurant) => restaurant.data.name.includes(searchText))

  return filterData
}


const RestaurantCard = ({ restaurant }) => {

  const { cuisines, name, cloudinaryImageId, avgRating, areaName, deliveryTime } = restaurant?.info

  return <div className="rest-card">
    <img src={IMAGE_CDN + cloudinaryImageId} alt="restaurant" />
    <div className="content">
      <h3 className='name'>{name}</h3>
      <p className='rating'>{avgRating} . {deliveryTime} mins</p>
      <p className="cuisines">{cuisines.join(", ")}</p>
      <p className="address">{areaName}</p>
    </div>
  </div>
}


const HomeBody = () => {

  const [searchInput, setSearchInput] = useState("")
  const [filterRest, setFilterRest] = useState([])

  async function fetchAPI(){
    const response = await fetch(swiggy_api_URL)
    const json = await response.json();
    // console.log("Json", json)
    const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setFilterRest(data)
  }
  // console.log("filterlist",filterRest)

  useEffect(()=> {
      fetchAPI()
  }, [])

  return <div className='home-body'>

    <div className='search'>
      <input type="text" className='search-input' placeholder='Search for Restaurant and Food' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button className='search-btn' onClick={() => {
        const data = filterData(searchInput, filterRest)
        setFilterRest(data)
      }}>Search</button>
    </div>

    <div className="cards">
      {
        filterRest.map((restaurant, index) => {
          return <RestaurantCard restaurant={restaurant} key={index} />
        })
      }
    </div>

  </div>
}

export default HomeBody