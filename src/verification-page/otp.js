import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './otp.css';

export function Otp() {
  const [otp, setOtp] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if(state.newpassword===undefined){
    axios
      .post("http://localhost:3500/verify", {
        otp: otp,
        email: state.email,
      })
      .then((res) => {
        if (res.data === "otp is invalid") {
          alert(res.data);
        } else {
          alert(res.data);
          navigate("/");
        }
      });
    } if(state.newpassword!==undefined){
      axios
      .post("http://localhost:3500/forgetverify", {
        otp: otp,
        email: state.email,
        newpassword: state.newpassword
      })
      .then((res) => {
        if (res.data === 'Successfully completed, please login') {
          alert(res.data);
          navigate("/");
        } else {
          alert(res.data);
        }
      });
    }
  };

  return (
    <div id="otp-container">
      <h1 id="otp-head">Please verify your email with otp </h1>
      <label id="otp-label">OTP : </label>
      <input
      id="otp-input"
        type="text"
        placeholder="enter your otp"
        onChange={(e) => setOtp(e.target.value)} required
      ></input>
      <button id="otp-submit" onClick={handleClick}>Submit</button>
    </div>
  );
}
