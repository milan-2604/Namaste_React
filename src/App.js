import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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