import React, { useState, useEffect } from 'react'
import { swiggy_api_URL, IMAGE_CDN} from '../config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../../Utils/Hepler';
import useOnline from '../../Hooks/useOnline';

const RestaurantCard = ({ restaurant, user }) => {

  const { cuisines, name, cloudinaryImageId, avgRating, areaName, sla } = restaurant?.info
  const {sname, email} = user

  return <div className="rest-card">
    <img src={IMAGE_CDN + cloudinaryImageId} alt="restaurant" />
    <div className="content">
      <h3 className='name'>{name}</h3>
      <p className='rating'><i className="fa-solid fa-star"></i><span>{avgRating} • </span><span>{sla.deliveryTime} mins</span></p>
      <p className="cuisines">{cuisines.join(", ")}</p>
      <p className="address">{areaName}</p>
      <p>{sname}</p>
      <p>{email}</p>
    </div>
  </div>
}


const HomeBody = ({user}) => {

  const [searchInput, setSearchInput] = useState("")
  const [allRest, setAllRest] = useState([])
  const [filterRest, setFilterRest] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  async function fetchAPI() {
    const response = await fetch(swiggy_api_URL)
    const json = await response.json();
    const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setFilterRest(data)
    setAllRest(data)
  }

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

  const offline = useOnline()
  if(!offline){
    return <h1 style={{textAlign: "center", margin: "50px 0px"}}>Offline, please check your internet connection</h1>
  }

  if (!allRest) return null

  return <section className='home-body mt-16'>

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
            return (<Link to={'/restaurant/' + restaurant?.info?.id} key={index} ><RestaurantCard restaurant={restaurant} key={index} user={user}/></Link>)
          })
        }
      </div>)}
  </section>
}

export default HomeBody