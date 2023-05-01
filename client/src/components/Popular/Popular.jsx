import React from "react";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
     
      <div className="citiesTitle">
       <h2>Browse by Property type</h2>
      </div>
      <div className="cities">
        <img className="cityImg" src="https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        <div className="detailscontainer">
          <span className="title">Hotels</span>
          <span className="details">Flights * Hotels * car hire</span>
        </div>
      </div>
      <div className="cities">
        <img className="cityImg" src="https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <div className="detailscontainer">
          <span className="title">Apartments</span>
          <span className="details">Flights * Hotels * car hire</span>
        </div>
      </div>
      <div className="cities">
        <img className="cityImg" src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        <div className="detailscontainer">
          <span className="title">Resort</span>
          <span className="details">Flights * Hotels * car hire</span>
        </div>
      </div>
      <div className="cities">
        <img className="cityImg" src="https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        <div className="detailscontainer">
          <span className="title">Villas</span>
          <span className="details">Flights * Hotels * car hire</span>
        </div>
      </div>
      <div className="cities">
        <img className="cityImg" src="https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        <div className="detailscontainer">
          <span className="title">Cabins</span>
          <span className="details">Flights * Hotels * car hire</span>
        </div>
      </div>
     
      
    </div>
  );
};

export default Popular;
