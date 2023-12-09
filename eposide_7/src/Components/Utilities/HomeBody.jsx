import React, { useState, useEffect } from 'react'
import { swiggy_api_URL, IMAGE_CDN} from '../config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

// import { restaurantList } from '../config';
// import foodimg from '../Images/foodimage.jpg'

function filterData(searchText, filterList) {

  const filterData = filterList.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

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
  const [allRest, setAllRest] = useState([])
  const [filterRest, setFilterRest] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  async function fetchAPI() {
    const response = await fetch(swiggy_api_URL)
    const json = await response.json();
    // console.log("Json", json)
    const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setFilterRest(data)
    setAllRest(data)
    // console.log("rest",data)
  }
  // console.log("filterlist",filterRest)

  useEffect(() => {
    fetchAPI()
  }, [])

  const searchData = (searchText, restaurants) => {
    if (searchInput !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilterRest(filteredData)
      setErrorMessage("")

      if (filteredData?.length === 0) {
        setErrorMessage("No Matches restaurant found");
      }
    } else {
      setErrorMessage("")
      setFilterRest(restaurants)
    }
  }

  if (!allRest) return null

  return <div className='home-body'>

    <div className='search'>
      <input type="text" className='search-input' placeholder='Search for Restaurant and Food' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button className='search-btn' onClick={() => {
        searchData(searchInput, allRest)
      }}>Search</button>
    </div>

    {errorMessage && <div className='error-container'>{errorMessage}</div>}

    {allRest?.length === 0 ? (<Shimmer />) :
      (<div className="cards">
        {
          filterRest.map((restaurant, index) => {
            return (<Link to={'/restaurant/' + restaurant?.info?.id} key={index} ><RestaurantCard restaurant={restaurant} key={index} /></Link>)
          })
        }
      </div>)}
  </div>
}

export default HomeBody