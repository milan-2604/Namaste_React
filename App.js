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

//RestrauntCard Component
const RestrauntCard = (props) => {
  return (
    <div className="res-card">
      <img className="res-image" src={props.resImg} />
      <h3>{props.name}</h3>
      <h4 className="rating">{props.rating}</h4>
      <h4 className="cuisine">{props.cuisine}</h4>
      <h4 className="del-time">{props.delTime}</h4>
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
        <RestrauntCard
          name="Megna foods"
          resImg="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/500px-%22Hyderabadi_Dum_Biryani%22.jpg"
          rating="4.5 stars"
          cuisine="Biryani, North Indian, Asian"
          delTime="38 minutes"
        />
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
