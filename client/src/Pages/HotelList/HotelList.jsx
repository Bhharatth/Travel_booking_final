import React, { useState } from "react";
import "./HotelList.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { RESET_SEARCH, SET_SEARCH } from "../../Redux/searchSlice";

const HotelList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);


  const searchDetails = useSelector(state=> state.search);
  console.log(searchDetails);

  
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${searchDetails.destination}&min=${min || 0 }&max=${max || 999}`
  );
  const handleClick=()=> {
    reFetch();
  }
  

  const [options,setOptions] = useState({ adult: '', children: '', room: '' });
  function handleInputChange(event, inputName) {
    setOptions({
      ...options, // spread the existing formValues object
      [inputName]: event.target.value // update the specified input's value
    });
  }


  
  const {location} = useLocation();
  const [destination, setDestination] = useState(location);
    const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);



  
  const [selectedClass, setSelectedClass] = useState("Economy");
 
 

  const handleClass = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = {
      destination,
      date: {
        startDate: date[0].startDate.toISOString(),
        endDate: date[0].endDate.toISOString(),
        key: "selection",
      },
      options:{...options,selectedClass},
      location,
    };
    dispatch(SET_SEARCH(search));
    
  };
  const handleReset=()=> {

    dispatch(RESET_SEARCH())

  }


  return (
    <div className="hotelList">
      <NavBar />
      <div className="listWrapper">
        <div className="hotelSearch">
          <div className="searchContainer">
            <div className="destination">
              <span >Destination</span>
              <input className="Destinationsearch" type="text" onChange={(e)=> setDestination(e.target.value)} />
            </div>

            <div className="checkInDate" >
              <span className="checkInDateTitle">Check in Date</span>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchDateText"
              >Check in Date:{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
          </div>

          <div className="searchOptions">
            <span>Options</span>
            
            <div className="option">
              <span className="optionTitle" >Min price per night</span>
              <input type="text" className="inputOptions" onClick={(e)=> setMin(e.target.value)}/>
            </div>
            <div className="option">
              <span className="optionTitle" >Max price per night</span>
              <input type="text" className="inputOptions"  onClick={(e)=> setMin(e.target.value)}/>
            </div>
            <div className="option">
              <span className="optionTitle"  >Adult</span>
              <input type="text" className="inputOptions" value={options.adult} onChange={(e) => handleInputChange(e, 'adult')} />
            </div>
            <div className="option">
              <span className="optionTitle"  >Childern</span>
              <input type="text" className="inputOptions"  value={options.children} onChange={(e) => handleInputChange(e, 'children')}/>
            </div>
            <div className="option">
              <span className="optionTitle"  >Room</span>
              <input type="text" className="inputOptions"  value={options.room} onChange={(e) => handleInputChange(e, 'room')} />
            </div>
          </div>
          <button className="searchButton" onClick={handleSearch}>Search</button>
          <button className="searchButton" onClick={handleReset}>Reset Search</button>
        </div>
      <div className="dataGrid">
      {data.map((item)=> (

<List  item={item} key={item._id}/>
))}
      </div>
        
      </div>
    </div>
  );
};

export default HotelList;
