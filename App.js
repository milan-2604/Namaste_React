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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Foodlogo.svg/1027px-Foodlogo.svg.png"
        width={100}
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

const AppLayout = () => {
  return (
    <div id="app">
      {/* Header */}
      <Header />
      {/* Body */}
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
