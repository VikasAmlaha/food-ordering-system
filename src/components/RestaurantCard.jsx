import { RESTAURANT_IMG } from "../util/constant";


// This is a JavaScript object used for inline styling in React.
// Think of it as writing CSS, but inside JS code.



// "restaurantCardStyle" is the variable name.
// We will later pass this object to a JSX element as a "style" prop.

const restaurantCardStyle = {
  // The width of the card will be 400 pixels.
  width: "400px",
  // The background color of the card will be gray.
  backgroundColor: "gray",
  // Padding inside the card will be 0.5 rem (relative unit).
  padding: "0.5rem",
};

// 3️⃣ RestaurantCard Component
// - Takes a single restaurant object as "props"
// - Extracts data using destructuring
// - Displays restaurant details

const RestaurantCard = (props) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props?.resObj?.info;
  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "#eae8e8",
        padding: "0.8rem",
        borderRadius: "1rem",
        flexWrap: "wrap",
      }}
    >
      {console.log(restaurantCardStyle)}
      <div className="res-logo">
        <img
          alt="res-logo"
          height="100%"
          width="100%"
          src={
            RESTAURANT_IMG +
            cloudinaryImageId
          }
        />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{avgRatingString} rating</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;