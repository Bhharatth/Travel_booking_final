import React, { useEffect, useState } from "react";
import "./SingleHotelPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Availability from "../../components/Availability/Availability";

const SingleHotelPage = () => {
  const location = useLocation();
  const id = window.location.pathname.split("/")[2];
  
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const {date,options} = useSelector(state=> state.search);
  
  // const currentUser = null;

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  
  // console.log(data)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1Str, date2Str) {
    const startDateConvrted = new Date(date1Str);
    const endDateConvrted = new Date(date2Str);
    const date1 = new Date(startDateConvrted);
    const date2 = new Date(endDateConvrted);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(date.startDate, date.endDate)
  // console.log(days);

  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel]= useState(false);

  const navigate = useNavigate();

  const handleReserveClick = (e) => {
    if (user) {
    setOpenModel(true);
    } else {
      navigate("/login");
    }
  };
  const photos = [data.photos]

  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "i") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSlideNumber);
  };

  return (
    <div className="hotel">
     {loading ? "Loading...": (<div className="headingData">

      <div className="hotelImageSlider">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("i")}
            />

            <div className="silderWrapper">
              <img
                src={photos[sliderNumber]}
                alt=""
                className="sliderImg"
              />

              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          </div>
        )}
      </div>
      <div className="hotelDetails">
        <div className="hotelDesc">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="topDesc">
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="hotelLocation">{data.address}</span>
              <span className="hotelDistance">
                Excellent location – {data.desc} from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over ${data.cheapestPrice} at this property and get a free airport
                taxi
              </span>
            </div>
          </div>

          <div className="hotelImages">
            <div className="hotelMosaic">
              {photos.map((photo, i) => (
                <div className="HotelImage" key={i}>
                  <img onClick={() => handleOpen(i)} src={photo} alt="" />
                </div>
              ))}
            </div>
          </div>
          <h2 className="hotelHeading">{data.title}</h2>
          <p className="hotelDesc">
            {" "}
           {data.desc}
          </p>
        </div>
        <div className="hotelCheckout">
          <span>
            Located in the real heart of {data.city}, this property has an excellent
            location score of {data.rating && <span className="ratingContainer">{data.rating}</span>}!
          </span>
          <h1 className="price"> For {days} days, Total amount is: ${data.cheapestPrice * days}</h1>
          <button className="checkoutButton" onClick={handleReserveClick}>
            Reserve Now
          </button>
        </div>
      </div>

      
    </div>)}
    {openModel && <Availability setOpen={setOpenModel} hotelId={id}/>}
    </div>

  );
};

export default SingleHotelPage;
