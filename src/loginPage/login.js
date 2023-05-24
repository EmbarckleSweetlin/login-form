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
      .post("http://localhost:3500/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data === "login successfully") {
          alert(res.data);
          navigate("/dashboard");
        } else if(res.data === "invalid mail id/password, please signup") {
          alert(res.data);
          navigate('/signup');
        }
      });
  };

  return (
    <div className="login-container">
      <h1 id="login-head">Login Page</h1>
      <form class="login-form" onSubmit={handleSubmit}>
       
          <label>Email</label>
          <input
            id="login-mailInput"
            type="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            placeholder="Enter your mail id here"
            onChange={(e) => setEmail(e.target.value)} required
          ></input>
          <label>Password</label>
          <input
            id="password-input"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required></input>
        <input id="submit" type="submit" value="Login" />
        <div id="signup">
          <p>Don't have an account?</p>
          <a id="login-signupLink" href="/signup">
            Signup
          </a>
        </div>
      </form>
    </div>
  );
}

