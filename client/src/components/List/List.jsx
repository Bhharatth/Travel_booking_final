import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

const List = ({ item }) => {
  console.log(item._id);
  return (
    <div className="searchResult">
      <div className="list">
        <div className="listContainer">
          <div className="imageContainer">
            {item.photos && <img src={item.photos} alt="" />}
          </div>
          <div className="hotelDetails">
            <span className="title">{item.name}</span>
            <span className="deistance">{item.distance}</span>
            <span className="freeAirportTaxi">free airport taxi</span>
            <span className="desc">{item.desc}</span>
            <span className="roomDesc">
              entire studio * bathroom * 21m 1 full bed
            </span>
            <span className="cancellation">Free Cancellation</span>
            <span>You can cancell later so lock this offer today</span>
          </div>
          <div className="details">
            {item.rating && <button className="rating">{item.rating}</button>}
            <span className="isRating">
              {item.rating < 3
                ? "Average"
                : item.rating < 4
                ? "Good"
                : "Excellent"}
            </span>
          </div>
          <div className="detailTexts">
            <span className="price">{item.cheapestPrice}</span>
            <div className="taxOption">Include Taxes</div>
            <Link to={`/hotels/${item._id}`} style={{ textDecoration: "none" }}>
              <button className="checkoutButton">See Availabilty</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
