import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantSkeleton from "./RestaurantSkeleton";
import { HOMEPAGE_RESTAURANT_API } from "../util/constant";
import { Link } from "react-router";

// 4️⃣ Body Component
// - Contains search bar placeholder
// - Loops (maps) through resList and renders multiple RestaurantCards

const Body = () => {
 console.log("Page rendered");
 
 const [listOfRestaurants, setListOfRestaurants] = useState([]);
 const [filteredListRestaurants, setFilteredListRestaurants] = useState([]);
 const [loading, setLoading] = useState(false);
 const [searchText, setSearchText] = useState("");
 const [locationText, setLocationText] = useState("");
 const [locations, setLocations] = useState([]);

 console.log(useState([]));

 console.log(listOfRestaurants);

 const filterByRestaurantRatings = () => {
  const filteredRestaurants = listOfRestaurants?.filter(
    (restaurant) => restaurant?.info?.avgRating > 4.2
  );
  setFilteredListRestaurants(filteredRestaurants);
 };

  const getRestaurantData = async () => {
    try {
      setLoading(true);
      console.log("function Called")
    const data = await fetch(HOMEPAGE_RESTAURANT_API);
    const json =  await data.json();

    const restaurants = json?.data?.cards?.find(
      (item) => item?.card?.card?.id === "restaurant_grid_listing_v2"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants)
      setFilteredListRestaurants(restaurants)

    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }   
  };
  useEffect(() => {
    console.log("Hello useEffect executed.");
    getRestaurantData();
  }, []);

  // unique locations 
  useEffect(() => {
  if (listOfRestaurants.length > 0) {
    // 1. Take out all localities from restaurants
    const allLocalities = listOfRestaurants.map(
      (rest) => rest?.info?.locality
    );

    // 2. Remove duplicate values using Set
    const localitySet = new Set(allLocalities);

    // 3. Convert Set back to an array
    const uniqueLocalities = Array.from(localitySet);

    // 4. Save in state so we can use it in dropdown
    setLocations(uniqueLocalities);
  }
}, [listOfRestaurants]);


  // function to location dropdown menu
  
    const selectLocation = () => {
      

  };

  // function to filter locations based on dropdown selection

  const locationFilter = () => {
    console.log("Filtering for:", locationText);
  };

  // function to search restaurant by type the menu it serves

  const searchRestaurant = () => {
    const filteredRestaurants = listOfRestaurants?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    )
    setFilteredListRestaurants(filteredRestaurants);
  }
 
  // function to filter by Chinese cuisines
   const filterByChinese = () => {
     const filteredRestChinese = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Chinese")
    );
    setFilteredListRestaurants(filteredRestChinese)
  }

  // function to filter by Ice-creams cuisines
   const filterByIceCreams = () => {
     const filteredRestIceCreams = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Ice Cream")
    );
    setFilteredListRestaurants(filteredRestIceCreams)
  }

  // function to filter by Pizzas
   const filterByPizzas = () => {
    const filteredRestPizzas = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Pizzas")
    );
    setFilteredListRestaurants(filteredRestPizzas)
  }
  return (
    <> 
    {loading ? (
      <div className="restaurant-skeleton-body">
        {[1,2,3,4,5,6,7,8,9,10]?.map((item) => (
          <RestaurantSkeleton key={item} /> 
        ))}
      </div>  
    ) : (
      <div className="main-body">
      <div className="filter">
         <div className="filter-bar">

    <select name="Location" 
        id="location-select" 
        value={locationText}
        onChange={(e) => {
          setLocationText(e?.target?.value);
        }}>
      <option value="">Locations we are serving</option>
      {locations.map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <button onClick={() => {
  const filtered = listOfRestaurants.filter(
    (rest) => rest?.info?.locality === locationText
  );
  setFilteredListRestaurants(filtered);
}}
>Search</button>





      <input 
        name="search-text"
        value={searchText}
        onChange={(e) => {
          console.log(e);
          setSearchText(e?.target?.value);
        }}
      />


      
      <button onClick={searchRestaurant}>Search</button>
      <button onClick={filterByRestaurantRatings}>Filter By Ratings</button>
      <button onClick={filterByChinese}>Chinese</button>
      <button onClick={filterByIceCreams}>Ice-Creams</button>
      <button onClick={filterByPizzas}>Pizzas</button>
    </div>
        </div>
      <div className="res-container">
        {filteredListRestaurants?.map((restaurant, idx) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
            >
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>

    )}
    </>
  
  );
};
export default Body;