import React, { useState } from "react";
import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, eror } = useFetch("/hotels?featured=true&limit=4");
  console.log(data);

  const getRatingText = (rating) => {
    if (rating < 3) {
      return "Poor";
    } else if (rating >= 3 && rating < 4) {
      return "Good";
    } else if (rating >= 4) {
      return "Excellent";
    } else {
      return "";
    }
  };

  return (
    <div className="featured">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="featuredBox" key={item._id}>
              <div className="imgContainer">
                <img src={item.photos} alt="" className="fpImg" />
              </div>
              <div className="detailsContainer">
                <span className="title" style={{ color: "#ffcc55" }}>
                  {item.title}
                </span>
                <span className="city">{item.city}</span>
                <span className="price">starting from $120</span>
                <div className="rating">
                  {item.rating && (
                    <div className="ratingNumber">{item.rating}</div>
                  )}
                  <span>{getRatingText(item.rating)}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
