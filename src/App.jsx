import Header from "./components/Header";
import Body from "./components/Body";


/**
 * App Structure (component tree)
 * 
 * AppLayout
 *   ├── Header
 *   │     ├── Logo
 *   │     └── Navigation Links
 *   ├── Body
 *   │     ├── Search (not functional yet, just placeholder)
 *   │     └── Restaurant Container
 *   │            └── RestaurantCard (repeated using map)
 *   └── Footer
 *          |-- Copyrights
 *          |-- Links
 *          |-- Address
 *          |-- Contacts
 */


// 5️⃣ Root Layout (Parent Component)
// - Combines Header + Body + Footer

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <h1>Footer</h1>
    </div>
  );
};

export default AppLayout;


















































































































// /**
//  * Header
//  *   - logo
//  *   - links
//  * Body
//  *   - search
//  *   - Restaurant Container
//  *       - Restaurant Card (img, name of res, star rating, cuisines)
//  * Footer
//  *   - copyrights
//  *   - Links
//  *   - Address
//  *   - contact
//  *
//  */

// /* 
// ----------------------------------------------------------
// 📌 Restaurant Object (dummy data)
// - Normally, this data would come from an API (like Swiggy API).
// - Here we hardcode 1 restaurant object for demo purposes.
// ----------------------------------------------------------
// */
// const resObj = {
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//   info: {
//     id: "485370",
//     name: "Big Bowl",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_485370.JPG",
//     locality: "Balkampet Road",
//     areaName: "Ameerpet",
//     costForTwo: "₹250 for two",
//     cuisines: ["Chinese", "Tibetan", "Desserts"],
//     avgRating: 4.3,
//     parentId: "434792",
//     avgRatingString: "4.3",
//     totalRatingsString: "2.9K+",
//     sla: {
//       deliveryTime: 54,
//       lastMileTravel: 3.9,
//       serviceability: "SERVICEABLE",
//       slaString: "50-60 mins",
//       lastMileTravelString: "3.9 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2025-08-26 23:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "ITEMS",
//       subHeader: "AT ₹129",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {
//     context: "seo-data-db869f69-9384-4a14-97f3-446ff1ca7cb9",
//   },
//   cta: {
//     link: "https://www.swiggy.com/city/hyderabad/big-bowl-balkampet-road-ameerpet-rest485370",
//     text: "RESTAURANT_MENU",
//     type: "WEBLINK",
//   },
//   widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
// };

// /* 
// ----------------------------------------------------------
// 📌 Header Component
// - Shows a logo + navigation links
// - This is like the top bar of Swiggy/Zomato apps
// ----------------------------------------------------------
// */

//  const Header = () => {
//    return (
//      <div className="header-container">
//        <div className="header-logo">
//          <img
//            alt="logo"
//            height="100%"
//            width="100%"
        
//            src="https://upload.wikimedia.org/wikipedia/commons/2/23/Foodlogo.svg"
//          />
//        </div>
//        <ul className="header-nav-items">
//            <li className="header-nav-item"><a href="#">HOME</a></li>
//          <li className="header-nav-item"><a href="#">ABOUT US</a></li>
//          <li className="header-nav-item"><a href="#">CONTACT US</a></li>
//          <li className="header-nav-item"><a href="#">CART</a></li>
//        </ul>
//      </div>
//    );
//  }

// /* 
// ----------------------------------------------------------
// 📌 RestaurantCard Component
// - Displays details of a single restaurant
// - Props are used here -> resObj is passed from parent
// - Uses destructuring to extract required fields
// ----------------------------------------------------------
// */
// const RestaurantCard = (props) => {
//   // Destructuring values from props
//   const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
//     props?.resObj?.info;

//   return (
//     <div
//       style={{
//         width: "400px",
//         backgroundColor: "#eae8e8",
//         padding: "0.8rem",
//         borderRadius: "1rem",
//       }}
//     >
//       {/* Restaurant Image */}
//       <div className="res-logo">
//         <img
//           alt="res-logo"
//           height="100%"
//           width="100%"
//           src={
//             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//             cloudinaryImageId
//           }
//         />
//       </div>

//       {/* Restaurant Info */}
//       <div>
//         <h3>{name}</h3>
//         <h4>{avgRatingString} ⭐ rating</h4>
//         <h4>{cuisines?.join(", ")}</h4>
//         <h4>{areaName}</h4>
//       </div>
//     </div>
//   );
// };

// /* 
// ----------------------------------------------------------
// 📌 Body Component
// - Contains search bar + restaurant container
// - Currently shows only 1 RestaurantCard
// - Later we can map over an array of restaurants
// ----------------------------------------------------------
// */
// const Body = () => {
//   return (
//     <div className="main-body">
//       <div className="search">🔍 Search</div>

//       <div className="res-container">
//         {/* Passing resObj as props */}
//         <RestaurantCard resObj={resObj} />
//       </div>
//     </div>
//   );
// };

// /* 
// ----------------------------------------------------------
// 📌 Footer Component
// - Added separately for clean structure
// ----------------------------------------------------------
// */
// const Footer = () => {
//   return (
//     <div className="footer">
//       <p>© 2025 Food Delivery App</p>
//       <p>Address: Amlaha, India</p>
//       <p>Contact: support@foodapp.com</p>
//     </div>
//   );
// };

// /* 
// ----------------------------------------------------------
// 📌 Main App Layout
// - Combines Header, Body, Footer
// - This is the root component exported to index.js
// ----------------------------------------------------------
// */
// const AppLayout = () => {
//   return (
//     <div>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// };

// // Export so index.js can import and render it
// export default AppLayout;
