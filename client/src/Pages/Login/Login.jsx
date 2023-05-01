import React from 'react';
// import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/apiCalls';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const dispatch = useDispatch(); 
    const user =useSelector((state)=> state.user);


    const handleLogin = (e)=> {
        e.preventDefault();
        login(dispatch, {username, password});
    console.log(user)

    }

  return (
    <div className="login" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
  <form style={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center",marginTop: "25vh" }}>
    <input placeholder="username" onChange={(e) => setUsername(e.target.value)} style={{ padding: "10px", margin: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "300px" }} />
    <input placeholder="password" onChange={(e) => setPassword(e.target.value)} style={{ padding: "10px", margin: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "300px" }} />
    <button className="loginButton" onClick={handleLogin} style={{ backgroundColor: "#0077FF", color: "#fff", border: "none", padding: "10px 20px", fontSize: "1rem", borderRadius: "5px", cursor: "pointer" }}>LOGIN</button>
  </form>
  {/* {error && <error>Something went wrong...</error>} */}
  <Link to="/register" style={{ marginTop: "20px", color: "#0077FF", fontSize: "0.8rem" }}>CREATE A NEW ACCOUNT</Link>
</div>
  )
}

export default Login;