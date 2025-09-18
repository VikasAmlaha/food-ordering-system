// ✅ Import React hooks and other dependencies
import { useEffect, useState } from "react";
import { RESTAURANT_API, RESTAURANT_IMG } from "../util/constant"; 
import RestaurantSkeleton from "./RestaurantSkeleton";
import { useParams } from "react-router";

// Swiggy’s API uses these special strings to mark menu categories.
// These help us filter out the correct parts of the API response.
const ItemCategory =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const NestedItemCategory =
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";


// ----------------------------------------------------
// ✅ MAIN COMPONENT: This shows the restaurant and menu
// ----------------------------------------------------
const RestaurantsPage = () => {
  // State variables
  const [restaurantData, setRestaurantData] = useState([]);     // stores whole restaurant info (name, details, etc.)
  const [restaurantItems, setRestaurantItems] = useState([]);   // stores only the menu categories (starters, mains, etc.)
  const [loading, setLoading] = useState(true);                 // whether we’re still fetching data
  const { resId } = useParams();
  console.log(resId);

  // -------------------------------
  // ✅ Function to fetch API data
  // -------------------------------
  const getRestaurantData = async (restaurantId = "") => {
    try {
      setLoading(true); // show loading spinner

      // fetch JSON data from API
      const response = await fetch(RESTAURANT_API + resId);
      const json = await response.json();

      // ⚡ Debug line (can pause in browser dev tools)
      // debugger;

      // -------------------------------
      // ✅ Extract menu categories step by step
      // -------------------------------

      // STEP 1: Find the card that contains REGULAR.cards (menu data)
      let filteredRestaurantItems = json?.data?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length
      );

      // STEP 2: Actually extract those REGULAR.cards
      filteredRestaurantItems =
        filteredRestaurantItems?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      // STEP 3: From all those cards, keep only ItemCategory / NestedItemCategory
      filteredRestaurantItems = filteredRestaurantItems?.filter((item) =>
        [ItemCategory, NestedItemCategory]?.includes(
          item?.card?.card?.["@type"]
        )
      );

      // STEP 4: Save into React state
      setRestaurantItems(filteredRestaurantItems); // menu categories
      setRestaurantData(json?.data);               // full restaurant info
    } catch (e) {
      console.error(e); // error handling
    } finally {
      setLoading(false); // hide loading spinner
    }
  };

  // ------------------------------------
  // ✅ Run API fetch once when page loads
  // ------------------------------------
  useEffect(() => {
    getRestaurantData();
  }, []);

  // Debug log (helps us inspect)
  console.log(restaurantItems);

  // ------------------------------------
  // ✅ Loading state
  // ------------------------------------
  if (loading) return <RestaurantSkeleton />;

  // ------------------------------------
  // ✅ UI rendering once data is loaded
  // ------------------------------------
  return (
    <div>
      {/* Restaurant title (from API’s first card) */}
      <h1>{restaurantData?.cards?.[0]?.card?.card?.text}</h1>

      <div style={{ padding: "1rem" }}>
        {/* Loop through each menu category */}
        {restaurantItems?.map((restaurant, index) => {
          
          // Case 1: If it’s a simple ItemCategory (like "Starters")
          if (restaurant?.card?.card?.["@type"] === ItemCategory) {
            return (
              <RestaurantAccordion
                key={`${restaurant?.card?.card?.title}-${index}`}
                data={restaurant?.card?.card}
              />
            );
          }

          // Case 2: If it’s a NestedItemCategory (like "Combos" with subcategories)
          if (restaurant?.card?.card?.["@type"] === NestedItemCategory) {
            return (
              <div style={{ margin: "2rem 0" }}>
                {/* Show section title */}
                <h2>{restaurant?.card?.card?.title}</h2>

                {/* Loop through subcategories */}
                {restaurant?.card?.card?.categories?.map((restaurant) => (
                  <RestaurantAccordion
                    key={`${restaurant?.title}-${index}`}
                    data={restaurant}
                  />
                ))}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};


// ----------------------------------------------------
// ✅ ACCORDION COMPONENT (expand/collapse menu sections)
// ----------------------------------------------------
const RestaurantAccordion = (props) => {
  const { title, itemCards } = props?.data; // destructure props
  const [viewAccordion, setViewAccordion] = useState(false); // accordion open/close

  const handleAccordion = () => {
    setViewAccordion((prev) => !prev); // toggle accordion
  };

  return (
    <div className="accordion-wrapper">
      {/* Accordion Header (clickable button) */}
      <button className="accordion-header" onClick={handleAccordion}>
        <div className="accordion-header--title">
          {title} ({itemCards?.length})
        </div>
        <div className="accordion-header--action-icon">{viewAccordion ? "▲": "▼"}</div>
      </button>

      {/* Accordion Panel (only visible if open) */}
      <div className={`accordion-panel-${viewAccordion ? "view" : "none"}`}>
        {itemCards?.map((item, index) => (
          <RestaurantMenuView
            key={`${title}-${item?.card?.info?.name}-${index}`}
            menuData={item?.card}
          />
        ))}
      </div>
    </div>
  );
};


// ----------------------------------------------------
// ✅ MENU ITEM COMPONENT (single dish details)
// ----------------------------------------------------
const RestaurantMenuView = (props) => {
  // destructure details from menuData
  const { name, price, offerTags, description, imageId } =
    props?.menuData?.info;

  return (
    <div className="restaurant-menu-card">
      <div>
        <div>{name}</div>
        <div>
          {/* price is in paise, so divide by 100 */}
          {price / 100} {offerTags?.[0]?.title} {offerTags?.[0]?.subTitle}
        </div>
        <div>{description}</div>
      </div>

      {/* Dish image (if available) */}
      <div className="restaurant-menu-img-container">
        {imageId ? (
          <img
            height="100%"
            width="100%"
            src={RESTAURANT_IMG + imageId}
            alt={name}
          />
        ) : (
          <div>Add</div>
        )}
      </div>
    </div>
  )
};

export default RestaurantsPage;










































































// import { useEffect, useState } from "react";
// import { RESTAURANT_API, RESTAURANT_IMG } from "../util/constant";
// import RestaurantSkeleton from "./RestaurantSkeleton";

// const ItemCategory =
//     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    
// const NestedItemCategory =
//     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

// const RestaurantPage = () => {
//     const [restaurantData, setRestaurantData] = useState([]);
//     const [restaurantItems, setRestaurantItems] = useState([]);
//     const [loading, setLoading] = useState(true);
    
    
//     const getRestaurantData = async (restaurntId = "") => {
//         try{
//             setLoading(true);
//             const response = await fetch(RESTAURANT_API);
//             const json = await response.json();
//             debugger;

//             let filteredRestaurantItems = json?.data?.cards?.find(
//             (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length
//             );

//             filteredRestaurantItems = 
//                 filteredRestaurantItems?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        
//             filteredRestaurantItems = filteredRestaurantItems?.filter((item) =>
//                 [ItemCategory, NestedItemCategory]?.includes(
//                 item?.card?.card?.["@type"]
//                 )
//             );

//             setRestaurantItems(filteredRestaurantItems);
//             setRestaurantData(json?.data);
//         } catch (e) {
//             console.error(e);
//         } finally {
//             setLoading(false);
//         }

//     };
//     useEffect(() => {
//         getRestaurantData();
//     }, []);

//     console.log(restaurantItems);

//     if (loading) return <RestaurantSkeleton />;

//     return (
//         <div>
//             <h1>Restaurant Page</h1>
//         </div>
//     );
// };


// export default RestaurantPage;