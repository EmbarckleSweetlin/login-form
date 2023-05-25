import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./loginPage/login.js";
import { SignupForm } from "./register-page/register.js";
import { Dashboard } from "./dashboard-page/dashboard.js";
import { NewPassword } from "./forgetPassword/forgetPassword.js";
import { Otp } from "./verification-page/otp.js";
import "./App.css";

export function App() {
  return (
    <Routes>
      <Route path="/" Component={LoginForm}></Route>
      <Route path="/signup" Component={SignupForm}></Route>
      <Route path="/dashboard" Component={Dashboard}></Route>
      <Route path="/forgetpassword" Component={NewPassword}></Route>
      <Route path="/verify" Component={Otp}></Route>
    </Routes>
  );
}
