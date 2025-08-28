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

// 1️⃣ Mock Restaurant Data (Array of restaurant objects)
// Normally this would come from an API, but for learning we hardcode it here

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "485370",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_485370.JPG",
      locality: "Balkampet Road",
      areaName: "Ameerpet",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "434792",
      avgRatingString: "4.3",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/big-bowl-balkampet-road-ameerpet-rest485370",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "509004",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Kondapur",
      areaName: "Madhapur",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.1,
      parentId: "61955",
      avgRatingString: "4.1",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.2",
          ratingCount: "142",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/chinese-wok-kondapur-madhapur-rest509004",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "377795",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f69eca71-5564-4248-8d45-91d8b4d42218_377795.JPG",
      locality: "Divya sai enclave",
      areaName: "Jubilee Hills",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "5.7K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 02:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/pizza-hut-divya-sai-enclave-jubilee-hills-rest377795",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "454169",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/afb5bd29-b7b4-46ac-b581-9b4201fbc33a_454169.JPG",
      locality: "Dominos Pizza Hut",
      areaName: "Jubilee Hills",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "11633",
      avgRatingString: "4.2",
      totalRatingsString: "3.1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/olio-the-wood-fired-pizzeria-dominos-pizza-hut-jubilee-hills-rest454169",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "65768",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/015c35fe-11fb-4933-8051-9d50641f9f39_65768.jpg",
      locality: "Panjagutta",
      areaName: "Panjagutta",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "36K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "1.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/burger-king-panjagutta-rest65768",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "32124",
      name: "Natural Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/91b27b57-c6e6-4ffd-b88b-1acea7277a1f_32124.jpg",
      locality: " Sri Nagar Colony",
      areaName: "Sri Nagar Colony",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "2093",
      avgRatingString: "4.7",
      totalRatingsString: "47K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "10K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/natural-ice-cream-sri-nagar-colony-rest32124",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "17095",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4ace7dfa-2dd7-4d85-bf48-327cf19fa7c9_17095.JPG",
      locality: "Opp LV Prasad Eye Institute",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-28 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/kfc-opp-lv-prasad-eye-institute-banjara-hills-rest17095",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "68591",
      name: "Homely",
      cloudinaryImageId: "ul45t1h60hftkbida1vo",
      locality: "SR Nagar Main Rd",
      areaName: "Ameerpet",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis",
      ],
      avgRating: 4.2,
      parentId: "4043",
      avgRatingString: "4.2",
      totalRatingsString: "86K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "C",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/homely-sr-nagar-main-rd-ameerpet-rest68591",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

// 2️⃣ Header Component
// - Shows a logo
// - Shows navigation menu (Home, About, etc.)

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          alt="logo"
          height="100%"
          width="100%"
          // src="https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png"
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
      </div>
      <ul className="header-nav-items">
        <li className="header-nav-item">Home</li>
        <li className="header-nav-item">About Us</li>
        <li className="header-nav-item">Contact Us</li>
        <li className="header-nav-item">Cart</li>
      </ul>
    </div>
  );
};

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
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

// 4️⃣ Body Component
// - Contains search bar placeholder
// - Loops (maps) through resList and renders multiple RestaurantCards

const Body = () => {
  return (
    <div className="main-body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resObj={resList?.[0]} />
        <RestaurantCard resObj={resList?.[1]} />
        <RestaurantCard resObj={resList?.[2]} />
        <RestaurantCard resObj={resList?.[3]} />
        <RestaurantCard resObj={resList?.[4]} />
        <RestaurantCard resObj={resList?.[5]} />
        <RestaurantCard resObj={resList?.[6]} />
        <RestaurantCard resObj={resList?.[7]} /> */}
        {resList?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

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
