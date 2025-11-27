import React from "react";
import ReactDOM from "react-dom/client";

/*
-Header
 -Logo
 -NavItems
-Body
 -Search
 -RestrauntContainer
  -RestrauntCard
   -Img
   -Name of res, Star Rating, Cuisine, Delivery Time
-Footer
 -Copyright
 -Links
 -Adress
 -Contact
*/

//Header Component
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/en/6/6a/Ashleylogo.png?20230129125245"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Res obj // Mock data simulating multiple restaurant cards
const resObj = 
 {
  cards: [
    {
      id: "611642",
      name: "Biriyani Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/a1363779-f4d5-4af6-af29-8b16f200ff1e_68781.jpg",
      areaName: "AMC Road",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Chinese", "Beverages"],
      avgRating: 4.3,
      totalRatingsString: "232",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        slaString: "25-30 mins",
      },
      isOpen: true,
      ctaLink: "https://www.swiggy.com/restaurants/biriyani-hut-611642",
    },
    {
      id: "612345",
      name: "Pizza Paradise",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/05/pizza-paradise-12345.jpg",
      areaName: "City Center",
      costForTwo: "₹400 for two",
      cuisines: ["Italian", "Pizza", "Fast Food"],
      avgRating: 4.6,
      totalRatingsString: "510",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        slaString: "28-33 mins",
      },
      isOpen: true,
      ctaLink: "https://www.swiggy.com/restaurants/pizza-paradise-612345",
    },
    {
      id: "613456",
      name: "Sushi Express",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/12/sushi-express-613456.jpg",
      areaName: "Tech Park",
      costForTwo: "₹600 for two",
      cuisines: ["Japanese", "Sushi", "Seafood"],
      avgRating: 4.8,
      totalRatingsString: "128",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.2,
        slaString: "33-38 mins",
      },
      isOpen: true,
      ctaLink: "https://www.swiggy.com/restaurants/sushi-express-613456",
    },
    {
      id: "614567",
      name: "Green Salad Corner",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/09/18/green-salad-corner-614567.jpg",
      areaName: "Market Street",
      costForTwo: "₹200 for two",
      cuisines: ["Salads", "Healthy Food", "Wraps"],
      avgRating: 4.2,
      totalRatingsString: "87",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        slaString: "18-22 mins",
      },
      isOpen: true,
      ctaLink: "https://www.swiggy.com/restaurants/green-salad-corner-614567",
    },
  ],
};

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";


//RestrauntCard Component
const RestrauntCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
          CDN_URL +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.name}</h3>
      <h4 className="rating">{resData.avgRating}</h4>
      <h4 className="cuisine">{resData.cuisines.join()}</h4>
      <h4 className="del-time">{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* RestrauntCard */}
        {/* <RestrauntCard resData={resObj} /> */}
        {resObj.cards.map((data)=>(
          <RestrauntCard key={data.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
