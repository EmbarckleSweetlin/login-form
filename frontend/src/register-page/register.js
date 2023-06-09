import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import {FaEyeSlash} from 'react-icons/fa';
import "./register.css";

export function SignupForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [eyeon, setEyeon] = useState(false);
  const [eyeon2, setEyeon2] = useState(false);

  const inputValues = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios
        .post("http://localhost:3500/signup", {
          userName: userName,
          email: email,
          password: password,
          //   confirmPassword: confirmPassword,
        })
        .then((res) => {
          alert(res.data);
          if (res.data === "you already have an account") {
            alert("Please login");
            navigate("/");
          } else {
            navigate("/verify", {
              state: { email },
            });
          }
        })
    } else {
      alert("passwords did not match");
    }
  };

  return (
    <div id="signup-container">
      <h1 id="signup-head">Signup</h1>
      <form id="signup-form" onSubmit={inputValues}>
       
          <label className="signup-label">User Name</label>
          <input
          id="singup-nameInput"
          className="signupInput"
            type="text"
            placeholder="user name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          required></input>
       
          <label className="signup-label">Email</label>
          <input
           id="singup-mailInput"
           className="signupInput"
            type="email"
            placeholder="mail"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required></input>
       
          <label className="signup-label">Password</label>
          <input
           id="singup-passInput"
           className="signupInput"
            type={eyeon? "text" : "password"}
            placeholder="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            autoComplete="on"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required></input>
        <div id="icons-signup" onClick={()=>{setEyeon(!eyeon)}}>
            {eyeon? <FaEye id="eyeon" color="black" /> :
       <FaEyeSlash color="black"/>}</div>

          <label className="signup-label">Confirm Password</label>
          <input
           id="singup-conpassInput"
           type={eyeon2? "text" : "password"}
            className="signupInput"
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required></input>
       <div id="icons-signup2" onClick={()=>{setEyeon2(!eyeon2)}}>
            {eyeon2? <FaEye color="black" /> :
       <FaEyeSlash color="black"/>}</div>

        <input id="signup-button" type="submit" value="Signup" />
        <div id="signup-div">
          <p id="signup-para">Already have an account?</p>
          <Link id="loginLink" to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
