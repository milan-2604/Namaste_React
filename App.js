import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Namaste React");

//using jsx which is html or xml like syntax
const jsxHeading = <h1 id="heading">Namaste React</h1>; //normal js engine cant understand this jsx syntax
//your bundler parcel has Babel which is transpiling this jsx syntax so it can be executed properly
//jsx=>Babel transpiles this into React.createElement=>ReactElement js object => HTMLElement(render)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);
