import React from "react";

export function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSignup = () => {
    // alert("Successfully Completed");
    // return console.log("hello");
    fetch("localhost:3000").then();
  };
  return (
    <div id="signup-container">
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type="text" placeholder="user name"></input>
        <label>Email</label>
        <input type="email" placeholder="mail"></input>
        <label>Password</label>
        <input type="password" placeholder="password" autoComplete="on"></input>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          autoComplete="on"
        ></input>
        <button onSubmit={handleSignup}>Signup</button>
        <p>Already have an account?</p>
        <a href="/">Login</a>
      </form>
    </div>
  );
}
