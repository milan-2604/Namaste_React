import { useState } from "react";
import resObj from "../utils/resObj";
import RestrauntCard from "./RestrauntCard";
const Body = () => {
  const [filterRes, setFilterRes] = useState(false);
  const filteredData = filterRes
    ? resObj.cards.filter((data) => data.avgRating > 4.3)
    : resObj.cards;
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => setFilterRes(!filterRes)}>
          {filterRes ? "All Restraunts" : "Top Rated Restraunts"}
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((data) => (
          <RestrauntCard key={data.id} resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
