import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";
import { useState } from "react";


// 4️⃣ Body Component
// - Contains search bar placeholder
// - Loops (maps) through resList and renders multiple RestaurantCards

const Body = () => {
 console.log("Page rendered");
 
 const [listOfRestaurants, setListOfRestaurants] = useState(resList);
 console.log(useState([]));

 console.log(listOfRestaurants);

 const filterByRestaurantRatings = () => {
  const filteredRestaurants = listOfRestaurants?.filter(
    (restaurant) => restaurant?.info?.avgRating > 4.2
  );
  setListOfRestaurants(filteredRestaurants);
 };
  // function to filter by Chinese cuisines
   const filterByChinese = () => {
     const filteredRestChinese = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Chinese")
    );
    setListOfRestaurants(filteredRestChinese)
  }

  // function to filter by Ice-creams cuisines
   const filterByIceCreams = () => {
     const filteredRestIceCreams = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Ice Cream")
    );
    setListOfRestaurants(filteredRestIceCreams)
  }

  // function to filter by Pizzas
   const filterByPizzas = () => {
    const filteredRestPizzas = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Pizzas")
    );
    setListOfRestaurants(filteredRestPizzas)
  }
  return (
  <div className="main-body">
      <div className="filter">
         <div className="filter-bar">
      <button onClick={filterByRestaurantRatings}>Filter By Ratings</button>
      <button onClick={filterByChinese}>Chinese</button>
      <button onClick={filterByIceCreams}>Ice-Creams</button>
      <button onClick={filterByPizzas}>Pizzas</button>
    </div>
        </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;