import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(res.data);
        if (res.data === "login successfully") {
          navigate("/dashboard");
        }
      });
  };

  return (
    <div className="login-container">
      <img
        id="logo"
        src="https://econnect.embarckle.com/logo-text-light.63fac4b2.png"
        alt="Loading"
      />
      <h1 id="login-head">Login Page</h1>
      <form class="login-form" onSubmit={handleSubmit}>
        <div id="email-container">
          <label>Email</label>
          <input
            id="mail-input"
            type="email"
            placeholder="Enter your mail id here"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div id="pass-container">
          <label>Password</label>
          <input
            id="password-input"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input id="submit" type="submit" value="Login" />
        <div id="signup">
          <p>Not have an account?</p>
          <a id="signup-link" href="/signup">
            Signup
          </a>
        </div>
      </form>
    </div>
  );
}

