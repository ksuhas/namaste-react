
import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://cdn.pixabay.com/photo/2020/10/24/06/36/burger-5680639_960_720.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props)=>{
    const {resObj} = props;
    const {name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId} = resObj?.data;
    return(
        <div className='res-card' style={styleCard}>
            <img className="res-logo" alt="res-logo"src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoString}</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
}

const Body = ()=>{
    return(
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            {
                resList.map((restaurant)=><RestaurantCard key={restaurant.data.id} resObj={restaurant}/>)
            }
        </div>
    </div>
    );
}

const resList = [
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "705056",
                "name": "Reddy'S Restaurant",
                "uuid": "531480fc-2f94-4e10-aac6-ee56a88831ff",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "f34657e4f398eec0e714971b58f8be69",
                "cuisines": [
                    "Indian",
                    "Chinese",
                    "Biryani",
                    "Tandoor"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 37,
                "minDeliveryTime": 37,
                "maxDeliveryTime": 37,
                "slaString": "37 MINS",
                "lastMileTravel": 4.599999904632568,
                "slugs": {
                    "restaurant": "reddy's-restaurant-hadapsar-hadapsar-2",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "Pune solapur road kavadipath Toll Planza,  Kadamwak Wasti, Haveli, Pune,  Maharashtra - 412201",
                "locality": "Pune solapur road",
                "parentId": 168590,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 4400,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 4400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4400",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6713708~p=1~eid=00000188-0fbe-4a2c-47e8-f5f800820139",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "705056",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "lastMileTravel": 4.599999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.5",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "589552",
                "name": "HOTEL MUKTAI",
                "uuid": "11101bd0-aaaa-46db-8704-77f9e606020e",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "jaarkzrfsmhqge9y8igv",
                "cuisines": [
                    "Tandoor",
                    "Chinese"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "slaString": "35 MINS",
                "lastMileTravel": 1.2999999523162842,
                "slugs": {
                    "restaurant": "hotel-muktai-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "PUNE SOLAPUR ROAD, OPP,AXIS BANKLONI KALBHOR,HAVELI- SOUTH OF MUTHA RIVER, PUNE PMC & RURAL,MAHARASHTRA-412201",
                "locality": "Pune-Solapur Road",
                "parentId": 352678,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3200,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.2 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "589552",
                    "deliveryTime": 35,
                    "minDeliveryTime": 35,
                    "maxDeliveryTime": 35,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "395286",
                "name": "McDonald's Gourmet Burger Collection",
                "uuid": "a3d61b80-7b1e-41aa-a481-f5e1e8585585",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "o04tza9tnwncyzqwe6ti",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "tags": [],
                "costForTwo": 60000,
                "costForTwoString": "₹600 FOR TWO",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "slaString": "32 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                    "restaurant": "mcdonalds-gourmet-burger-collection-pune-loni-kalbhor-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "Hardcastle Restaurants Pvt.Ltd  McDonald's Family Restaurants, M/s. Sanjay Service Station, HPCL Oil Trrminal,Loni Village",
                "locality": "Sanjay Service Station",
                "parentId": 10761,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3200,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "395286",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 20,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "25864",
                "name": "Shokeen Rolls",
                "uuid": "d4bdd418-462c-44d9-9230-d8a94c8a8f7f",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "2e9622936db2040007a05e681c347fa6",
                "cuisines": [
                    "Beverages",
                    "Snacks"
                ],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 47,
                "minDeliveryTime": 47,
                "maxDeliveryTime": 47,
                "slaString": "47 MINS",
                "lastMileTravel": 8.300000190734863,
                "slugs": {
                    "restaurant": "shokeen-rolls-kharadi-kharadi",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "Shop Number B 1 Maniratna Aangan Indraprastha Society Manjri Road Pune Maharashtra 411028",
                "locality": "Manjari Road",
                "parentId": 4261,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                        {
                            "meta": "30% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "30% off up to ₹75 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "30% off up to ₹75 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 7200,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 7200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "7200",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6671015~p=4~eid=00000188-0fbe-4a2c-47e8-f5f900820402",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "8.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "25864",
                    "deliveryTime": 47,
                    "minDeliveryTime": 47,
                    "maxDeliveryTime": 47,
                    "lastMileTravel": 8.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "489277",
                "name": "Domino's Pizza",
                "uuid": "bf39b3c1-eaa1-4933-b160-31af0ca58a77",
                "city": "6",
                "area": "Pune-Solapur Road",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "fd16mlf28efapjf0xn8a",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 0,
                "slugs": {
                    "restaurant": "dominos-pizza-loni-kalbhor-warje",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "Ground Floor, Shop No. 1, 2, 3, 4 & 5, Plot No. 1, Survey No. 25, Gat No. 255, Hissa No. 2 & 3, Maujhe Loni Kalbhor, Nalini Pride, Kadamvak Vasti, Pune 412201, Maharashtra",
                "locality": "Loni Kalbhor",
                "parentId": 2456,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3200,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "hasSurge": false,
                "sla": {
                    "restaurantId": "489277",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 0,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 100,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "693156",
                "name": "Zaika Restaurant",
                "uuid": "06dbd9d1-2435-47fa-8316-ad6660112c76",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "dc5264445465769eac73535cb6006a1a",
                "cuisines": [
                    "Chinese",
                    "Thalis",
                    "North Indian",
                    "Andhra",
                    "Biryani",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "slaString": "42 MINS",
                "lastMileTravel": 3,
                "slugs": {
                    "restaurant": "zaika-restaurant-hadapsar-hadapsar-2",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "DISTRICT PUNE NEAR BALAJI TOWER LONI KALBHOR PUNE-412201, Haveli- South of Mutha River, Pune, Maharashtra - 412201",
                "locality": "Haveli- South Of Mutha River",
                "parentId": 21889,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "693156",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "697143",
                "name": "Rewar Park",
                "uuid": "cf5e018a-f9d2-4d34-b40b-8cb68e032b70",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "db397a651c715c851eb86318838bf5df",
                "cuisines": [
                    "Chinese",
                    "Indian",
                    "Biryani"
                ],
                "tags": [],
                "costForTwo": 39900,
                "costForTwoString": "₹399 FOR TWO",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "slaString": "42 MINS",
                "lastMileTravel": 3,
                "slugs": {
                    "restaurant": "rewar-park-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "DISTRICT PUNE NEAR SAGAR BEER SHOP LONI KALBHOR PUNE-412201, Haveli- South of Mutha River, Pune, Maharashtra - 412201",
                "locality": "South of Mutha River",
                "parentId": 288125,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "697143",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "616963",
                "name": "Adi's kitechen",
                "uuid": "24de32e1-73f6-4353-be9e-4e51436bd25e",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "nr4nojrr19goeika2be5",
                "cuisines": [
                    "Biryani",
                    "Indian"
                ],
                "tags": [],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 0,
                "slugs": {
                    "restaurant": "adi's-kitechen-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "WING-C, FOUR AVENUES, ???? ??????, ?????????? 412201, India",
                "locality": "Loni Kalbhor",
                "parentId": 367742,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3200,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "hasSurge": false,
                "sla": {
                    "restaurantId": "616963",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 0,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "470115",
                "name": "Grand 11 Restaurant and Lounge",
                "uuid": "c5b4ef19-8751-423d-b97a-bf7f7c1b4ec0",
                "city": "6",
                "area": "Pune-Solapur Road",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "mvub1fupb3kd9rdu6fon",
                "cuisines": [
                    "Indian",
                    "Fast Food",
                    "Pizzas",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "slaString": "42 MINS",
                "lastMileTravel": 3,
                "slugs": {
                    "restaurant": "grand-11-restaurant-and-loungh-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "M.No.2/0242,G.No.242,Solapur Road,Kadamwak Wasti,Pune 412201",
                "locality": "Kadam Wak Wasti",
                "parentId": 282374,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "470115",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 20,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "697139",
                "name": "Special Zaika",
                "uuid": "74131e0f-2b0c-420a-964a-d592629105b8",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "f46cc9172c791dc5dfc7f7857a59daf7",
                "cuisines": [
                    "Indian",
                    "Chinese",
                    "Tandoor",
                    "Thalis"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "slaString": "42 MINS",
                "lastMileTravel": 3,
                "slugs": {
                    "restaurant": "special-zaika-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "DISTRICT PUNE NEAR SAGAR BEER SHOP LONI KALBHOR PUNE-412201, Haveli- South of Mutha River, Pune, Maharashtra - 412201",
                "locality": "South of Mutha River",
                "parentId": 341620,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "697139",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "696755",
                "name": "Shamiyana",
                "uuid": "b7dc0585-3807-472f-8d88-85cb7d479a29",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "d3c913db73da7b0732aef21c3f9fcb45",
                "cuisines": [
                    "Indian",
                    "South Indian",
                    "Thalis",
                    "Chinese",
                    "Biryani",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 3,
                "slugs": {
                    "restaurant": "shamiyana-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "DISTRICT PUNE NEAR SAGAR BEER SHOP LONI KALBHOR PUNE-412201, Haveli- South of Mutha River, Pune, Maharashtra - 412201",
                "locality": "South Of Mutha River",
                "parentId": 181523,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "696755",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "697138",
                "name": "Lakhnawi Zaika",
                "uuid": "e12af474-deee-412c-8273-ee94436c1a08",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "f46cc9172c791dc5dfc7f7857a59daf7",
                "cuisines": [
                    "Indian",
                    "Lucknowi",
                    "Chinese",
                    "Biryani",
                    "Thalis"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 41,
                "minDeliveryTime": 41,
                "maxDeliveryTime": 41,
                "slaString": "41 MINS",
                "lastMileTravel": 3,
                "slugs": {
                    "restaurant": "lakhnawi-zaika-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "DISTRICT PUNE NEAR SAGAR BEER SHOP LONI KALBHOR PUNE-412201, Haveli- South of Mutha River, Pune, Maharashtra - 412201",
                "locality": "South of Mutha River",
                "parentId": 123054,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off on all orders",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "697138",
                    "deliveryTime": 41,
                    "minDeliveryTime": 41,
                    "maxDeliveryTime": 41,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "707488",
                "name": "Hotel Shivshahi Branch No.2",
                "uuid": "17f93976-77a2-433f-b2bc-19b1037b114e",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "430f624c9a33c96632bf734c75f1c92b",
                "cuisines": [
                    "Indian",
                    "Chinese",
                    "Biryani",
                    "Snacks",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 50,
                "minDeliveryTime": 50,
                "maxDeliveryTime": 50,
                "slaString": "50 MINS",
                "lastMileTravel": 5,
                "slugs": {
                    "restaurant": "hotel-shivshahi-branch-no.2-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "255/1, Manjari Farm SLP RD Manjari BK, TAL HAVELI, opp. OMKAR ENTERPRISIS AND HARDWARE, near GOVIND LODGE, Manjari Farm, Pune, Maharashtra 412307, India",
                "locality": "OMKAR ENTERPRISIS AND HARDWARE",
                "parentId": 423004,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 5000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "707488",
                    "deliveryTime": 50,
                    "minDeliveryTime": 50,
                    "maxDeliveryTime": 50,
                    "lastMileTravel": 5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": true
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "616075",
                "name": "Shivansh Chinese center and Biryani House",
                "uuid": "3e5bb1c1-c521-4f82-8de0-525ebe59f985",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "bplrce1wlkqfmap5tpl4",
                "cuisines": [
                    "Chinese",
                    "Biryani"
                ],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 49,
                "minDeliveryTime": 49,
                "maxDeliveryTime": 49,
                "slaString": "49 MINS",
                "lastMileTravel": 6,
                "slugs": {
                    "restaurant": "shivansh-chinese-center-and-biryani-house-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "Manjari Farm Sitai, Hake Nagar, Maharashtra 412307, India",
                "locality": "Hake Nagar",
                "parentId": 367370,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 5600,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5600",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "6 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "616075",
                    "deliveryTime": 49,
                    "minDeliveryTime": 49,
                    "maxDeliveryTime": 49,
                    "lastMileTravel": 6,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "IT_IS_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 20,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "379132",
                "name": "Rubaab Multicuisine family restaurant and bar",
                "uuid": "c665def9-f7fd-4736-9c30-b4ef7bd291ab",
                "city": "6",
                "area": "Hadapsar",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "linsxgqntmlezfqlogyj",
                "cuisines": [
                    "Indian",
                    "Seafood",
                    "Chinese"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 49,
                "minDeliveryTime": 49,
                "maxDeliveryTime": 49,
                "slaString": "49 MINS",
                "lastMileTravel": 6.099999904632568,
                "slugs": {
                    "restaurant": "rubaab-multicuisine-family-restaurant-and-bar-hadapsar-hadapsar",
                    "city": "pune"
                },
                "cityState": "6",
                "address": "LOCATED AT SR.NO.36/2B/2B/2, MILKAT NO.6/0313/2, MANJARI BK., Haveli- South of Mutha River, Pune PMC & Rural, Maharashtra 412307",
                "locality": "Pune-Solapur Road",
                "parentId": 172847,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 5600,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5600",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "6 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "379132",
                    "deliveryTime": 49,
                    "minDeliveryTime": 49,
                    "maxDeliveryTime": 49,
                    "lastMileTravel": 6.099999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "IT_IS_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 100,
                "new": false
            },
            "subtype": "basic"
        }
]

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);