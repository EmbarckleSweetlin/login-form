import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import {FaEyeSlash} from 'react-icons/fa';
import "./login.css";

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eyeon, setEyeon] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(res.data);
        if (res.data === "login successfully") {
          navigate("/dashboard");
        } else if(res.data === "invalid mail id/password, please signup") {
          // alert(res.data);
          navigate('/signup');
        }
      });
  };

  return (
    <div className="login-container">
      <h1 id="login-head">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
       
          <label className="login-label">Email</label>
          <input
            id="login-mailInput"
            className="login-input"
            type="email"
            // pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" 
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            placeholder="Enter your mail id here"
            onChange={(e) => setEmail(e.target.value)} required
          ></input>
          
          <label className="login-label">Password</label>
          <input
          className="login-input"
            id="password-input"
            type={eyeon ? "text" : "password"}
            placeholder="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={(e) => setPassword(e.target.value)}
            required autoComplete="off"/>
            <div id="icons" onClick={()=>{setEyeon(!eyeon)}}>
            {eyeon? <FaEye id="eyeon" color="black" /> :
       <FaEyeSlash color="black"/>}</div>
            <Link id="login-forgetpassword" to="/forgetpassword">Forgot Password?</Link>
        <input id="loginButton" type="submit" value="Login" />
        <div id="login-signup">
          <p id="login-para">Don't have an account?</p>
          <Link id="login-signupLink" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

