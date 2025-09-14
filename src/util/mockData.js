

// 1️⃣ Mock Restaurant Data (Array of restaurant objects)
// Normally this would come from an API, but for learning we hardcode it here
// export const resList = [
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "79746",
//             "name": "Domino's Pizza",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/3aaa8b89-a1b8-490f-b50e-ce61e19ffb04_79746.JPG",
//             "locality": "Habib Gunj",
//             "areaName": "Maharana Pratap Nagar",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Pizzas",
//                 "Italian",
//                 "Pastas",
//                 "Desserts"
//             ],
//             "avgRating": 4.4,
//             "parentId": "2456",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "2.9K+",
//             "sla": {
//                 "deliveryTime": 25,
//                 "lastMileTravel": 1.7,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20-25 mins",
//                 "lastMileTravelString": "1.7 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-30 23:59:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                         "description": "Delivery!"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "ITEMS",
//                 "subHeader": "AT ₹69"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "4.0",
//                     "ratingCount": "1.0K+"
//                 },
//                 "source": "GOOGLE",
//                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/dominos-pizza-habib-gunj-maharana-pratap-nagar-rest79746",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "920945",
//             "name": "Pizza Hut",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/88f24405-fc3b-48e5-8422-685b28757855_920945.JPG",
//             "locality": "New Market",
//             "areaName": "TT Nagar",
//             "costForTwo": "₹350 for two",
//             "cuisines": [
//                 "Pizzas"
//             ],
//             "avgRating": 4.3,
//             "parentId": "721",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "1.9K+",
//             "sla": {
//                 "deliveryTime": 27,
//                 "lastMileTravel": 4,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "4.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-31 05:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                         "description": "Delivery!"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "ITEMS",
//                 "subHeader": "AT ₹99"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "--"
//                 }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/pizza-hut-new-market-tt-nagar-rest920945",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "1100006",
//             "name": "KFC",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/96d0c566-94a5-4272-be69-59a101d9fe66_1100006.jpg",
//             "locality": "Sanjay nagar",
//             "areaName": "City Mall",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Burgers",
//                 "Fast Food",
//                 "Rolls & Wraps"
//             ],
//             "avgRating": 4.2,
//             "parentId": "547",
//             "avgRatingString": "4.2",
//             "totalRatingsString": "106",
//             "sla": {
//                 "deliveryTime": 18,
//                 "lastMileTravel": 0.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "15-20 mins",
//                 "lastMileTravelString": "0.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-31 02:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹999",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "isNewlyOnboarded": true,
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "--"
//                 }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/kfc-sanjay-nagar-city-mall-rest1100006",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "952001",
//             "name": "Burger Farm",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/83521b7b-d5ce-46e3-b699-e376cafe718d_952001.jpg",
//             "locality": "E4 ARERA COLONY",
//             "areaName": "E4 ARERA COLONY",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "American"
//             ],
//             "avgRating": 4.6,
//             "parentId": "4660",
//             "avgRatingString": "4.6",
//             "totalRatingsString": "743",
//             "sla": {
//                 "deliveryTime": 17,
//                 "lastMileTravel": 2.3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "15-20 mins",
//                 "lastMileTravelString": "2.3 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-31 03:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹150 OFF",
//                 "subHeader": "ABOVE ₹399",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "--"
//                 }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/burger-farm-e4-arera-colony-rest952001",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "968281",
//             "name": "Olio - The Wood Fired Pizzeria",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/4214d7a4-fc4e-4ca8-a823-3d90880acd46_968281.JPG",
//             "locality": "Raisen Road",
//             "areaName": "Govindpura",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "Pizzas",
//                 "Pastas",
//                 "Italian",
//                 "Fast Food",
//                 "Snacks",
//                 "Beverages",
//                 "Desserts"
//             ],
//             "avgRating": 4.4,
//             "parentId": "11633",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "622",
//             "sla": {
//                 "deliveryTime": 31,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "30-35 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-31 05:59:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "newg.png",
//                         "description": "Gourmet"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Gourmet",
//                                     "imageId": "newg.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "ITEMS",
//                 "subHeader": "AT ₹99"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "--"
//                 }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/olio-the-wood-fired-pizzeria-raisen-road-govindpura-rest968281",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "94606",
//             "name": "The Belgian Waffle Co.",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/e00351ad-b05d-41f4-8474-032510979376_94606.JPG",
//             "locality": "Maharana Pratap Nagar",
//             "areaName": "Maharana Pratap Nagar",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Waffle",
//                 "Desserts",
//                 "Ice Cream",
//                 "Beverages"
//             ],
//             "avgRating": 4.7,
//             "veg": true,
//             "parentId": "2233",
//             "avgRatingString": "4.7",
//             "totalRatingsString": "2.2K+",
//             "sla": {
//                 "deliveryTime": 30,
//                 "lastMileTravel": 0.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "0.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-30 23:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "20% OFF",
//                 "subHeader": "UPTO ₹50"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "3.9",
//                     "ratingCount": "88"
//                 },
//                 "source": "GOOGLE",
//                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/the-belgian-waffle-co-maharana-pratap-nagar-rest94606",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "84400",
//             "name": "Burger King",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7c067f62-8938-4abb-8937-272b77002c29_84400.jpg",
//             "locality": "Maharana Pratap Nagar",
//             "areaName": "MP Nagar",
//             "costForTwo": "₹350 for two",
//             "cuisines": [
//                 "Burgers",
//                 "American"
//             ],
//             "avgRating": 4.2,
//             "parentId": "166",
//             "avgRatingString": "4.2",
//             "totalRatingsString": "25K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 0.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20-25 mins",
//                 "lastMileTravelString": "0.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-31 03:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "android/static-assets/icons/big_rx.png",
//                         "description": "bolt!"
//                     },
//                     {
//                         "imageId": "Rxawards/_CATEGORY-Burger.png",
//                         "description": "Delivery!"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "bolt!",
//                                     "imageId": "android/static-assets/icons/big_rx.png"
//                                 }
//                             },
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "ITEMS",
//                 "subHeader": "AT ₹59"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "4.2",
//                     "ratingCount": "2.3K+"
//                 },
//                 "source": "GOOGLE",
//                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/burger-king-maharana-pratap-nagar-mp-nagar-rest84400",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//             "id": "348083",
//             "name": "Starbucks Coffee",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/c1c06093-a225-4565-9a24-3315bcf448d4_348083.JPG",
//             "locality": "Maharana Pratap Nagar",
//             "areaName": "Maharana Pratap Nagar",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Beverages",
//                 "Cafe",
//                 "Snacks",
//                 "Desserts",
//                 "Bakery",
//                 "Ice Cream"
//             ],
//             "avgRating": 4.3,
//             "parentId": "195515",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "783",
//             "sla": {
//                 "deliveryTime": 19,
//                 "lastMileTravel": 0.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "15-20 mins",
//                 "lastMileTravelString": "0.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2025-08-30 23:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "android/static-assets/icons/big_rx.png",
//                         "description": "bolt!"
//                     },
//                     {
//                         "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
//                         "description": "Delivery!"
//                     },
//                     {
//                         "imageId": "newg.png",
//                         "description": "Gourmet"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "bolt!",
//                                     "imageId": "android/static-assets/icons/big_rx.png"
//                                 }
//                             },
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
//                                 }
//                             },
//                             {
//                                 "attributes": {
//                                     "description": "Gourmet",
//                                     "imageId": "newg.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "20% OFF",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "4.2",
//                     "ratingCount": "669"
//                 },
//                 "source": "GOOGLE",
//                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//             "context": "seo-data-0da976cd-cc14-473d-84cc-48cdfbeb3240"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/city/bhopal/starbucks-coffee-maharana-pratap-nagar-rest348083",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "485370",
//       name: "Big Bowl",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_485370.JPG",
//       locality: "Balkampet Road",
//       areaName: "Ameerpet",
//       costForTwo: "₹250 for two",
//       cuisines: ["Chinese", "Tibetan", "Desserts"],
//       avgRating: 4.3,
//       parentId: "434792",
//       avgRatingString: "4.3",
//       totalRatingsString: "2.9K+",
//       sla: {
//         deliveryTime: 33,
//         lastMileTravel: 3.9,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "3.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-27 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹129",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/big-bowl-balkampet-road-ameerpet-rest485370",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "509004",
//       name: "Chinese Wok",
//       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
//       locality: "Kondapur",
//       areaName: "Madhapur",
//       costForTwo: "₹250 for two",
//       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
//       avgRating: 4.1,
//       parentId: "61955",
//       avgRatingString: "4.1",
//       totalRatingsString: "3.4K+",
//       sla: {
//         deliveryTime: 37,
//         lastMileTravel: 4.7,
//         serviceability: "SERVICEABLE",
//         slaString: "35-40 mins",
//         lastMileTravelString: "4.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-27 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹129",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "3.2",
//           ratingCount: "142",
//         },
//         source: "GOOGLE",
//         sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/chinese-wok-kondapur-madhapur-rest509004",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "377795",
//       name: "Pizza Hut",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f69eca71-5564-4248-8d45-91d8b4d42218_377795.JPG",
//       locality: "Divya sai enclave",
//       areaName: "Jubilee Hills",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 4.3,
//       parentId: "721",
//       avgRatingString: "4.3",
//       totalRatingsString: "5.7K+",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 0.3,
//         serviceability: "SERVICEABLE",
//         slaString: "15-20 mins",
//         lastMileTravelString: "0.3 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-28 02:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-Pizza.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-Pizza.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹99",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/pizza-hut-divya-sai-enclave-jubilee-hills-rest377795",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "454169",
//       name: "Olio - The Wood Fired Pizzeria",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/afb5bd29-b7b4-46ac-b581-9b4201fbc33a_454169.JPG",
//       locality: "Dominos Pizza Hut",
//       areaName: "Jubilee Hills",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "Pizzas",
//         "Pastas",
//         "Italian",
//         "Fast Food",
//         "Snacks",
//         "Beverages",
//         "Desserts",
//       ],
//       avgRating: 4.2,
//       parentId: "11633",
//       avgRatingString: "4.2",
//       totalRatingsString: "3.1K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 0.4,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "0.4 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-28 06:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "android/static-assets/icons/big_rx.png",
//             description: "bolt!",
//           },
//           {
//             imageId: "newg.png",
//             description: "Gourmet",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "bolt!",
//                   imageId: "android/static-assets/icons/big_rx.png",
//                 },
//               },
//               {
//                 attributes: {
//                   description: "Gourmet",
//                   imageId: "newg.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹99",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/olio-the-wood-fired-pizzeria-dominos-pizza-hut-jubilee-hills-rest454169",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "65768",
//       name: "Burger King",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/015c35fe-11fb-4933-8051-9d50641f9f39_65768.jpg",
//       locality: "Panjagutta",
//       areaName: "Panjagutta",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4.2,
//       parentId: "166",
//       avgRatingString: "4.2",
//       totalRatingsString: "36K+",
//       sla: {
//         deliveryTime: 32,
//         lastMileTravel: 4,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "4.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-28 00:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-Burger.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-Burger.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹59",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "4.4",
//           ratingCount: "1.2K+",
//         },
//         source: "GOOGLE",
//         sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/burger-king-panjagutta-rest65768",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "32124",
//       name: "Natural Ice Cream",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/91b27b57-c6e6-4ffd-b88b-1acea7277a1f_32124.jpg",
//       locality: " Sri Nagar Colony",
//       areaName: "Sri Nagar Colony",
//       costForTwo: "₹150 for two",
//       cuisines: ["Ice Cream", "Desserts"],
//       avgRating: 4.7,
//       veg: true,
//       parentId: "2093",
//       avgRatingString: "4.7",
//       totalRatingsString: "47K+",
//       sla: {
//         deliveryTime: 18,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "15-20 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-28 00:45:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "4.5",
//           ratingCount: "10K+",
//         },
//         source: "GOOGLE",
//         sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/natural-ice-cream-sri-nagar-colony-rest32124",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "17095",
//       name: "KFC",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4ace7dfa-2dd7-4d85-bf48-327cf19fa7c9_17095.JPG",
//       locality: "Opp LV Prasad Eye Institute",
//       areaName: "Banjara Hills",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
//       avgRating: 4.2,
//       parentId: "547",
//       avgRatingString: "4.2",
//       totalRatingsString: "27K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 2.8,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "2.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-28 00:45:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-Burger.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-Burger.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹69",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/kfc-opp-lv-prasad-eye-institute-banjara-hills-rest17095",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "68591",
//       name: "Homely",
//       cloudinaryImageId: "ul45t1h60hftkbida1vo",
//       locality: "SR Nagar Main Rd",
//       areaName: "Ameerpet",
//       costForTwo: "₹200 for two",
//       cuisines: [
//         "Home Food",
//         "South Indian",
//         "Beverages",
//         "Desserts",
//         "Thalis",
//       ],
//       avgRating: 4.2,
//       parentId: "4043",
//       avgRatingString: "4.2",
//       totalRatingsString: "86K+",
//       sla: {
//         deliveryTime: 48,
//         lastMileTravel: 2.9,
//         serviceability: "SERVICEABLE",
//         slaString: "45-50 mins",
//         lastMileTravelString: "2.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-27 23:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//             description: "OnlyOnSwiggy",
//           },
//         ],
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "C",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "OnlyOnSwiggy",
//                   imageId:
//                     "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹89",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-e5ac9b4f-f8e6-4f05-862d-6a6bb819103e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/homely-sr-nagar-main-rd-ameerpet-rest68591",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
// ];