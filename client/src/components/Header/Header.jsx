import {
  faLocation,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import "./Header.css";
import Featured from "../Featured/Featured";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_SEARCH } from "../../Redux/searchSlice";
import useFetch from "../../hooks/useFetch";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

 

  const [initialDates, setInitialDates] = useState(false);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [selectoptions, setSelectOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  console.log(options);

  const handleClass = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSearch = (e) => {
    
    e.preventDefault();
    const search = {
      destination,
      date: {
        startDate: date[0].startDate.getTime(),
        endDate: date[0].endDate.getTime(),
        key: "selection",
      },
      options:{...options,selectedClass},
      location,
    };
    dispatch(SET_SEARCH(search));
    navigate("/hotels", { state: search });
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


  return (
    <div className="headerContainer">
      <NavBar />
      <div className="header">
        <div className="headerDetails">
          <div className="headerSearchItem">
            <span className="headerSearchText">From</span>
            <input
              className="headerSearchInput"
              placeholder="Thiruvananthapuram[trv]"
            />
          </div>
          <div className="headerSearchItem">
            <span className="headerSearchText">To</span>
            <input
              className="headerSearchInput"
              placeholder="country, city, or airport"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="headerSearchText">Location</span>
            <input
              className="headerSearchInput"
              placeholder="Choose destination"
              onChange={(e)=> setDestination(e.target.value)}
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUser} />
            <input
              className="headerSearchInput"
              placeholder="1 Adult"
              onClick={() => setSelectOptions(!selectoptions)}
            />
            {selectoptions && (
              <div className="options">
                <div className="optionItem">
                  <span>Adult</span>
                  <div className="optionCounter">
                    <div className="buttonsContainer">
                      <button
                        className="optionCounterButton"
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="OptionCountNumber">{options.adult}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="optionItem">
                  <span>Children</span>
                  <div className="optionCounter">
                    <div className="buttonsContainer">
                      <button
                        className="optionCounterButton"
                        disabled={options.children <= 1}
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="OptionCountNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="optionItem">
                  <span>Rooms</span>
                  <div className="optionCounter">
                    <div className="buttonsContainer">
                      <button
                        className="optionCounterButton"
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="OptionCountNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionTitle">Cabin Class: </span>
                  <select value={selectedClass} onChange={handleClass}>
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business class">Business class</option>
                    <option value="First class">First class</option>
                  </select>
                </div>
                <button className="optionsButton">APPLY</button>
              </div>
            )}
          </div>
          <div className="headerSearchDate">
            <span
              onClick={() => setInitialDates(!initialDates)}
              className="headerSearchDateText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {initialDates && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchButton" onClick={handleSearch}>
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
