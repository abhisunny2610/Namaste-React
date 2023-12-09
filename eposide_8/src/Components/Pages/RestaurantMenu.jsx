import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { swiggy_menu_api_URL, IMG_CDN_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, ITEM_IMG_CDN_URL } from '../config'
import { useEffect } from 'react'
import { MenuShimmer } from '../Utilities/Shimmer'

const RestaurantMenu = () => {

    const { resId } = useParams()
    const [restaurant, setRestaurant] = useState(null)
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo() {
        const response = await fetch(swiggy_menu_api_URL + resId)

        const json = await response.json()

        // set restaurantData
        const restaurantData = json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;

        setRestaurant(restaurantData);

        // set menu item data
        const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(x => x['@type'] == MENU_ITEM_TYPE_KEY)?.map(x => x.itemCards).flat().map(x => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find(x => x.id == item.id)) {
                uniqueMenuItems.push(item);
            }
        })
        setMenuItems(uniqueMenuItems);

    }

    return !restaurant ? (
        <MenuShimmer />
    ) : (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img
                    className="restaurant-img"
                    src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name}
                />
                <div className="restaurant-summary-details">
                    <h2 className="restaurant-title">{restaurant?.name}</h2>
                    <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
                    <p className="restaurant-tags" style={{marginTop: "3px"}}>{restaurant?.areaName}</p>
                    <div className="restaurant-details">
                        <div className="restaurant-rating" style={
                            (restaurant?.avgRating) < 4
                                ? { backgroundColor: "var(--light-red)" }
                                : (restaurant?.avgRating) === "--"
                                    ? { backgroundColor: "white", color: "black" }
                                    : { color: "white" }
                        }>
                            <i className="fa-solid fa-star"></i>
                            <span>{restaurant?.avgRating}</span>
                        </div>
                        <div className="restaurant-rating-slash">|</div>
                        <div><i className="fa-solid fa-motorcycle"></i> <span style={{marginLeft: "5px"}}>{restaurant?.sla?.slaString}</span></div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restaurant?.costForTwoMessage}</div>
                    </div>
                </div>
            </div>

            <div className="restaurant-menu-content">
                <div className="menu-items-container">
                    <div className="menu-title-wrap">
                        <h3 className="menu-title">Recommended</h3>
                        <p className="menu-count">
                            {menuItems.length} ITEMS
                        </p>
                    </div>
                    <div className="menu-items-list">
                        {menuItems.map((item) => (
                            <div className="menu-item" key={item?.id}>
                                <div className="menu-item-details">
                                    <h3 className="item-title">{item?.name}</h3>
                                    <p className="item-cost">
                                        {item?.price > 0
                                            ? new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            }).format(item?.price / 100)
                                            : " "}
                                    </p>
                                    <p className="item-desc">{item?.description}</p>
                                </div>
                                <div className="menu-img-wrapper">
                                    {item?.imageId && (
                                        <img
                                            className="menu-item-img"
                                            src={ITEM_IMG_CDN_URL + item?.imageId}
                                            alt={item?.name}
                                        />
                                    )}
                                    <button className="add-btn"> ADD +</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RestaurantMenu