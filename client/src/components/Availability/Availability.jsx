import React, { useState } from "react";
import "./Availability.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Availability = ({ setOpen, hotelId }) => {
    const {date,options} = useSelector(state=> state.search);
    // console.log(date.startDate)


  const { data, loading, error } = useFetch(`hotels/room/${hotelId}`);

  console.log(data)

  const [selectedRooms, setSelectedRooms] = useState([]);



  const handelSelect = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
//   console.log(selectedRooms);


const getDatesBetween=(startDate, endDate)=> {
    const dates = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      dates.push(currentDate.getTime());
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }
  const allDates = getDatesBetween(date.startDate, date.endDate)

  const isAvailable = (roomNumbers)=> {
    const isFound = roomNumbers.unavailableDates.some((date)=> 
    allDates.includes(new Date(date).getTime()));
    return !isFound;

  }


  const handleUpdate = async ()=> {
    try {
      await   Promise.all(selectedRooms.map((rooms)=>{
        const res = axios.put(`/api/rooms/availability/${rooms}`, {
            dates: allDates,
        });
        console.log(res.data)
        return res.data;
    })
      );
        
    } catch (error) {
        
    }

  }
  console.log()

  return (
    <div>
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        <>
          <div className="popUp">
            <div className="close">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => setOpen(false)}
              />
            </div>
            {data.map((item) => (
              <div className="roomData">
                <div className="roomDetails">
                  <h2 className="roomType">{item.title}</h2>
                  <h3 className="aminities">{item.desc}</h3>
                  <h3 className="maxpeople">Max-people:{item.maxPeople}</h3>
                  <h3 className="totalAmount">Total:${item.price}</h3>
                </div>
                <div className="availability">
                  {item.roomNumbers.map((roomNumber) => (
                    <div className="availableRooms">
                      <span className="roomNumber">{roomNumber.number}</span>
                      <input
                        type="checkBox"
                        value={roomNumber._id}
                        onChange={handelSelect}
                        // disabled={!isAvailable(roomNumber)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={handleUpdate}>Reserve Now!</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Availability;
