import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";


// 4️⃣ Body Component
// - Contains search bar placeholder
// - Loops (maps) through resList and renders multiple RestaurantCards

const Body = () => {
  let resData = resList;
  console.log(resData);
  const filterByRestaurntRatings = () => {
    resData = resList?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    console.log(resData)
  }
  // function to filter by Chinese cuisines
   const filterByChinese = () => {
    resData = resList?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Chinese")
    );
    console.log(resData)
  }

  // function to filter by Ice-creams cuisines
   const filterByIceCreams = () => {
    resData = resList?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Ice Cream")
    );
    console.log(resData)
  }

  // function to filter by Pizzas
   const filterByPizzas = () => {
    resData = resList?.filter(
      (restaurant) => restaurant?.info?.cuisines.includes("Pizzas")
    );
    console.log(resData)
  }
  return (
  <div className="main-body">
      <div className="filter">
         <div className="filter-bar">
      <button onClick={filterByRestaurntRatings}>Filter By Ratings</button>
      <button onClick={filterByChinese}>Chinese</button>
      <button onClick={filterByIceCreams}>Ice-Creams</button>
      <button onClick={filterByPizzas}>Pizzas</button>
    </div>
        </div>
      <div className="res-container">
        {resData?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;