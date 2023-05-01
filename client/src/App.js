import React from "react";
import Home from "./Pages/Home";
import SingleHotelPage from "./Pages/SingleHotelPage/SingleHotelPage";
import List from "./components/List/List";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HotelList from "./Pages/HotelList/HotelList";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

const App = () => {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<HotelList/>}/>
        <Route path="/hotels/:id" element={<SingleHotelPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
