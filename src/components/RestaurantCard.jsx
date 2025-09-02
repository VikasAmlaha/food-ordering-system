import { RESTAURANT_IMG } from "../util/constant";

const RestaurantCard = (props) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props?.resObj?.info;

  return (
    <div
      style={{
        width: "350px",
        backgroundColor: "#ffffff",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        margin: "1rem"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="res-logo">
        <img
          alt="res-logo"
          height="200px"
          width="100%"
          style={{
            borderRadius: "0.8rem",
            objectFit: "cover",
          }}
          src={RESTAURANT_IMG + cloudinaryImageId}
        />
      </div>
      <div style={{ marginTop: "0.8rem" }}>
        <h3 style={{ margin: "0", fontSize: "1.2rem" }}>{name}</h3>
        <p style={{ margin: "0.2rem 0", color: "#555" }}>
          ⭐ {avgRatingString} | {cuisines?.join(", ")}
        </p>
        <p style={{ margin: "0.2rem 0", color: "#777" }}>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;



// import { RESTAURANT_IMG } from "../util/constant";


// // 3️⃣ RestaurantCard Component
// // - Takes a single restaurant object as "props"
// // - Extracts data using destructuring
// // - Displays restaurant details

// const RestaurantCard = (props) => {
//   const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
//     props?.resObj?.info;
//   return (
//     <div
//       style={{
//         width: "400px",
//         backgroundColor: "#eae8e8",
//         padding: "0.8rem",
//         borderRadius: "1rem",
//         flexWrap: "wrap",
        
//       }}
//     >
//       <div className="res-logo">
//         <img
//           alt="res-logo"
//           height="100%"
//           width="100%"
//           src={
//             RESTAURANT_IMG +
//             cloudinaryImageId
//           }
//         />
//       </div>
//       <div>
//         <h3>{name}</h3>
//         <h4>{avgRatingString} rating</h4>
//         <h4>{cuisines?.join(", ")}</h4>
//         <h4>{areaName}</h4>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;