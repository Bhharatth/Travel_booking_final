import {
  faEarthAfrica,
  faHotel,
  faTag,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=france,londen,NewYork"
  );

  return (
    <div className="featured">
      {loading ? (
        "loading.."
      ) : (
        <>
          <div className="featuredContainer">
            <div className="FeaturedBox">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
                className="featuredImg"
              />
              <div className="logoContainer">
                <span className="features">Frace</span>
                <span className="features bottom">
                  {data?.counts?.[0]} Properties
                </span>
              </div>
            </div>
            <div className="FeaturedBox">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
                className="featuredImg"
              />
              <div className="logoContainer">
                <FontAwesomeIcon icon={faHotel} className="icon" />
                <span className="features">London</span>
                <span className="features bottom">
                  {data?.counts?.[1]} Properties
                </span>
              </div>
            </div>
            <div className="FeaturedBox">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                alt=""
                className="featuredImg"
              />
              <div className="logoContainer">
                <FontAwesomeIcon icon={faHotel} className="icon" />
                <span className="features">New York</span>
                <span className="features bottom">
                  {data?.counts?.[2]} Properties
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
