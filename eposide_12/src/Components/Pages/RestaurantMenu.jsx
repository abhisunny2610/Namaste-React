import { useParams } from 'react-router-dom'
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from '../config'
import { MenuShimmer } from '../Utilities/Shimmer'
import useSingleRestaurant from '../../Hooks/UseRestaurant'
import { addItem } from '../../Utils/CartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {

    const { resId } = useParams()

    const [restaurant, menuItems] = useSingleRestaurant(resId)

    const dispatch = useDispatch()

    const handleAddItem = () => {
        dispatch(addItem("Graphes"))
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
                    <p className="restaurant-tags" style={{ marginTop: "3px" }}>{restaurant?.areaName}</p>
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
                        <div><i className="fa-solid fa-motorcycle"></i> <span style={{ marginLeft: "5px" }}>{restaurant?.sla?.slaString}</span></div>
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
                                    <button className="add-btn" onClick={() => handleAddItem()}> ADD +</button>
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