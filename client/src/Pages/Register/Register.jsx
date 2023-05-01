import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../Redux/requestMethods";
import { Navigate } from "react-router-dom";
import {  register } from "../../Redux/apiCalls";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
 const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    register(dispatch,{ username,email,password });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f1f1f1",
        height: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <span
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          CREATE AN ACCOUNT
        </span>

        <input
          style={{
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            padding: "10px",
            margin: "10px 0",
            type: "password",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          style={{
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="conform password"
          onChange={(e) => setConformPassword(e.target.value)}
        />
        <button
          style={{
            width: "60%",
            border: "none",
            padding: "15px 20px",
            backgroundColor: "teal",
            color: "white",
            cursor: "pointer",
            marginBottom: "10px",
            ...(password !== conformPassword && { disabled: true }),
          }}
          onClick={handleRegister}
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Register;
