import {
  faHotel,
  faJetFighter,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./IconMenu.css";

const IconMenu = () => {
  return (
    <div className="iconMenu">
      <div className="menuItems">
        <FontAwesomeIcon icon={faJetFighter} />
        Flights
      </div>
      <div className="menuItems">
        {" "}
        <FontAwesomeIcon icon={faHotel} />
        Hotels
      </div>
      <div className="menuItems">
        {" "}
        <FontAwesomeIcon icon={faTaxi} />
        Car hire
      </div>
    </div>
  );
};

export default IconMenu;
