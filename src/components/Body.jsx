import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";


// 4️⃣ Body Component
// - Contains search bar placeholder
// - Loops (maps) through resList and renders multiple RestaurantCards

const Body = () => {
  return (
    <div className="main-body">
      <div className="search">Search</div>
      <div className="res-container">
      
        {resList?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;