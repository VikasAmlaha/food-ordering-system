import { useEffect, useState } from "react";

const RestaurantPage = () => {
    const RESTAURANT_API = 
    "://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=8167&catalog_qa=undefined&query=Tea&submitAction=ENTER";
    const [restaurantData, setRestaurantData] = useState([]);
    const getRestaurantData = async (restaurntId = "") => {
        const response = await fetch(RESTAURANT_API);
        const json = await response.json();
        const recommendedRes = 
            json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards?.[2]?.card?.card?.itemCards;
            setRestaurantData(recommendedRes);
    };
    useEffect(() => {
        getRestaurantData();
    }, []);

    return (
        <div>
            <h1>Restaurant Page</h1>
        </div>
    );
};


export default RestaurantPage;