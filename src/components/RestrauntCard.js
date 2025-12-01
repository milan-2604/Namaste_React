import { CDN_URL } from "../utils/constants";
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
      <h4 className="rating">{resData.avgRating}⭐</h4>
      <h4 className="cuisine">{resData.cuisines.join()}</h4>
      <h4 className="cost-for-two">{resData.costForTwo}</h4>
      <h4 className="del-time">{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestrauntCard;