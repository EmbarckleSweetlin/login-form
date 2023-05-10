import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./loginPage/login.js";
import { SignupForm } from "./register-page/register.js";
// import "./app.css";

export function App() {
  return (
    <Routes>
      <Route path="/" Component={LoginForm}></Route>
      <Route path="/signup" Component={SignupForm}></Route>
    </Routes>
  );
}
