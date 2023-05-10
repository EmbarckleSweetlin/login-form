import React from "react";
// import "./login.css";

export function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="mail"></input>
        <label>Password</label>
        <input type="password" placeholder="password" autoComplete="on"></input>
        <button type="submit">login</button>
        <p>Not have an account?</p>
        <a href="/signup">Signup</a>
      </form>
    </div>
  );
}
