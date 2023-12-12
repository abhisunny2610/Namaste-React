import { useState, useEffect } from "react";
import { swiggy_menu_api_URL, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../Components/config";

const useSingleRestaurant = (resId) => {
    
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

    return [restaurant, menuItems]
}

export default useSingleRestaurant