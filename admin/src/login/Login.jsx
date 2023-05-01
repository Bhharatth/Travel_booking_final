import React, { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import "./Login.css"
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();

    const [credentials, setCredentails]= useState({
        username: undefined,
        password: undefined,
    })

    const {loading, error, dispatch}= useContext(AuthContext);

    const handleChange =(e)=> {
        setCredentails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    
     };
  


 const handleLogin =async (e)=> {
  e.preventDefault();
  dispatch({type: "LOGIN_START"});
  try {
    const res = await axios.post("/auth/login", credentials);
    if(res.data.isAdmin){
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.details});
        navigate("/")
    }else{
        dispatch({type: "LOGIN_FAILURE", payload: {message: "You are not allowed"},})
    }
    
  } catch (error) {
    dispatch({type: "LOGIN_FAILURE", payload: error.responce.data});
    
  }
 }


 const handleLogout = (e)=> {
  e.preventDefault();
 }
  return (
    <div className="login" >
      <form>
        <input type="text" id="username" placeholder="username" onChange={handleChange} />
        <input type="text" id="password" placeholder="password" onChange={handleChange}/>
        <button className="loginButton"  onClick={handleLogin}>LOGIN</button>
        <button onClick={handleLogout} disabled={loading}>Logout</button>
      </form>
      {error && <error>Something went wrong...</error>}
      <Link to="/register">CREATE A NEW ACCOUNT</Link>
    </div>
  );
};

export default LoginPage;